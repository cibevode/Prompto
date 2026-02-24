/**
 * types.ts — Core type definitions for Prompto plugin
 */

/** Supported LLM provider identifiers */
export type LLMProvider = "grok" | "claude" | "openai" | "ollama";

/** Prompt categories (matching sidebar tabs) */
export type PromptCategory =
	| "All"
	| "Writing"
	| "Coding"
	| "Research"
	| "Product"
	| "Daily"
	| "Favorites";

/** A parsed prompt file from the vault */
export interface PromptFile {
	/** Vault-relative file path */
	path: string;
	/** Human-readable name from frontmatter */
	name: string;
	category: string;
	tags: string[];
	/** Variable placeholder names e.g. ["selected_text","tone"] */
	variables: string[];
	version: number;
	/** 0-5 star rating */
	effectiveness: number;
	lastUsed: string;
	/** Lucide icon name */
	icon: string;
	/** The raw body below the frontmatter */
	body: string;
	/** Whether the user has favorited this prompt */
	favorite?: boolean;
}

/** Contextual information gathered from the current Obsidian state */
export interface ObsidianContext {
	/** Currently selected text in the editor */
	selectedText: string;
	/** Full content of the active note (truncated for large files) */
	activeNoteContent: string;
	/** Title of the active note */
	activeNoteTitle: string;
	/** Vault-relative path of the active note */
	activeNotePath: string;
	/** Titles of notes that link to the active note */
	backlinks: string[];
	/** Titles of recently opened notes */
	recentNotes: string[];
	/** Summary (first ~500 chars of active note) */
	activeNoteSummary: string;
}

/** Variable values filled by the user or auto-detected */
export interface VariableValues {
	[key: string]: string;
}

/** Result of the refiner adaptation */
export interface AdaptationResult {
	adaptedPrompt: string;
	/** Short explanation of what was changed */
	adaptationNotes: string;
}

/** Settings for the Prompto plugin */
export interface PromptoSettings {
	/** Vault path to the prompt library folder */
	libraryPath: string;
	/** Default refiner provider */
	defaultRefiner: LLMProvider;
	/** Default send-to provider */
	defaultSendTo: LLMProvider;
	/** API keys per provider */
	grokApiKey: string;
	claudeApiKey: string;
	openaiApiKey: string;
	/** Ollama base URL (e.g. http://localhost:11434) */
	ollamaUrl: string;
	/** Ollama model name */
	ollamaModel: string;
	/** Whether to auto-detect context */
	autoDetectContext: boolean;
	/** Whether to auto-adapt prompts with refiner */
	autoAdapt: boolean;
	/** Whether to generate the index file */
	generateIndex: boolean;
	/** Max context characters sent to refiner */
	maxContextChars: number;
}

export const DEFAULT_SETTINGS: PromptoSettings = {
	libraryPath: "Prompto Library",
	defaultRefiner: "grok",
	defaultSendTo: "grok",
	grokApiKey: "",
	claudeApiKey: "",
	openaiApiKey: "",
	ollamaUrl: "http://localhost:11434",
	ollamaModel: "llama3",
	autoDetectContext: true,
	autoAdapt: true,
	generateIndex: true,
	maxContextChars: 4000,
};

/** View type identifier for the sidebar */
export const VIEW_TYPE_PROMPTO = "prompto-library-view";

/** Category list with icons */
export const CATEGORIES: { label: PromptCategory; icon: string }[] = [
	{ label: "All", icon: "layout-grid" },
	{ label: "Writing", icon: "pen-tool" },
	{ label: "Coding", icon: "code-2" },
	{ label: "Research", icon: "search" },
	{ label: "Product", icon: "package" },
	{ label: "Daily", icon: "calendar" },
	{ label: "Favorites", icon: "star" },
];
