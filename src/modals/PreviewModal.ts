/**
 * PreviewModal.ts — Beautiful two-column preview modal
 * Left: rendered adapted prompt (Markdown)
 * Right: editable variables + context summary + "Adapt Again" + Send buttons
 */
import { App, Component, Modal, MarkdownRenderer, MarkdownView, Notice, setIcon, TextAreaComponent } from "obsidian";
import { PromptFile, PromptoSettings, ObsidianContext, VariableValues, LLMProvider } from "../types";
import { gatherContext, formatContextForRefiner } from "../utils/context";
import { fillVariables, adaptPrompt } from "../utils/adapter";
import { sendToLLM, isProviderConfigured, PROVIDER_NAMES, PROVIDER_ICONS } from "../utils/api";
import { updateFrontmatterField } from "../utils/frontmatter";
import { ResponseModal } from "./ResponseModal";

export class PreviewModal extends Modal {
	private prompt: PromptFile;
	private settings: PromptoSettings;
	private context: ObsidianContext;
	private variableValues: VariableValues;
	private adaptedPrompt: string;
	private leftPane: HTMLElement | null = null;
	private isAdapting = false;
	private component: Component;

	constructor(app: App, prompt: PromptFile, settings: PromptoSettings) {
		super(app);
		this.prompt = prompt;
		this.settings = settings;
		this.variableValues = {};
		this.adaptedPrompt = prompt.body;
		this.component = new Component();

		// Gather context
		this.context = settings.autoDetectContext
			? gatherContext(app, settings.maxContextChars)
			: {
					selectedText: "",
					activeNoteContent: "",
					activeNoteTitle: "",
					activeNotePath: "",
					backlinks: [],
					recentNotes: [],
					activeNoteSummary: "",
			  };

		// Pre-fill special variables from context
		for (const v of prompt.variables) {
			if (v === "selected_text" && this.context.selectedText) {
				this.variableValues[v] = this.context.selectedText;
			} else {
				this.variableValues[v] = "";
			}
		}
	}

	async onOpen(): Promise<void> {
		this.component.load();
		const { contentEl } = this;
		contentEl.empty();
		contentEl.addClass("prompto-preview-modal");

		// Modal title bar
		const titleBar = contentEl.createDiv({ cls: "prompto-modal-titlebar" });
		const iconSpan = titleBar.createSpan({ cls: "prompto-modal-icon" });
		setIcon(iconSpan, this.prompt.icon || "file-text");
		titleBar.createEl("h2", { text: this.prompt.name });
		const badge = titleBar.createSpan({
			cls: "prompto-category-badge",
			text: this.prompt.category,
		});

		// Two-column layout
		const columns = contentEl.createDiv({ cls: "prompto-columns" });
		this.leftPane = columns.createDiv({ cls: "prompto-col-left" });
		const rightPane = columns.createDiv({ cls: "prompto-col-right" });

		// ─── Right pane: Variables ───
		if (this.prompt.variables.length > 0) {
			rightPane.createEl("h3", { text: "Variables" });
			const varsContainer = rightPane.createDiv({ cls: "prompto-vars" });

			for (const varName of this.prompt.variables) {
				const group = varsContainer.createDiv({ cls: "prompto-var-group" });
				group.createEl("label", {
					text: varName.replace(/_/g, " "),
					cls: "prompto-var-label",
				});
				const ta = new TextAreaComponent(group);
				ta.setPlaceholder(`Enter ${varName.replace(/_/g, " ")}...`);
				ta.setValue(this.variableValues[varName] || "");
				ta.onChange((val) => {
					this.variableValues[varName] = val;
				});
				ta.inputEl.addClass("prompto-var-input");
				ta.inputEl.rows = 2;
			}
		}

		// ─── Right pane: Context summary ───
		rightPane.createEl("h3", { text: "Detected Context" });
		const ctxSummary = rightPane.createDiv({ cls: "prompto-context-summary" });

		if (this.context.activeNoteTitle) {
			ctxSummary.createEl("div", {
				cls: "prompto-ctx-item",
				text: `📄 ${this.context.activeNoteTitle}`,
			});
		}
		if (this.context.selectedText) {
			ctxSummary.createEl("div", {
				cls: "prompto-ctx-item",
				text: `✂️ Selection: ${this.context.selectedText.slice(0, 80)}${this.context.selectedText.length > 80 ? "…" : ""}`,
			});
		}
		if (this.context.backlinks.length > 0) {
			ctxSummary.createEl("div", {
				cls: "prompto-ctx-item",
				text: `🔗 Backlinks: ${this.context.backlinks.slice(0, 3).join(", ")}`,
			});
		}
		if (
			!this.context.activeNoteTitle &&
			!this.context.selectedText &&
			this.context.backlinks.length === 0
		) {
			ctxSummary.createEl("div", {
				cls: "prompto-ctx-item prompto-ctx-empty",
				text: "No context detected. Open a note or select text.",
			});
		}

		// ─── Right pane: Actions ───
		const actionsDiv = rightPane.createDiv({ cls: "prompto-actions" });

		// Adapt button
		const adaptBtn = actionsDiv.createEl("button", { cls: "prompto-btn prompto-btn-adapt" });
		const adaptIconSpan = adaptBtn.createSpan();
		setIcon(adaptIconSpan, "wand-2");
		const adaptText = adaptBtn.createSpan({ text: " Adapt with AI" });
		adaptBtn.addEventListener("click", () => this.runAdaptation(adaptBtn, adaptText));

		// Copy button
		const copyBtn = actionsDiv.createEl("button", { cls: "prompto-btn" });
		setIcon(copyBtn.createSpan(), "copy");
		copyBtn.createSpan({ text: " Copy Prompt" });
		copyBtn.addEventListener("click", () => {
			navigator.clipboard.writeText(this.adaptedPrompt);
			new Notice("Prompt copied to clipboard!");
		});

		// Insert button
		const insertBtn = actionsDiv.createEl("button", { cls: "prompto-btn" });
		setIcon(insertBtn.createSpan(), "file-input");
		insertBtn.createSpan({ text: " Insert into Note" });
		insertBtn.addEventListener("click", () => {
			const mdView = this.app.workspace.getActiveViewOfType(MarkdownView);
			if (mdView) {
				mdView.editor.replaceSelection(this.adaptedPrompt);
				new Notice("Prompt inserted!");
				this.close();
			} else {
				new Notice("No active editor to insert into.");
			}
		});

		// ─── Send buttons ───
		rightPane.createEl("h3", { text: "Send to LLM" });
		const sendDiv = rightPane.createDiv({ cls: "prompto-send-buttons" });

		const providers: LLMProvider[] = ["grok", "claude", "openai", "ollama"];
		for (const p of providers) {
			const configured = isProviderConfigured(p, this.settings);
			const btn = sendDiv.createEl("button", {
				cls: `prompto-btn prompto-send-btn ${!configured ? "prompto-btn-disabled" : ""}`,
			});
			const ico = btn.createSpan();
			setIcon(ico, PROVIDER_ICONS[p]);
			btn.createSpan({ text: ` ${PROVIDER_NAMES[p]}` });

			if (!configured) {
				btn.title = "API key not configured";
			}

			btn.addEventListener("click", async () => {
				if (!configured) {
					new Notice(`${PROVIDER_NAMES[p]} not configured. Add API key in Settings.`);
					return;
				}
				await this.sendToProvider(p, btn);
			});
		}

		// ─── Left pane: render prompt ───
		this.renderLeftPane();

		// Auto-adapt if enabled
		if (this.settings.autoAdapt && isProviderConfigured(this.settings.defaultRefiner, this.settings)) {
			await this.runAdaptation(adaptBtn, adaptText);
		}
	}

