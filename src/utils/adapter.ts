/**
 * adapter.ts — Intelligent prompt adaptation using a refiner LLM
 */
import { PromptoSettings, PromptFile, AdaptationResult, VariableValues } from "../types";
import { sendToLLM } from "./api";

/** The world-class system prompt for the refiner */
const REFINER_SYSTEM_PROMPT = `You are Prompto Refiner, an expert prompt engineer embedded inside Obsidian. Your sole job is to take a raw prompt template and intelligently adapt it using the user's current context.

RULES:
1. PRESERVE the original prompt's intent, structure, and voice completely.
2. REPLACE {{placeholders}} with the best values derived from the context provided. If a placeholder value is explicitly provided, use that value. If not, infer the most appropriate value from context.
3. SHARPEN specificity: replace vague references with concrete details from context (note titles, selected text content, project names, etc.).
4. ADD relevant context where it makes the prompt more effective — for example, if the user's note is about machine learning, weave in ML-specific framing.
5. MAINTAIN the prompt's category-appropriate tone (e.g. direct for Coding, analytical for Research, conversational for Daily).
6. NEVER add meta-commentary about your adaptation process in the output.
7. NEVER wrap your output in markdown code blocks.
8. If context is minimal, still produce the best possible version with whatever information is available.
9. Keep the adapted prompt roughly the same length as the original unless expansion genuinely improves it.
10. Output ONLY the final adapted prompt text — nothing else.`;

/**
 * Fill variables into the prompt body, replacing {{var}} placeholders.
 */
export function fillVariables(body: string, values: VariableValues): string {
	let result = body;
	for (const [key, val] of Object.entries(values)) {
		const regex = new RegExp(`\\{\\{\\s*${escapeRegex(key)}\\s*\\}\\}`, "gi");
		result = result.replace(regex, val);
	}
	return result;
}

function escapeRegex(s: string): string {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Adapt a prompt using the refiner LLM.
 * Sends the prompt template + context to the chosen provider, returns the adapted prompt.
 */
export async function adaptPrompt(
	prompt: PromptFile,
	filledBody: string,
	contextStr: string,
	settings: PromptoSettings
): Promise<AdaptationResult> {
	const userMessage = `PROMPT TEMPLATE:\n${filledBody}\n\nUSER CONTEXT:\n${contextStr}`;

	try {
		const response = await sendToLLM(
			settings.defaultRefiner,
			REFINER_SYSTEM_PROMPT,
			userMessage,
			settings
		);

		return {
			adaptedPrompt: response.trim(),
			adaptationNotes: `Adapted by ${settings.defaultRefiner} with context from "${prompt.name}"`,
		};
	} catch (e) {
		// Fallback: return the filled-but-unadapted prompt
		return {
			adaptedPrompt: filledBody,
			adaptationNotes: `Adaptation failed (${e instanceof Error ? e.message : "unknown error"}). Showing original with variables filled.`,
		};
	}
}
