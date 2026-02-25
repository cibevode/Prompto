/**
 * ResponseModal.ts — Modal that displays an LLM response and allows effectiveness rating
 */
import { App, Component, Modal, MarkdownRenderer, MarkdownView, setIcon, Notice } from "obsidian";
import { PromptFile } from "../types";
import { updateFrontmatterField } from "../utils/frontmatter";

export class ResponseModal extends Modal {
	private prompt: PromptFile;
	private response: string;
	private provider: string;
	private component: Component;

	constructor(app: App, prompt: PromptFile, response: string, provider: string) {
		super(app);
		this.prompt = prompt;
		this.response = response;
		this.provider = provider;
		this.component = new Component();
	}

	onOpen(): void {
		this.component.load();
		const { contentEl } = this;
		contentEl.empty();
		contentEl.addClass("prompto-response-modal");

		// Header
		const header = contentEl.createDiv({ cls: "prompto-response-header" });
		const titleEl = header.createEl("h2", { text: `Response from ${this.provider}` });
		const iconSpan = titleEl.createSpan({ cls: "prompto-header-icon" });
		setIcon(iconSpan, "message-square");

		// Response content
		const responseContainer = contentEl.createDiv({ cls: "prompto-response-content" });
		MarkdownRenderer.render(this.app, this.response, responseContainer, "", this.component);

		// Actions
		const actions = contentEl.createDiv({ cls: "prompto-response-actions" });

		const copyBtn = actions.createEl("button", { cls: "prompto-btn prompto-btn-primary" });
		setIcon(copyBtn.createSpan(), "copy");
		copyBtn.createSpan({ text: " Copy Response" });
		copyBtn.addEventListener("click", () => {
			navigator.clipboard.writeText(this.response);
			new Notice("Response copied to clipboard!");
		});

		const insertBtn = actions.createEl("button", { cls: "prompto-btn" });
		setIcon(insertBtn.createSpan(), "file-input");
		insertBtn.createSpan({ text: " Insert into Note" });
		insertBtn.addEventListener("click", () => {
			const view = this.app.workspace.getActiveViewOfType(MarkdownView);
			if (view) {
				const editor = view.editor;
				editor.replaceSelection(this.response);
				new Notice("Response inserted into note!");
				this.close();
			} else {
				new Notice("No active note to insert into.");
			}
		});

		// Rating section
		contentEl.createEl("hr");
		const ratingSection = contentEl.createDiv({ cls: "prompto-rating-section" });
		ratingSection.createEl("h3", { text: "Rate this prompt's effectiveness" });
		const starsContainer = ratingSection.createDiv({ cls: "prompto-stars" });

		for (let i = 1; i <= 5; i++) {
			const star = starsContainer.createEl("button", { cls: "prompto-star-btn" });
			setIcon(star, i <= Math.round(this.prompt.effectiveness) ? "star" : "star");
			star.style.opacity = i <= Math.round(this.prompt.effectiveness) ? "1" : "0.3";
			star.addEventListener("click", async () => {
				// Weighted average with existing rating
				const oldEff = this.prompt.effectiveness || i;
				const newEff = Math.round(((oldEff + i) / 2) * 10) / 10;
				await updateFrontmatterField(this.app, this.prompt.path, "effectiveness", newEff);
				await updateFrontmatterField(
					this.app,
					this.prompt.path,
					"lastUsed",
					new Date().toISOString().slice(0, 10)
				);
				new Notice(`Rated ${i} ⭐ — effectiveness updated to ${newEff}`);
				// Update visual
				starsContainer.querySelectorAll(".prompto-star-btn").forEach((s, idx) => {
					(s as HTMLElement).style.opacity = idx < i ? "1" : "0.3";
				});
			});
		}
	}

	onClose(): void {
		this.component.unload();
		this.contentEl.empty();
	}
}
