/**
 * PromptLibraryView.ts — Sidebar view with searchable card grid and category tabs
 */
import { ItemView, WorkspaceLeaf, setIcon, TFile, TFolder } from "obsidian";
import { VIEW_TYPE_PROMPTO, PromptFile, PromptCategory, CATEGORIES } from "../types";
import { parsePromptFile } from "../utils/frontmatter";
import { PreviewModal } from "../modals/PreviewModal";
import type PromptoPlugin from "../main";

export class PromptLibraryView extends ItemView {
	plugin: PromptoPlugin;
	private prompts: PromptFile[] = [];
	private filteredPrompts: PromptFile[] = [];
	private activeCategory: PromptCategory = "All";
	private searchQuery = "";
	private cardsContainer: HTMLElement | null = null;

	constructor(leaf: WorkspaceLeaf, plugin: PromptoPlugin) {
		super(leaf);
		this.plugin = plugin;
	}

	getViewType(): string {
		return VIEW_TYPE_PROMPTO;
	}

	getDisplayText(): string {
		return "Prompto";
	}

	getIcon(): string {
		return "target";
	}

	async onOpen(): Promise<void> {
		await this.loadPrompts();
		this.buildUI();
	}

	async onClose(): Promise<void> {
		this.contentEl.empty();
	}

	/** Reload prompts from the library folder */
	async loadPrompts(): Promise<void> {
		this.prompts = [];
		const folder = this.app.vault.getAbstractFileByPath(this.plugin.settings.libraryPath);
		if (!(folder instanceof TFolder)) return;

		for (const child of folder.children) {
			if (child instanceof TFile && child.extension === "md" && !child.basename.startsWith("_")) {
				const pf = await parsePromptFile(this.app, child);
				if (pf) this.prompts.push(pf);
			}
		}

		// Sort by effectiveness desc, then name
		this.prompts.sort((a, b) => b.effectiveness - a.effectiveness || a.name.localeCompare(b.name));
		this.applyFilters();
	}

	/** Apply category and search filters */
	private applyFilters(): void {
		this.filteredPrompts = this.prompts.filter((p) => {
			// Category filter
			if (this.activeCategory === "Favorites") {
				if (!p.favorite) return false;
			} else if (this.activeCategory !== "All") {
				if (p.category !== this.activeCategory) return false;
			}
			// Search filter
			if (this.searchQuery) {
				const q = this.searchQuery.toLowerCase();
				return (
					p.name.toLowerCase().includes(q) ||
					p.tags.some((t) => t.toLowerCase().includes(q)) ||
					p.category.toLowerCase().includes(q) ||
					p.body.toLowerCase().includes(q)
				);
			}
			return true;
		});
	}

	/** Build the full sidebar UI */
	private buildUI(): void {
		const { contentEl } = this;
		contentEl.empty();
		contentEl.addClass("prompto-sidebar");

		// Header
		const header = contentEl.createDiv({ cls: "prompto-sidebar-header" });
		const titleRow = header.createDiv({ cls: "prompto-title-row" });
		const titleIcon = titleRow.createSpan({ cls: "prompto-title-icon" });
		setIcon(titleIcon, "target");
		titleRow.createEl("h3", { text: "Prompto" });
		const countBadge = titleRow.createSpan({
			cls: "prompto-count-badge",
			text: String(this.prompts.length),
		});

		// Search
		const searchWrap = header.createDiv({ cls: "prompto-search-wrap" });
		const searchIcon = searchWrap.createSpan({ cls: "prompto-search-icon" });
		setIcon(searchIcon, "search");
		const searchInput = searchWrap.createEl("input", {
			type: "text",
			placeholder: "Search prompts...",
			cls: "prompto-search-input",
		});
		searchInput.addEventListener("input", () => {
			this.searchQuery = searchInput.value;
			this.applyFilters();
			this.renderCards();
		});

		// Category tabs
		const tabsRow = header.createDiv({ cls: "prompto-tabs" });
		for (const cat of CATEGORIES) {
			const tab = tabsRow.createEl("button", {
				cls: `prompto-tab ${this.activeCategory === cat.label ? "prompto-tab-active" : ""}`,
			});
			const tabIcon = tab.createSpan({ cls: "prompto-tab-icon" });
			setIcon(tabIcon, cat.icon);
			tab.createSpan({ text: ` ${cat.label}` });
			tab.addEventListener("click", () => {
				this.activeCategory = cat.label;
				tabsRow.querySelectorAll(".prompto-tab").forEach((t) => t.removeClass("prompto-tab-active"));
				tab.addClass("prompto-tab-active");
				this.applyFilters();
				this.renderCards();
			});
		}

		// Cards container
		this.cardsContainer = contentEl.createDiv({ cls: "prompto-cards" });
		this.renderCards();
	}

