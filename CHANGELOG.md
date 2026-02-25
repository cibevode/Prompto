# Changelog

All notable changes to Prompto will be documented in this file.

---

## [2.0.0] — 2026-02-25

### Obsidian Plugin — Architecture Overhaul

**Philosophy change:** Obsidian handles editing, Prompto handles AI. The plugin was rewritten from scratch to be leaner and more focused (1691 → 803 lines, 53% smaller).

**Added:**
- File watcher — sidebar auto-refreshes when prompt files are added, edited, or deleted
- Auto-export `prompto-library.json` on every change (powers the Chrome extension)
- Copy-to-clipboard button on every prompt card (hover to reveal)
- "New prompt from template" command — creates `Prompto - New Prompt <id>` and opens in editor
- "Save current note as prompt" command — copies active note into library as `Prompto - <note name>`
- Date displayed on card footer (far left)

**Removed:**
- Create/Edit Prompt Modal — use Obsidian's native editor instead
- Manage Library Modal — use Obsidian's file explorer instead
- Star rating display on cards (effectiveness rating still tracked in frontmatter)

**Changed:**
- \+ button creates note from template → opens in Obsidian's editor
- Pencil button opens source file in editor
- All new prompts prefixed with `Prompto -` for easy vault-wide search

### Chrome Extension — New

**Core:**
- Three source modes: Local File, Cloud URL, Paste JSON
- Full cloud service support: Dropbox, OneDrive, Google Drive, Box, Proton Drive, iCloud
- Browse, search, filter by category and favorites
- Recently Used quick-access (last 5 prompts)
- Pinned favorites float to top of All view

**Actions:**
- Copy — prompt to clipboard
- AI Adapt — LLM-powered intelligent prompt rewriting based on current page context
- Inject — paste directly into ChatGPT, Claude, Gemini, Perplexity, DeepSeek, Grok, HuggingChat, Poe

**AI Adaptation:**
- Supports 4 LLM providers: Grok, Claude, GPT-4o, Venice.ai
- Scrapes page context: title, URL, meta description, selected text, body excerpt
- Shows adapted version in highlighted preview below original
- Auto-copies adapted prompt to clipboard
- User-friendly error messages for restricted pages, API issues, and network errors

**UI & UX:**
- First-run onboarding wizard
- System / Dark / Light theme with quick toggle
- Keyboard shortcuts: `Ctrl+Shift+P` (open), `Ctrl+Shift+L` (quick-copy last)
- Right-click context menu for capturing page selections
- Badge count on extension icon
- Custom CSS selectors for unsupported LLM sites
- Export/Import settings
- Auto-refresh on configurable interval

**Compatibility:**
- Chrome (Manifest v3)
- Brave (full support — PNG icons, no sidePanel dependency)
- Edge, Arc, Vivaldi, Opera (Chromium-based)

---

## [1.0.0] — 2026-02-25

### Initial Release (Obsidian Plugin)
- Sidebar prompt library with search, filtering, categories
- Multi-LLM support: Grok, Claude, OpenAI, Venice.ai, Ollama
- Context-aware prompt adaptation
- Effectiveness tracking, favorites, index generation
- Sample library with 8 starter prompts
