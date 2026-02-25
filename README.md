# Prompto

> **Your AI prompt library — in Obsidian, in your browser, everywhere.**

Prompto is a two-part system for managing, adapting, and using AI prompts across your workflow:

1. **Obsidian Plugin** — Your prompts live as plain Markdown notes. Prompto adds a sidebar browser, context-aware AI adaptation, and multi-LLM delivery.
2. **Chrome Extension** — Access the same prompt library from any browser tab. Copy, adapt to page content, or inject directly into ChatGPT, Claude, Gemini, and more.

The two connect via a shared `prompto-library.json` file that syncs through **any** cloud service or local folder.

---

## How It Works

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Your Vault Folder                           │
│                                                                     │
│   📝 Blog Post Generator.md    📝 Code Review Expert.md            │
│   📝 Ruthless Draft Critique.md   📝 Debug Detective.md            │
│   📄 prompto-library.json  ← auto-exported by plugin               │
│                                                                     │
├──────────────────────┬──────────────────────────────────────────────┤
│                      │                                              │
│  ☁️  Syncs via:       │                                              │
│  Dropbox / OneDrive  │                                              │
│  Google Drive / Box  │                                              │
│  Proton Drive /      │                                              │
│  iCloud / Syncthing  │                                              │
│                      │                                              │
├──────────┬───────────┴───────────┬──────────────────────────────────┤
│          ▼                       ▼                                  │
│  ┌──────────────┐      ┌──────────────────┐                        │
│  │   Obsidian   │      │  Chrome Extension │                       │
│  │   Plugin     │      │                  │                        │
│  │              │      │  📋 Copy          │                        │
│  │  🧠 Context   │      │  ✨ Adapt to page │                        │
│  │  ⚡ Adapt     │      │  ➡ Inject into   │                        │
│  │  🚀 Send to   │      │    LLM chat      │                        │
│  │    5 LLMs    │      │                  │                        │
│  └──────────────┘      └──────────────────┘                        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Quick Start

### 1. Install the Obsidian Plugin

**From Community Plugins:**
Settings → Community Plugins → Browse → search **"Prompto"** → Install → Enable

**Manual:**
Copy `obsidian-plugin/main.js` and `obsidian-plugin/manifest.json` into `<vault>/.obsidian/plugins/prompto/`

### 2. Create Prompts

Click **+** in the Prompto sidebar → edit the template in Obsidian's editor → save. Or create any `.md` file in your library folder with Prompto frontmatter:

```markdown
---
name: "Code Review Expert"
category: Coding
tags: [review, quality]
icon: "code-2"
favorite: true
---
Review this code for bugs, performance issues, and style:

{{selected_text}}

Be specific. Cite line numbers.
```

### 3. Use Prompts in Obsidian

Open a note → click a prompt card → Prompto detects context (active note, selected text, backlinks) → AI adapts the prompt → send to any LLM → rate the response.

### 4. Install the Chrome Extension

`chrome://extensions/` → Developer mode → **Load unpacked** → select `chrome-extension/` folder

### 5. Connect the Extension

The plugin auto-exports `prompto-library.json`. Point the extension at it:

| Your Setup | Connection Method |
|-----------|------------------|
| Vault on this machine | **Local Folder** — click Choose Folder |
| Vault on Dropbox | **Cloud URL** — share link, change `?dl=0` → `?dl=1` |
| Vault on OneDrive | **Cloud URL** — use embed/direct link |
| Vault on Google Drive | **Cloud URL** — `https://drive.google.com/uc?export=download&id=FILE_ID` |
| Vault on Box / Proton Drive | **Cloud URL** — use direct download link |
| iCloud / Syncthing | **Local Folder** — point to the synced folder |

### 6. Use Prompts in the Browser

Open any page → click the Prompto icon (or `Ctrl+Shift+P`) → pick a prompt → **Copy**, **Adapt** (fills in page context), or **Inject** (pastes into ChatGPT/Claude/etc input).

---

## Obsidian Plugin

### Features

| Feature | Description |
|---------|-------------|
| **Sidebar Library** | Browse prompt cards with search, categories, favorites |
| **Context Detection** | Active note, selected text, backlinks — gathered automatically |
| **AI Adaptation** | Refiner rewrites prompts with your context |
| **5 LLM Providers** | Grok, Claude, GPT-4o, Venice.ai, Ollama |
| **Native Editing** | Prompts are notes — edit them in Obsidian's editor |
| **File Watcher** | Sidebar auto-refreshes when prompt files change |
| **Auto-Export JSON** | Powers the Chrome Extension |
| **Copy to Clipboard** | Quick copy from any card |
| **Effectiveness Rating** | Rate LLM responses, tracked in frontmatter |
| **Favorites** | Flag prompts for quick access |

### Configuration

Settings → Prompto (or click ⚙ in the sidebar):