	/** Render (or re-render) the cards grid */
	private renderCards(): void {
		if (!this.cardsContainer) return;
		this.cardsContainer.empty();

		if (this.filteredPrompts.length === 0) {
			const empty = this.cardsContainer.createDiv({ cls: "prompto-empty" });
			setIcon(empty.createDiv({ cls: "prompto-empty-icon" }), "inbox");
			empty.createEl("p", { text: "No prompts found." });
			if (this.prompts.length === 0) {
				empty.createEl("p", {
					text: "Add .md files to your Prompto Library folder, or use the sample library.",
					cls: "prompto-empty-hint",
				});
			}
			return;
		}

		for (const prompt of this.filteredPrompts) {
			this.renderCard(prompt);
		}
	}

	/** Render a single prompt card */
	private renderCard(prompt: PromptFile): void {
		if (!this.cardsContainer) return;

		const card = this.cardsContainer.createDiv({ cls: "prompto-card" });
		card.addEventListener("click", () => {
			new PreviewModal(this.app, prompt, this.plugin.settings).open();
		});

		// Card header
		const cardHeader = card.createDiv({ cls: "prompto-card-header" });
		const iconEl = cardHeader.createSpan({ cls: "prompto-card-icon" });
		setIcon(iconEl, prompt.icon || "file-text");
		cardHeader.createEl("span", { text: prompt.name, cls: "prompto-card-title" });

		// Category + tags
		const meta = card.createDiv({ cls: "prompto-card-meta" });
		meta.createSpan({ cls: "prompto-card-category", text: prompt.category });
		for (const tag of prompt.tags.slice(0, 3)) {
			meta.createSpan({ cls: "prompto-card-tag", text: tag });
		}

		// Body preview
		const bodyPreview = prompt.body.slice(0, 100).replace(/\n/g, " ");
		card.createDiv({
			cls: "prompto-card-body",
			text: bodyPreview + (prompt.body.length > 100 ? "…" : ""),
		});

		// Footer: stars + lastUsed
		const footer = card.createDiv({ cls: "prompto-card-footer" });
		if (prompt.effectiveness > 0) {
			const starsStr = "★".repeat(Math.round(prompt.effectiveness)) +
				"☆".repeat(5 - Math.round(prompt.effectiveness));
			footer.createSpan({
				cls: "prompto-card-stars",
				text: `${starsStr} ${prompt.effectiveness}`,
			});
		}
		if (prompt.lastUsed) {
			footer.createSpan({ cls: "prompto-card-date", text: prompt.lastUsed });
		}

		// Favorite toggle
		const favBtn = card.createDiv({ cls: "prompto-card-fav" });
		setIcon(favBtn, prompt.favorite ? "star" : "star");
		favBtn.style.opacity = prompt.favorite ? "1" : "0.3";
		favBtn.addEventListener("click", async (e) => {
			e.stopPropagation();
			prompt.favorite = !prompt.favorite;
			const { updateFrontmatterField } = await import("../utils/frontmatter");
			await updateFrontmatterField(this.app, prompt.path, "favorite", prompt.favorite);
			favBtn.style.opacity = prompt.favorite ? "1" : "0.3";
		});
	}

	/** Public refresh method for other components */
	async refresh(): Promise<void> {
		await this.loadPrompts();
		this.buildUI();
	}
}
