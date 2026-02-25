/**
 * api.ts — Multi-LLM API calls using Obsidian's requestUrl
 */
import { requestUrl, RequestUrlResponse } from "obsidian";
import { LLMProvider, PromptoSettings } from "../types";

/** Provider display names */
export const PROVIDER_NAMES: Record<LLMProvider, string> = {
	grok: "Grok (xAI)",
	claude: "Claude",
	openai: "GPT-4o",
	ollama: "Ollama",
};

/** Provider icons (Lucide) */
export const PROVIDER_ICONS: Record<LLMProvider, string> = {
	grok: "zap",
	claude: "brain",
	openai: "sparkles",
	ollama: "server",
};

/**
 * Send a message to an LLM provider and return the text response.
 * Uses Obsidian's requestUrl for mobile compatibility.
 */
export async function sendToLLM(
	provider: LLMProvider,
	systemPrompt: string,
	userMessage: string,
	settings: PromptoSettings
): Promise<string> {
	switch (provider) {
		case "grok":
			return sendToGrok(systemPrompt, userMessage, settings.grokApiKey);
		case "claude":
			return sendToClaude(systemPrompt, userMessage, settings.claudeApiKey);
		case "openai":
			return sendToOpenAI(systemPrompt, userMessage, settings.openaiApiKey);
		case "ollama":
			return sendToOllama(systemPrompt, userMessage, settings.ollamaUrl, settings.ollamaModel);
		default:
			throw new Error(`Unknown provider: ${provider}`);
	}
}

/** Check if a provider has its API key configured */
export function isProviderConfigured(provider: LLMProvider, settings: PromptoSettings): boolean {
	switch (provider) {
		case "grok":
			return !!settings.grokApiKey;
		case "claude":
			return !!settings.claudeApiKey;
		case "openai":
			return !!settings.openaiApiKey;
		case "ollama":
			return !!settings.ollamaUrl;
	}
}

// ─── Grok / xAI ────────────────────────────────────────

async function sendToGrok(system: string, user: string, apiKey: string): Promise<string> {
	if (!apiKey) throw new Error("Grok API key not configured. Go to Prompto Settings.");

	const resp: RequestUrlResponse = await requestUrl({
		url: "https://api.x.ai/v1/chat/completions",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			model: "grok-3-latest",
			messages: [
				{ role: "system", content: system },
				{ role: "user", content: user },
			],
			temperature: 0.7,
			max_tokens: 4096,
		}),
	});

	if (resp.status !== 200) {
		throw new Error(`Grok API error ${resp.status}: ${resp.text}`);
	}
	return resp.json?.choices?.[0]?.message?.content || "";
}

// ─── Claude / Anthropic ─────────────────────────────────

async function sendToClaude(system: string, user: string, apiKey: string): Promise<string> {
	if (!apiKey) throw new Error("Claude API key not configured. Go to Prompto Settings.");

	const resp: RequestUrlResponse = await requestUrl({
		url: "https://api.anthropic.com/v1/messages",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": apiKey,
			"anthropic-version": "2023-06-01",
		},
		body: JSON.stringify({
			model: "claude-sonnet-4-20250514",
			max_tokens: 4096,
			system: system,
			messages: [{ role: "user", content: user }],
		}),
	});

	if (resp.status !== 200) {
		throw new Error(`Claude API error ${resp.status}: ${resp.text}`);
	}
	const content = resp.json?.content;
	if (Array.isArray(content) && content.length > 0) {
		return content.map((b: any) => b.text || "").join("");
	}
	return "";
}

// ─── OpenAI ─────────────────────────────────────────────

async function sendToOpenAI(system: string, user: string, apiKey: string): Promise<string> {
	if (!apiKey) throw new Error("OpenAI API key not configured. Go to Prompto Settings.");

	const resp: RequestUrlResponse = await requestUrl({
		url: "https://api.openai.com/v1/chat/completions",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			model: "gpt-4o",
			messages: [
				{ role: "system", content: system },
				{ role: "user", content: user },
			],
			temperature: 0.7,
			max_tokens: 4096,
		}),
	});

	if (resp.status !== 200) {
		throw new Error(`OpenAI API error ${resp.status}: ${resp.text}`);
	}
	return resp.json?.choices?.[0]?.message?.content || "";
}

// ─── Ollama (Local) ─────────────────────────────────────

async function sendToOllama(
	system: string,
	user: string,
	baseUrl: string,
	model: string
): Promise<string> {
	if (!baseUrl) throw new Error("Ollama URL not configured. Go to Prompto Settings.");

	const resp: RequestUrlResponse = await requestUrl({
		url: `${baseUrl}/api/chat`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			model: model || "llama3",
			messages: [
				{ role: "system", content: system },
				{ role: "user", content: user },
			],
			stream: false,
		}),
	});

	if (resp.status !== 200) {
		throw new Error(`Ollama error ${resp.status}: ${resp.text}`);
	}
	return resp.json?.message?.content || "";
}
