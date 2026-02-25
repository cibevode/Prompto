/**
 * context.ts — Gather contextual information from the current Obsidian state
 */
import { App, MarkdownView, TFile } from "obsidian";
import { ObsidianContext } from "../types";

/**
 * Collect context from the active note, selection, backlinks, and recent files.
 */
export function gatherContext(app: App, maxChars: number): ObsidianContext {
	const ctx: ObsidianContext = {
		selectedText: "",
		activeNoteContent: "",
		activeNoteTitle: "",
		activeNotePath: "",
		backlinks: [],
		recentNotes: [],
		activeNoteSummary: "",
	};

	// Active view & selection
	const view = app.workspace.getActiveViewOfType(MarkdownView);
	if (view) {
		const editor = view.editor;
		ctx.selectedText = editor.getSelection() || "";

		const file = view.file;
		if (file) {
			ctx.activeNoteTitle = file.basename;
			ctx.activeNotePath = file.path;

			const content = editor.getValue();
			ctx.activeNoteContent = content.slice(0, maxChars);
			ctx.activeNoteSummary = content.slice(0, 500);

			// Backlinks
			const backlinks = getBacklinks(app, file);
			ctx.backlinks = backlinks.slice(0, 10);
		}
	}

	// Recent files (from workspace recent list)
	ctx.recentNotes = getRecentNotes(app, 5);

	return ctx;
}

/** Get titles of notes linking to the given file */
function getBacklinks(app: App, file: TFile): string[] {
	const backlinks: string[] = [];
	// Use resolvedLinks from metadata cache
	const allLinks = app.metadataCache.resolvedLinks;
	for (const [sourcePath, targets] of Object.entries(allLinks)) {
		if (targets[file.path] && targets[file.path] > 0) {
			const sourceFile = app.vault.getAbstractFileByPath(sourcePath);
			if (sourceFile instanceof TFile) {
				backlinks.push(sourceFile.basename);
			}
		}
	}
	return backlinks;
}

/** Get recently opened note titles */
function getRecentNotes(app: App, count: number): string[] {
	const recent: string[] = [];
	// Iterate leaves looking for markdown views
	app.workspace.iterateAllLeaves((leaf) => {
		if (leaf.view instanceof MarkdownView && leaf.view.file) {
			const title = leaf.view.file.basename;
			if (!recent.includes(title)) {
				recent.push(title);
			}
		}
	});
	return recent.slice(0, count);
}

/**
 * Build a concise context string for the refiner prompt.
 */
export function formatContextForRefiner(ctx: ObsidianContext): string {
	const parts: string[] = [];

	if (ctx.selectedText) {
		parts.push(`## Selected Text\n${ctx.selectedText}`);
	}
	if (ctx.activeNoteTitle) {
		parts.push(`## Active Note: "${ctx.activeNoteTitle}" (${ctx.activeNotePath})`);
	}
	if (ctx.activeNoteSummary) {
		parts.push(`## Note Summary\n${ctx.activeNoteSummary}`);
	}
	if (ctx.backlinks.length > 0) {
		parts.push(`## Backlinks\nNotes linking here: ${ctx.backlinks.join(", ")}`);
	}
	if (ctx.recentNotes.length > 0) {
		parts.push(`## Recent Notes\n${ctx.recentNotes.join(", ")}`);
	}

	return parts.join("\n\n");
}
