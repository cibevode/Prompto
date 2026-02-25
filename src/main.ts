/**
 * main.ts — Prompto: Intelligent Context-Aware Prompt Library for Obsidian
 *
 * Entry point. Registers the sidebar view, commands, settings, and injects styles.
 */
import { Plugin, Notice, TFile, TFolder, MarkdownView, WorkspaceLeaf } from "obsidian";
import { PromptoSettings, DEFAULT_SETTINGS, VIEW_TYPE_PROMPTO } from "./types";
import { PromptoSettingTab } from "./settings";
import { PromptLibraryView } from "./views/PromptLibraryView";
import { generateIndexContent, parsePromptFile } from "./utils/frontmatter";

export default class PromptoPlugin extends Plugin {
	settings: PromptoSettings = DEFAULT_SETTINGS;

	async onload(): Promise<void> {
		await this.loadSettings();

		// Register sidebar view
		this.registerView(VIEW_TYPE_PROMPTO, (leaf) => new PromptLibraryView(leaf, this));

		// Inject CSS
		this.injectStyles();

		// Ribbon icon
		this.addRibbonIcon("target", "Open Prompto Library", () => this.activateView());

		// Commands
		this.addCommand({
			id: "open-prompto-library",
			name: "Open Prompto Library",
			callback: () => this.activateView(),
		});

		this.addCommand({
			id: "save-chat-as-prompt",
			name: "Save current note as new prompt",
			editorCallback: async (editor) => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				await this.saveCurrentAsPrompt(editor, view);
			},
		});

		this.addCommand({
			id: "generate-prompto-index",
			name: "Generate Prompto Index",
			callback: () => this.generateIndex(),
		});

		this.addCommand({
			id: "refresh-prompto-library",
			name: "Refresh Prompto Library",
			callback: () => this.refreshView(),
		});

		// Settings tab
		this.addSettingTab(new PromptoSettingTab(this.app, this));

