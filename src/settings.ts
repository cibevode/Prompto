/**
 * settings.ts — Prompto settings tab
 */
import { App, PluginSettingTab, Setting } from "obsidian";
import type PromptoPlugin from "./main";
import { LLMProvider } from "./types";

export class PromptoSettingTab extends PluginSettingTab {
	plugin: PromptoPlugin;

	constructor(app: App, plugin: PromptoPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		containerEl.createEl("h1", { text: "Prompto Settings" });
		containerEl.createEl("p", {
			text: "Configure your prompt library, API keys, and default behaviors.",
			cls: "setting-item-description",
		});

		// — Library —
		containerEl.createEl("h2", { text: "Library" });

		new Setting(containerEl)
			.setName("Library folder path")
			.setDesc("Vault-relative path to your prompt library folder. Created automatically if missing.")
			.addText((text) =>
				text
					.setPlaceholder("Prompto Library")
					.setValue(this.plugin.settings.libraryPath)
					.onChange(async (value) => {
						this.plugin.settings.libraryPath = value || "Prompto Library";
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Generate index file")
			.setDesc("Auto-generate _Prompto Index.md with library stats.")
			.addToggle((t) =>
				t.setValue(this.plugin.settings.generateIndex).onChange(async (v) => {
					this.plugin.settings.generateIndex = v;
					await this.plugin.saveSettings();
				})
			);

		// — API Keys —
		containerEl.createEl("h2", { text: "API Keys" });
		containerEl.createEl("p", {
			text: "Keys are stored in your plugin data (local). Provide keys only for providers you use.",
			cls: "setting-item-description",
		});

		new Setting(containerEl)
			.setName("Grok / xAI API key")
			.setDesc("Get yours at console.x.ai")
			.addText((text) =>
				text
					.setPlaceholder("xai-...")
					.setValue(this.plugin.settings.grokApiKey)
					.onChange(async (value) => {
						this.plugin.settings.grokApiKey = value.trim();
						await this.plugin.saveSettings();
					})
			)
			.then((s) => s.controlEl.querySelector("input")?.setAttribute("type", "password"));

		new Setting(containerEl)
			.setName("Claude / Anthropic API key")
			.setDesc("Get yours at console.anthropic.com")
			.addText((text) =>
				text
					.setPlaceholder("sk-ant-...")
					.setValue(this.plugin.settings.claudeApiKey)
					.onChange(async (value) => {
						this.plugin.settings.claudeApiKey = value.trim();
						await this.plugin.saveSettings();
					})
			)
			.then((s) => s.controlEl.querySelector("input")?.setAttribute("type", "password"));

		new Setting(containerEl)
			.setName("OpenAI API key")
			.setDesc("Get yours at platform.openai.com")
			.addText((text) =>
				text
					.setPlaceholder("sk-...")
					.setValue(this.plugin.settings.openaiApiKey)
					.onChange(async (value) => {
						this.plugin.settings.openaiApiKey = value.trim();
						await this.plugin.saveSettings();
					})
			)
			.then((s) => s.controlEl.querySelector("input")?.setAttribute("type", "password"));

		new Setting(containerEl)
			.setName("Ollama base URL")
			.setDesc("Local Ollama instance URL")
			.addText((text) =>
				text
					.setPlaceholder("http://localhost:11434")
					.setValue(this.plugin.settings.ollamaUrl)
					.onChange(async (value) => {
						this.plugin.settings.ollamaUrl = value.trim() || "http://localhost:11434";
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Ollama model")
			.setDesc("Model name for Ollama requests")
			.addText((text) =>
				text
					.setPlaceholder("llama3")
					.setValue(this.plugin.settings.ollamaModel)
					.onChange(async (value) => {
						this.plugin.settings.ollamaModel = value.trim() || "llama3";
						await this.plugin.saveSettings();
					})
			);

		// — Defaults —
		containerEl.createEl("h2", { text: "Defaults" });

		const providerOptions: Record<string, string> = {
			grok: "Grok (xAI)",
			claude: "Claude (Anthropic)",
			openai: "GPT-4o (OpenAI)",
			ollama: "Ollama (Local)",
		};

		new Setting(containerEl)
			.setName("Default refiner model")
			.setDesc("Which LLM adapts your prompts with context.")
			.addDropdown((d) =>
				d
					.addOptions(providerOptions)
					.setValue(this.plugin.settings.defaultRefiner)
					.onChange(async (v) => {
						this.plugin.settings.defaultRefiner = v as LLMProvider;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Default send-to model")
			.setDesc("Default destination when you click Send.")
			.addDropdown((d) =>
				d
					.addOptions(providerOptions)
					.setValue(this.plugin.settings.defaultSendTo)
					.onChange(async (v) => {
						this.plugin.settings.defaultSendTo = v as LLMProvider;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Auto-detect context")
			.setDesc("Automatically gather context from the active note, selection, and backlinks.")
			.addToggle((t) =>
				t.setValue(this.plugin.settings.autoDetectContext).onChange(async (v) => {
					this.plugin.settings.autoDetectContext = v;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName("Auto-adapt prompts")
			.setDesc("Automatically run the refiner when opening a prompt card.")
			.addToggle((t) =>
				t.setValue(this.plugin.settings.autoAdapt).onChange(async (v) => {
					this.plugin.settings.autoAdapt = v;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName("Max context characters")
			.setDesc("Maximum characters of context sent to the refiner (to control costs).")
			.addText((text) =>
				text
					.setPlaceholder("4000")
					.setValue(String(this.plugin.settings.maxContextChars))
					.onChange(async (value) => {
						const n = parseInt(value, 10);
						this.plugin.settings.maxContextChars = isNaN(n) ? 4000 : n;
						await this.plugin.saveSettings();
					})
			);
	}
}
