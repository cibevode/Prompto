/**
 * frontmatter.ts — Parse prompt files and update frontmatter fields
 */
import { App, TFile } from "obsidian";
import { PromptFile } from "../types";

/**
 * Parse a .md file into a PromptFile object.
 * Returns null if the file doesn't have valid Prompto frontmatter.
 */
export async function parsePromptFile(app: App, file: TFile): Promise<PromptFile | null> {
	try {
		const content = await app.vault.read(file);
		const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
		if (!fmMatch) return null;

		const fmBlock = fmMatch[1];
		const body = fmMatch[2].trim();

		const fm = parseYamlSimple(fmBlock);
		if (!fm["name"] && !fm["category"]) return null;

		return {
			path: file.path,
			name: fm["name"] || file.basename,
			category: fm["category"] || "Daily",
			tags: parseArray(fm["tags"]),
			variables: parseArray(fm["variables"]),
			version: parseInt(fm["version"], 10) || 1,
			effectiveness: parseFloat(fm["effectiveness"]) || 0,
			lastUsed: fm["lastUsed"] || "",
			icon: fm["icon"] || "file-text",
			body: body,
			favorite: fm["favorite"] === "true" || fm["favorite"] === true,
		};
	} catch {
		return null;
	}
}

/**
 * Very simple YAML parser for flat frontmatter.
 * Handles strings, numbers, booleans, and bracket arrays.
 */
function parseYamlSimple(block: string): Record<string, any> {
	const result: Record<string, any> = {};
	const lines = block.split("\n");
	for (const line of lines) {
		const m = line.match(/^(\w+):\s*(.*)$/);
		if (!m) continue;
		let val = m[2].trim();
		// Strip surrounding quotes
		if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
			val = val.slice(1, -1);
		}
		result[m[1]] = val;
	}
	return result;
}

/** Parse "[a, b, c]" style arrays from YAML */
function parseArray(val: any): string[] {
	if (!val) return [];
	if (Array.isArray(val)) return val;
	const str = String(val).trim();
	if (str.startsWith("[") && str.endsWith("]")) {
		return str
			.slice(1, -1)
			.split(",")
			.map((s) => s.trim().replace(/^["']|["']$/g, ""))
			.filter(Boolean);
	}
	return str ? [str] : [];
}

/**
 * Update a specific frontmatter field in a prompt file.
 */
export async function updateFrontmatterField(
	app: App,
	filePath: string,
	field: string,
	value: string | number | boolean
): Promise<void> {
	const file = app.vault.getAbstractFileByPath(filePath);
	if (!(file instanceof TFile)) return;

	let content = await app.vault.read(file);
	const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
	if (!fmMatch) return;

	const fmBlock = fmMatch[1];
	const formatted = typeof value === "string" ? `"${value}"` : String(value);
	const fieldRegex = new RegExp(`^(${field}:\\s*).*$`, "m");

	let newFm: string;
	if (fieldRegex.test(fmBlock)) {
		newFm = fmBlock.replace(fieldRegex, `$1${formatted}`);
	} else {
		newFm = fmBlock + `\n${field}: ${formatted}`;
	}

	content = content.replace(/^---\n[\s\S]*?\n---/, `---\n${newFm}\n---`);
	await app.vault.modify(file, content);
}

/**
 * Generate the _Prompto Index.md stats file.
 */
export function generateIndexContent(prompts: PromptFile[]): string {
	const now = new Date().toISOString().slice(0, 10);
	const cats: Record<string, number> = {};
	let totalEff = 0;
	let rated = 0;

	for (const p of prompts) {
		cats[p.category] = (cats[p.category] || 0) + 1;
		if (p.effectiveness > 0) {
			totalEff += p.effectiveness;
			rated++;
		}
	}

	const avgEff = rated > 0 ? (totalEff / rated).toFixed(1) : "N/A";
	const topPrompts = [...prompts]
		.filter((p) => p.effectiveness > 0)
		.sort((a, b) => b.effectiveness - a.effectiveness)
		.slice(0, 5);

	let md = `# 📋 Prompto Library Index\n\n`;
	md += `*Auto-generated on ${now}*\n\n`;
	md += `## Stats\n\n`;
	md += `| Metric | Value |\n|--------|-------|\n`;
	md += `| Total prompts | ${prompts.length} |\n`;
	md += `| Average effectiveness | ${avgEff} ⭐ |\n`;
	md += `| Categories | ${Object.keys(cats).length} |\n\n`;

	md += `## By Category\n\n`;
	for (const [cat, count] of Object.entries(cats).sort((a, b) => b[1] - a[1])) {
		md += `- **${cat}**: ${count} prompts\n`;
	}

	if (topPrompts.length > 0) {
		md += `\n## Top Rated\n\n`;
		for (const p of topPrompts) {
			md += `- **${p.name}** — ${p.effectiveness} ⭐ (${p.category})\n`;
		}
	}

	md += `\n---\n*Managed by [Prompto](https://github.com/prompto-obsidian/prompto)*\n`;
	return md;
}