	/** Render the prompt markdown in the left pane */
	private renderLeftPane(): void {
		if (!this.leftPane) return;
		this.leftPane.empty();
		this.leftPane.createEl("h3", { text: "Prompt Preview" });
		const previewDiv = this.leftPane.createDiv({ cls: "prompto-preview-content" });

		// Fill variables into display
		const filled = fillVariables(this.adaptedPrompt, this.variableValues);
		MarkdownRenderer.render(this.app, filled, previewDiv, "", this.component);
	}

	/** Run the refiner adaptation */
	private async runAdaptation(btn: HTMLElement, textSpan: HTMLElement): Promise<void> {
		if (this.isAdapting) return;
		this.isAdapting = true;
		btn.addClass("prompto-btn-loading");
		textSpan.setText(" Adapting...");

		try {
			const filled = fillVariables(this.prompt.body, this.variableValues);
			const contextStr = formatContextForRefiner(this.context);
			const result = await adaptPrompt(this.prompt, filled, contextStr, this.settings);
			this.adaptedPrompt = result.adaptedPrompt;
			this.renderLeftPane();
			new Notice(result.adaptationNotes);
		} catch (e) {
			new Notice(`Adaptation failed: ${e instanceof Error ? e.message : "Unknown error"}`);
		} finally {
			this.isAdapting = false;
			btn.removeClass("prompto-btn-loading");
			textSpan.setText(" Adapt with AI");
		}
	}

	/** Send the adapted prompt to an LLM and show response */
	private async sendToProvider(provider: LLMProvider, btn: HTMLElement): Promise<void> {
		btn.addClass("prompto-btn-loading");
		const original = btn.textContent;

		try {
			const finalPrompt = fillVariables(this.adaptedPrompt, this.variableValues);

			// Update lastUsed
			await updateFrontmatterField(
				this.app,
				this.prompt.path,
				"lastUsed",
				new Date().toISOString().slice(0, 10)
			);

			const response = await sendToLLM(
				provider,
				"You are a helpful, expert AI assistant.",
				finalPrompt,
				this.settings
			);

			// Open response modal
			this.close();
			new ResponseModal(
				this.app,
				this.prompt,
				response,
				PROVIDER_NAMES[provider]
			).open();
		} catch (e) {
			new Notice(
				`Send failed: ${e instanceof Error ? e.message : "Unknown error"}`
			);
		} finally {
			btn.removeClass("prompto-btn-loading");
		}
	}

	onClose(): void {
		this.component.unload();
		this.contentEl.empty();
	}
}