**API Keys:** Grok ([console.x.ai](https://console.x.ai)), Claude ([console.anthropic.com](https://console.anthropic.com)), OpenAI ([platform.openai.com](https://platform.openai.com)), Venice.ai ([venice.ai](https://venice.ai)), Ollama (no key needed)

**Behavior:** Default refiner/send-to model, auto-detect context, auto-adapt, max context chars, auto-export JSON

### Commands

| Command | Description |
|---------|-------------|
| Open Prompto Library | Show the sidebar |
| New prompt from template | Create a prompt and open in editor |
| Save current note as prompt | Copy active note into library |
| Refresh Prompto Library | Force-refresh sidebar |
| Generate Prompto Index | Rebuild index file |
| Export library as JSON | Manual JSON export |

### Prompt Format

```markdown
---
name: "My Prompt"          # Required — display name
category: Writing           # Required — filter category
tags: [blog, draft]         # Optional — for search
icon: "pen-tool"            # Optional — Lucide icon name
favorite: true              # Optional — pin to top
effectiveness: 4.2          # Auto-updated on rating
lastUsed: "2026-02-25"     # Auto-updated on send
version: 2                  # Optional — version tracking
---
Your prompt body here.

Use {{variables}} — auto-detected from the body.
{{selected_text}} auto-fills with editor selection.
```

---

## Chrome Extension

### Features

| Feature | Description |
|---------|-------------|
| **Three Source Modes** | Local Folder, Cloud URL, Paste JSON |
| **Browse & Search** | Categories, favorites, keyword search |
| **Recently Used** | Quick re-access to last 5 prompts |
| **Pinned Favorites** | Float to top of All view |
| **📋 Copy** | Prompt to clipboard |
| **✨ Adapt** | Fill `{{selected_text}}` with page content |
| **➡ Inject** | Paste into ChatGPT, Claude, Gemini, Perplexity, or any input |
| **⌨️ Shortcuts** | `Ctrl+Shift+P` open, `Ctrl+Shift+L` quick-copy last |
| **🖱 Right-Click** | Capture selected text as context |
| **📌 Side Panel** | Persistent panel alongside browsing |
| **🎨 Themes** | System / Dark / Light |
| **Custom Selectors** | Define CSS selectors for unsupported LLM sites |
| **Export/Import** | Backup and restore settings |
| **Onboarding** | First-run setup wizard |
| **Badge Count** | Prompt count on extension icon |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+P` (`Cmd+Shift+P`) | Open Prompto |
| `Ctrl+Shift+L` (`Cmd+Shift+L`) | Quick-copy last used prompt |

Customize at `chrome://extensions/shortcuts`

---

## Project Structure

```
prompto/
├── obsidian-plugin/           Obsidian plugin
│   ├── main.js                Built plugin (802 lines)
│   ├── manifest.json          Obsidian manifest
│   ├── package.json           Node config
│   ├── src/                   TypeScript source
│   │   ├── main.ts
│   │   ├── types.ts
│   │   ├── settings.ts
│   │   ├── modals/
│   │   ├── views/
│   │   └── utils/
│   └── *.mjs / *.json         Build configs
│
├── chrome-extension/          Chrome extension
│   ├── manifest.json          Chrome manifest v3
│   ├── popup.html             UI
│   ├── popup.css              Styles
│   ├── popup.js               Main logic (639 lines)
│   ├── content.js             Page interaction
│   ├── background.js          Service worker
│   └── icons/                 Extension icons
│
├── sample-library/            8 starter prompts
│   └── Prompto Library/
│       ├── Blog Post Generator.md
│       ├── Code Review Expert.md
│       ├── Ruthless Draft Critique.md
│       └── ...
│
├── assets/                    Screenshots & media
├── .github/workflows/         CI/CD
├── LICENSE                    MIT
└── README.md                  This file
```

---

## Installation Paths

### Obsidian Plugin Only
Copy `obsidian-plugin/main.js` + `obsidian-plugin/manifest.json` into your vault's `.obsidian/plugins/prompto/` folder.

### Chrome Extension Only
Load `chrome-extension/` as an unpacked extension in Chrome.

### Both (Recommended)
Install both. The plugin auto-exports JSON. The extension reads it. Your prompts are everywhere.

---

## Philosophy

- **Prompts are notes.** Plain Markdown in your vault. Edit, link, tag, search them with Obsidian.
- **Obsidian is the editor.** No custom create/edit modals. Obsidian does this better.
- **Prompto is the AI bridge.** Context detection, adaptation, LLM delivery, and cross-platform access.
- **Zero lock-in.** Standard Markdown files. Standard JSON export. Works with any cloud sync. MIT licensed.

---

## Privacy

- Prompts are local files — no cloud, no telemetry
- API keys stored locally
- Context sent only to your chosen LLM, only when you click Send
- Chrome extension stores settings locally, fetches only the JSON you point it at
- Venice.ai and Ollama options for privacy-first / fully-local operation

---

## Contributing

### Plugin Development

```bash
cd obsidian-plugin
npm install && npm run dev
```

Symlink into your vault's `.obsidian/plugins/prompto/`.

### Extension Development

Load `chrome-extension/` as unpacked in `chrome://extensions/`.

---

## License

[MIT](LICENSE)