		// Ensure library folder exists
		this.app.workspace.onLayoutReady(async () => {
			await this.ensureLibraryFolder();
			// Generate index on startup if enabled
			if (this.settings.generateIndex) {
				await this.generateIndex();
			}
		});
	}

	onunload(): void {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE_PROMPTO);
	}

	/** Activate (or focus) the sidebar view */
	async activateView(): Promise<void> {
		const { workspace } = this.app;

		let leaf: WorkspaceLeaf | null = null;
		const leaves = workspace.getLeavesOfType(VIEW_TYPE_PROMPTO);

		if (leaves.length > 0) {
			leaf = leaves[0];
		} else {
			const rightLeaf = workspace.getRightLeaf(false);
			if (rightLeaf) {
				leaf = rightLeaf;
				await leaf.setViewState({ type: VIEW_TYPE_PROMPTO, active: true });
			}
		}

		if (leaf) {
			workspace.revealLeaf(leaf);
		}
	}

	/** Ensure the library folder exists */
	async ensureLibraryFolder(): Promise<void> {
		const path = this.settings.libraryPath;
		const folder = this.app.vault.getAbstractFileByPath(path);
		if (!folder) {
			await this.app.vault.createFolder(path);
			new Notice(`Created Prompto Library at "${path}"`);
		}
	}

	/** Save current note content as a new prompt file */
	async saveCurrentAsPrompt(editor: any, view: any): Promise<void> {
		const content = editor.getValue();
		const selection = editor.getSelection();
		const text = selection || content;
		const title = view.file?.basename || "New Prompt";

		const frontmatter = [
			"---",
			`name: "${title}"`,
			`category: Daily`,
			`tags: [custom]`,
			`variables: []`,
			`version: 1`,
			`effectiveness: 0`,
			`lastUsed: "${new Date().toISOString().slice(0, 10)}"`,
			`icon: "file-text"`,
			"---",
		].join("\n");

		const filePath = `${this.settings.libraryPath}/${title}.md`;
		const existing = this.app.vault.getAbstractFileByPath(filePath);
		if (existing) {
			new Notice(`Prompt "${title}" already exists in library.`);
			return;
		}

		await this.ensureLibraryFolder();
		await this.app.vault.create(filePath, `${frontmatter}\n\n${text}`);
		new Notice(`Saved "${title}" to Prompto Library!`);
		await this.refreshView();
	}

	/** Generate the _Prompto Index.md file */
	async generateIndex(): Promise<void> {
		const folder = this.app.vault.getAbstractFileByPath(this.settings.libraryPath);
		if (!(folder instanceof TFolder)) return;

		const prompts = [];
		for (const child of folder.children) {
			if (child instanceof TFile && child.extension === "md" && !child.basename.startsWith("_")) {
				const pf = await parsePromptFile(this.app, child);
				if (pf) prompts.push(pf);
			}
		}

		const content = generateIndexContent(prompts);
		const indexPath = `${this.settings.libraryPath}/_Prompto Index.md`;
		const existing = this.app.vault.getAbstractFileByPath(indexPath);

		if (existing instanceof TFile) {
			await this.app.vault.modify(existing, content);
		} else {
			await this.app.vault.create(indexPath, content);
		}
	}

	/** Refresh the sidebar view */
	async refreshView(): Promise<void> {
		const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_PROMPTO);
		for (const leaf of leaves) {
			const view = leaf.view;
			if (view instanceof PromptLibraryView) {
				await view.refresh();
			}
		}
	}

	async loadSettings(): Promise<void> {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings);
	}

	/** Inject all plugin CSS */
	private injectStyles(): void {
		const css = `
/* ═══════════════════════════════════════════════════════
   PROMPTO — Obsidian-native styling (dark + light)
   ═══════════════════════════════════════════════════════ */

/* ─── Sidebar ─── */
.prompto-sidebar {
	padding: 0;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
.prompto-sidebar-header {
	padding: 12px 12px 8px;
	border-bottom: 1px solid var(--background-modifier-border);
	flex-shrink: 0;
}
.prompto-title-row {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 8px;
}
.prompto-title-row h3 {
	margin: 0;
	font-size: 16px;
	font-weight: 600;
}
.prompto-title-icon { display: flex; align-items: center; }
.prompto-title-icon svg { width: 18px; height: 18px; color: var(--text-accent); }
.prompto-count-badge {
	background: var(--interactive-accent);
	color: var(--text-on-accent);
	padding: 1px 7px;
	border-radius: 10px;
	font-size: 11px;
	font-weight: 600;
	margin-left: auto;
}

/* ─── Search ─── */
.prompto-search-wrap {
	display: flex;
	align-items: center;
	background: var(--background-secondary);
	border-radius: 6px;
	padding: 4px 8px;
	margin-bottom: 8px;
}
.prompto-search-icon { display: flex; margin-right: 6px; }
.prompto-search-icon svg { width: 14px; height: 14px; color: var(--text-muted); }
.prompto-search-input {
	border: none;
	background: transparent;
	width: 100%;
	font-size: 13px;
	color: var(--text-normal);
	outline: none;
}
.prompto-search-input::placeholder { color: var(--text-faint); }

/* ─── Tabs ─── */
.prompto-tabs {
	display: flex;
	gap: 2px;
	overflow-x: auto;
	padding-bottom: 4px;
}
.prompto-tabs::-webkit-scrollbar { height: 0; }
.prompto-tab {
	display: flex;
	align-items: center;
	gap: 3px;
	padding: 4px 8px;
	border-radius: 6px;
	border: none;
	background: transparent;
	color: var(--text-muted);
	font-size: 11px;
	cursor: pointer;
	white-space: nowrap;
	transition: background 0.15s, color 0.15s;
}
.prompto-tab:hover { background: var(--background-modifier-hover); color: var(--text-normal); }
.prompto-tab-active {
	background: var(--interactive-accent) !important;
	color: var(--text-on-accent) !important;
}
.prompto-tab-icon { display: flex; }
.prompto-tab-icon svg { width: 12px; height: 12px; }

/* ─── Cards Grid ─── */
.prompto-cards {
	flex: 1;
	overflow-y: auto;
	padding: 8px 12px;
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.prompto-card {
	background: var(--background-secondary);
	border: 1px solid var(--background-modifier-border);
	border-radius: 8px;
	padding: 12px;
	cursor: pointer;
	transition: border-color 0.15s, box-shadow 0.15s;
	position: relative;
}
.prompto-card:hover {
	border-color: var(--interactive-accent);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.prompto-card-header {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 6px;
}
.prompto-card-icon { display: flex; flex-shrink: 0; }
.prompto-card-icon svg { width: 16px; height: 16px; color: var(--text-accent); }
.prompto-card-title {
	font-weight: 600;
	font-size: 13px;
	color: var(--text-normal);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.prompto-card-meta {
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
	margin-bottom: 6px;
}
.prompto-card-category {
	background: var(--interactive-accent);
	color: var(--text-on-accent);
	padding: 1px 6px;
	border-radius: 4px;
	font-size: 10px;
	font-weight: 600;
}
.prompto-card-tag {
	background: var(--background-modifier-border);
	color: var(--text-muted);
	padding: 1px 6px;
	border-radius: 4px;
	font-size: 10px;
}
.prompto-card-body {
	font-size: 12px;
	color: var(--text-muted);
	line-height: 1.4;
	margin-bottom: 6px;
}
.prompto-card-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.prompto-card-stars {
	font-size: 11px;
	color: var(--text-accent);
}
.prompto-card-date {
	font-size: 10px;
	color: var(--text-faint);
}
.prompto-card-fav {
	position: absolute;
	top: 8px;
	right: 8px;
	cursor: pointer;
	display: flex;
}
.prompto-card-fav svg { width: 14px; height: 14px; color: var(--text-accent); }

/* ─── Empty state ─── */
.prompto-empty {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40px 20px;
	text-align: center;
	color: var(--text-muted);
}
.prompto-empty-icon svg { width: 40px; height: 40px; color: var(--text-faint); }
.prompto-empty p { margin: 8px 0 0; font-size: 13px; }
.prompto-empty-hint { font-size: 11px; color: var(--text-faint); }

/* ═══════════════════════════════════════════════════════
   PREVIEW MODAL
   ═══════════════════════════════════════════════════════ */
.prompto-preview-modal {
	max-width: 900px;
	width: 90vw;
}
.prompto-modal-titlebar {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 16px;
	border-bottom: 1px solid var(--background-modifier-border);
	padding-bottom: 12px;
}
.prompto-modal-titlebar h2 { margin: 0; font-size: 18px; }
.prompto-modal-icon { display: flex; }
.prompto-modal-icon svg { width: 22px; height: 22px; color: var(--text-accent); }
.prompto-category-badge {
	background: var(--interactive-accent);
	color: var(--text-on-accent);
	padding: 2px 10px;
	border-radius: 12px;
	font-size: 11px;
	font-weight: 600;
	margin-left: auto;
}

/* Two-column layout */
.prompto-columns {
	display: flex;
	gap: 20px;
	min-height: 300px;
}
.prompto-col-left {
	flex: 1;
	border-right: 1px solid var(--background-modifier-border);
	padding-right: 20px;
	overflow-y: auto;
	max-height: 60vh;
}
.prompto-col-right {
	width: 300px;
	flex-shrink: 0;
	overflow-y: auto;
	max-height: 60vh;
}
.prompto-col-left h3, .prompto-col-right h3 {
	font-size: 13px;
	font-weight: 600;
	color: var(--text-muted);
	text-transform: uppercase;
	letter-spacing: 0.5px;
	margin: 0 0 10px;
}
.prompto-preview-content {
	font-size: 14px;
	line-height: 1.6;
}

/* Variables */
.prompto-vars { margin-bottom: 16px; }
.prompto-var-group { margin-bottom: 10px; }
.prompto-var-label {
	display: block;
	font-size: 12px;
	font-weight: 600;
	color: var(--text-normal);
	margin-bottom: 4px;
	text-transform: capitalize;
}
.prompto-var-input {
	width: 100%;
	resize: vertical;
	font-size: 13px;
}

/* Context summary */
.prompto-context-summary {
	background: var(--background-secondary);
	border-radius: 6px;
	padding: 10px;
	margin-bottom: 16px;
}
.prompto-ctx-item {
	font-size: 12px;
	color: var(--text-normal);
	margin-bottom: 4px;
	line-height: 1.4;
}
.prompto-ctx-empty { color: var(--text-faint); font-style: italic; }

/* Buttons */
.prompto-actions {
	display: flex;
	flex-direction: column;
	gap: 6px;
	margin-bottom: 16px;
}
.prompto-btn {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 8px 12px;
	border-radius: 6px;
	border: 1px solid var(--background-modifier-border);
	background: var(--background-secondary);
	color: var(--text-normal);
	font-size: 13px;
	cursor: pointer;
	transition: background 0.15s, border-color 0.15s;
}
.prompto-btn:hover {
	background: var(--background-modifier-hover);
	border-color: var(--interactive-accent);
}
.prompto-btn svg { width: 14px; height: 14px; }
.prompto-btn-primary {
	background: var(--interactive-accent);
	color: var(--text-on-accent);
	border-color: var(--interactive-accent);
}
.prompto-btn-primary:hover { opacity: 0.9; }
.prompto-btn-adapt {
	background: var(--interactive-accent);
	color: var(--text-on-accent);
	border-color: var(--interactive-accent);
}
.prompto-btn-loading {
	opacity: 0.6;
	pointer-events: none;
}
.prompto-btn-disabled {
	opacity: 0.4;
	cursor: not-allowed;
}
.prompto-send-buttons {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 6px;
}
.prompto-send-btn {
	font-size: 12px;
	padding: 6px 8px;
	justify-content: center;
}

/* ═══════════════════════════════════════════════════════
   RESPONSE MODAL
   ═══════════════════════════════════════════════════════ */
.prompto-response-modal { max-width: 700px; width: 85vw; }
.prompto-response-header {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 12px;
}
.prompto-response-header h2 { margin: 0; }
.prompto-header-icon { display: inline-flex; margin-right: 4px; }
.prompto-header-icon svg { width: 20px; height: 20px; }
.prompto-response-content {
	background: var(--background-secondary);
	border-radius: 8px;
	padding: 16px;
	max-height: 50vh;
	overflow-y: auto;
	margin-bottom: 16px;
	font-size: 14px;
	line-height: 1.6;
}
.prompto-response-actions {
	display: flex;
	gap: 8px;
	margin-bottom: 16px;
}
.prompto-rating-section { text-align: center; }
.prompto-rating-section h3 { font-size: 14px; margin-bottom: 8px; }
.prompto-stars { display: flex; justify-content: center; gap: 8px; }
.prompto-star-btn {
	background: none;
	border: none;
	cursor: pointer;
	padding: 4px;
	transition: transform 0.15s;
}
.prompto-star-btn:hover { transform: scale(1.3); }
.prompto-star-btn svg { width: 24px; height: 24px; color: var(--text-accent); }

/* ─── Mobile responsive ─── */
@media (max-width: 600px) {
	.prompto-columns { flex-direction: column; }
	.prompto-col-left {
		border-right: none;
		border-bottom: 1px solid var(--background-modifier-border);
		padding-right: 0;
		padding-bottom: 16px;
		max-height: 40vh;
	}
	.prompto-col-right { width: 100%; }
	.prompto-send-buttons { grid-template-columns: 1fr; }
	.prompto-preview-modal { width: 95vw; }
	.prompto-response-modal { width: 95vw; }
}
`;
		const styleEl = document.createElement("style");
		styleEl.id = "prompto-styles";
		styleEl.textContent = css;
		document.head.appendChild(styleEl);

		this.register(() => {
			const el = document.getElementById("prompto-styles");
			if (el) el.remove();
		});
	}
}
