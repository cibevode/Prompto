# Changelog

## [2.0.0] — 2026-02-25

### Obsidian Plugin — Architecture Overhaul

**Removed:**
- Create/Edit Prompt Modal — use Obsidian's editor instead
- Manage Library Modal — use Obsidian's file explorer
- Star rating display on cards (rating still tracked in frontmatter)

**Added:**
- File watcher — sidebar auto-refreshes on file changes
- Auto-export `prompto-library.json` for Chrome Extension
- Copy to clipboard button on every prompt card
- "New prompt from template" command
- Date displayed on far left of card footer

**Changed:**
- + button creates note from template → opens in Obsidian's editor
- Pencil button opens source file in editor
- Reduced from 1691 → 802 lines (53% smaller)

### Chrome Extension — New

**Features:**
- Three source modes: Local Folder, Cloud URL, Paste JSON
- Full cloud service support: Dropbox, OneDrive, Google Drive, Box, Proton Drive, iCloud
- Browse, search, filter by category/favorites
- Recently Used quick-access (last 5 prompts)
- Pinned favorites at top of All view
- Copy / Adapt to page / Inject into LLM chat
- Keyboard shortcuts: Ctrl+Shift+P (open), Ctrl+Shift+L (quick-copy)
- Right-click context menu for capturing page selections
- Side Panel support
- System/Dark/Light theme with quick toggle
- Badge count on extension icon
- Custom CSS selectors for unsupported LLM sites
- Export/Import settings
- First-run onboarding wizard
- Auto-refresh on configurable interval

---

## [1.0.0] — 2026-02-25

### Initial Release (Obsidian Plugin)
- Sidebar prompt library with search, filtering, categories
- Multi-LLM support: Grok, Claude, OpenAI, Venice.ai, Ollama
- Context-aware prompt adaptation
- Effectiveness tracking, favorites, index generation
- Sample library with 8 starter prompts
