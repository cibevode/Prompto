# Prompto — Intelligent Prompt Library for Obsidian

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22prompto%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)
![GitHub release](https://img.shields.io/github/v/release/prompto-obsidian/prompto?color=%23483699)
![License](https://img.shields.io/github/license/prompto-obsidian/prompto)

> **Your prompts, supercharged with context. One click from library → adapted prompt → LLM response — all inside Obsidian.**

Prompto turns Obsidian into an AI command center. Build a personal **prompt library** stored as plain Markdown files in your vault, and Prompto automatically adapts each prompt with context from whatever you're currently working on — then sends it to any LLM with one click.

---

## Table of Contents

- [Demo](#demo)
- [Why Prompto?](#why-prompto)
- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [How It Works](#how-it-works)
- [Prompt Format](#prompt-format)
- [Export & Import](#export--import)
- [Commands & Hotkeys](#commands--hotkeys)
- [FAQ](#faq)
- [Contributing](#contributing)
- [Development](#development)
- [Roadmap](#roadmap)
- [Support](#support)
- [License](#license)

---

## Demo

> 📸 *Screenshots coming soon — drop your own into `assets/` and reference them here.*

<!-- 
![Prompto Sidebar](assets/sidebar.png)
![Preview Modal](assets/preview-modal.png)
![Manage Library](assets/manage-library.png)
-->

---

## Why Prompto?

Most AI workflows look like this: copy context from your notes, open ChatGPT, paste context, write a prompt, send it, copy the response back. Every. Single. Time.

Prompto eliminates all of that. Your prompts live in your vault. Context is gathered automatically. Adaptation happens with one click. You stay in Obsidian the whole time.

**Before Prompto:** Copy → Switch tabs → Paste → Write prompt → Send → Copy response → Switch back → Paste  
**With Prompto:** Click a card → Done

---

## Features

### 🗂️ Sidebar Prompt Library
A dedicated panel in Obsidian's right pane. Browse prompt cards organized by category (Writing, Coding, Research, Product, Daily), filter by search or category, and mark favorites. Each card shows the prompt name, icon, category badge, tags, star rating, and a preview of the prompt body.

### 🧠 Context-Aware Adaptation
When you open a prompt, Prompto automatically gathers:
- **Active note** — title, content, and a summary of the current document
- **Selected text** — any highlighted text in the editor
- **Backlinks** — related notes that link to or from the active note

An AI refiner rewrites your template to seamlessly incorporate this context, so the LLM gets the full picture without you lifting a finger.

### ⚡ Multi-LLM Support
Send prompts to five different providers from the same interface:

| Provider | Model | Notes |
|----------|-------|-------|
| **Grok** (xAI) | grok-3-mini-fast | Fast, powerful reasoning |
| **Claude** (Anthropic) | claude-sonnet-4-20250514 | Deep analysis and writing |
| **GPT-4o** (OpenAI) | gpt-4o | Versatile general-purpose |
| **Venice.ai** | Configurable (default: llama-3.3-70b) | Privacy-first, uncensored |
| **Ollama** | Configurable (default: llama3) | Fully local, no API key |

Each provider can serve as the **refiner** (the model that adapts prompts) or the **destination** (where you send the final prompt). Mix and match freely.

### ✏️ Visual Prompt Creator
Full GUI for creating and editing prompts — no need to touch YAML frontmatter:
- Name, category (with custom category support), and tags (chip-based input)
- Rich prompt body editor with monospace font
- Icon picker with 30+ built-in Lucide icons plus custom icon support
- Variables auto-detected from `{{variable_name}}` syntax in the prompt body

### 📊 Manage Library
Full-screen table view of your entire library:
- **Sort** by name, category, rating, or last used date (click any column header)
- **Filter** by search text and category dropdown
- **Bulk actions** — select multiple prompts to batch update category, add tags, set rating, find & replace text, or delete
- **Per-row actions** — edit, open source file, or delete individual prompts

### ⭐ Effectiveness Tracking
After receiving an LLM response, rate it 1–5 stars. Ratings are stored in each prompt's frontmatter and displayed across the sidebar cards and manage table, helping you identify which prompts deliver results over time.

### 📥 Response Viewer
LLM responses open in a dedicated modal with full Markdown rendering, one-click **Copy** and **Insert into Note**, and star rating.

### ⚙️ Quick Settings Access
A settings cog in the sidebar header opens Prompto's settings tab directly — configure API keys, default models, and behavior without hunting through Obsidian's settings.

### 📤 Import / Export
Export your entire library as JSON, CSV, Markdown, YAML, or a print-ready PDF (HTML). Import from JSON to restore or merge libraries.

---

## Installation

### From Obsidian Community Plugins (Recommended)

1. Open **Settings → Community Plugins → Browse**
2. Search for **"Prompto"**
3. Click **Install**, then **Enable**

### Using BRAT (Beta Testing)

If Prompto isn't yet in the community plugins directory, you can install it via [BRAT](https://github.com/TfTHacker/obsidian42-brat):

1. Install and enable the **BRAT** plugin from Community Plugins
2. Open the command palette (`Ctrl/Cmd + P`) → **BRAT: Plugins: Add a beta plugin for testing**
3. Enter the repository URL: `https://github.com/prompto-obsidian/prompto`
4. Click **Add Plugin**
5. Enable Prompto in **Settings → Community Plugins**

### Manual Installation

1. Download `main.js` and `manifest.json` from the [latest release](https://github.com/prompto-obsidian/prompto/releases/latest)
2. Create a folder at `<your-vault>/.obsidian/plugins/prompto/`
3. Place `main.js` and `manifest.json` into that folder
4. Restart Obsidian (or reload without restart: `Ctrl/Cmd + P` → "Reload app without saving")
5. Go to **Settings → Community Plugins** and enable **Prompto**

---

## Getting Started

### First Run

When you enable Prompto for the first time, it automatically:
1. Creates a `Prompto Library/` folder in your vault root
2. Populates it with **8 sample prompts** covering common use cases (code review, blog writing, research, PRDs, debugging, daily reflection, etc.)
3. Opens the Prompto sidebar in the right pane

You can edit or delete the sample prompts at any time — they're just regular Markdown files.

### Quick Start

1. **Open a note** you're working on (or select some text)
2. **Click a prompt card** in the Prompto sidebar
3. The **Preview Modal** opens showing:
   - Left: your prompt, adapted with context from your current note
   - Right: variable inputs, detected context summary, and action buttons
4. **Click "Send to [Provider]"** to get an AI response
5. **Rate the response** with stars, then **Copy** or **Insert** it into your note

### Setting Up API Keys

Click the **⚙️ cog icon** in the Prompto sidebar header (or go to **Settings → Prompto**):

1. Paste your API key(s) for the providers you use
2. Set your preferred **default refiner** (the model that adapts prompts)
3. Set your preferred **default send-to** (the model that generates responses)
4. That's it — start using prompts!

| Provider | Get Your Key |
|----------|-------------|
| Grok / xAI | [console.x.ai](https://console.x.ai) |
| Claude / Anthropic | [console.anthropic.com](https://console.anthropic.com) |
| OpenAI | [platform.openai.com](https://platform.openai.com) |
| Venice.ai | [venice.ai](https://venice.ai) |
| Ollama | No key needed — [install Ollama](https://ollama.ai) and run locally |

---

## Configuration

Open **Settings → Prompto** (or click the ⚙️ cog in the sidebar):

### Library Settings
| Setting | Description | Default |
|---------|-------------|---------|
| Library folder path | Where prompt files are stored in your vault | `Prompto Library` |
| Generate index file | Auto-generate `_Prompto Index.md` with stats | On |

### API Keys
Configure only the providers you use. Keys are stored locally in Obsidian's plugin data (never sent anywhere except to the provider you choose).

### Default Behavior
| Setting | Description | Default |
|---------|-------------|---------|
| Default refiner model | Which LLM adapts prompts with context | Grok |
| Default send-to model | Default destination when you click Send | Grok |
| Auto-detect context | Gather context from active note, selection, backlinks | On |
| Auto-adapt prompts | Automatically run the refiner when opening a card | On |
| Max context characters | Cap on context sent to the refiner | 4000 |

### Venice.ai & Ollama Models
Venice.ai and Ollama support configurable models:
- **Venice.ai**: `llama-3.3-70b` (default), `deepseek-r1`, `venice-uncensored`, and more
- **Ollama**: `llama3` (default), or any model you've pulled locally

---

## How It Works

### The Adaptation Pipeline

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐     ┌─────────────┐
│ Prompt Card  │ ──► │ Gather       │ ──► │ AI Refiner   │ ──► │ Preview     │
│ (sidebar)    │     │ Context      │     │ (adapts      │     │ (rendered   │
│              │     │ (note, text, │     │  prompt with  │     │  markdown)  │
│              │     │  backlinks)  │     │  context)     │     │             │
└─────────────┘     └──────────────┘     └──────────────┘     └──────┬──────┘
                                                                      │
                    ┌──────────────┐     ┌──────────────┐             │
                    │ Response     │ ◄── │ Send to LLM  │ ◄──────────┘
                    │ Modal        │     │ (any of 5    │
                    │ (rate, copy, │     │  providers)  │
                    │  insert)     │     │              │
                    └──────────────┘     └──────────────┘
```

1. **Click** a prompt card in the sidebar
2. **Context** is gathered automatically from your workspace
3. **Refiner** rewrites the prompt to incorporate context + variable values
4. **Preview** shows the adapted prompt rendered as Markdown
5. **Send** to your chosen LLM provider
6. **Response** appears in a modal — rate, copy, or insert it into your note

### Variables

Use `{{variable_name}}` anywhere in your prompt body. Prompto auto-detects them and shows input fields in the preview modal. The special variable `{{selected_text}}` is automatically populated with any text you've highlighted in the editor.

### Favorites

Star any prompt to mark it as a favorite. The **Favorites** tab shows all prompts with favorites pinned to the top for quick access.

---

## Prompt Format

Every prompt is a standard Markdown file with YAML frontmatter. You can create them with the visual creator or write them by hand.

### Example Prompt File

```markdown
---
name: "Code Review Expert"
category: Coding
tags: [review, quality, bugs]
variables: [selected_text, language, priorities]
version: 3
effectiveness: 4.8
lastUsed: "2026-02-23"
icon: "code-2"
favorite: true
---
You are a senior staff engineer performing a thorough code review.
Review this code:

{{selected_text}}

Language/framework: {{language}}
Review priorities: {{priorities}}

Provide your review as:
**Critical Issues** — Bugs, security vulnerabilities, race conditions.
**Design Concerns** — Architecture issues, SOLID violations.
**Nits & Improvements** — Style, naming, performance.
**What's Good** — Acknowledge well-written parts.

For each issue, show the problematic code and a concrete fix.
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Display name |
| `category` | string | Yes | Category for filtering (Writing, Coding, Research, Product, Daily, or any custom value) |
| `tags` | array | No | Tags for organization and search |
| `variables` | array | No | Auto-detected from `{{var}}` in the prompt body |
| `version` | number | No | Incremented on each edit |
| `effectiveness` | number | No | 1–5 star rating |
| `lastUsed` | string | No | ISO date of last use (auto-updated) |
| `icon` | string | No | [Lucide icon](https://lucide.dev/icons) name |
| `favorite` | boolean | No | Whether the prompt is starred |

### Included Sample Prompts

| Prompt | Category | What It Does |
|--------|----------|-------------|
| Blog Post Generator | Writing | Compelling blog posts from a topic |
| Code Review Expert | Coding | Thorough code review with concrete fixes |
| PRD Writer | Product | Product requirement documents |
| Research Deep Dive | Research | Multi-source analysis with citations |
| Ruthless Draft Critique | Writing | Honest, constructive feedback on drafts |
| Debug Detective | Coding | Systematic debugging walkthroughs |
| Daily Reflection | Daily | End-of-day journaling prompts |
| Meeting Notes Processor | Product | Structured meeting summaries with action items |

---

## Export & Import

From the **Manage Library** modal (click the 📚 icon in the sidebar header):

| Format | Description |
|--------|-------------|
| **JSON** | Full metadata + body, machine-readable — best for backups |
| **CSV** | Spreadsheet-compatible (name, category, tags, rating, last used) |
| **Markdown** | Human-readable document with all prompts |
| **YAML** | Structured data format |
| **PDF** | Print-ready HTML — open in browser and use `Ctrl/Cmd + P` → Save as PDF |
| **Import JSON** | Restore or merge a previously exported JSON library |

---

## Commands & Hotkeys

Prompto registers the following command that you can bind to a hotkey via **Settings → Hotkeys**:

| Command | Description |
|---------|-------------|
| `Prompto: Open prompt library` | Opens/focuses the Prompto sidebar |

You can also access everything from the sidebar header buttons:
- **+** — Create a new prompt
- **📚** — Open the Manage Library modal
- **⚙️** — Open Prompto settings

---

## FAQ

**Q: Where are my prompts stored?**  
A: As plain Markdown files in your vault under the library folder (default: `Prompto Library/`). They're fully portable, version-controllable, and sync with whatever sync service you use for your vault.

**Q: Do I need an API key?**  
A: You need at least one API key configured (Grok, Claude, OpenAI, or Venice) to use AI features, unless you're running Ollama locally. Without any provider configured, you can still browse, create, and manage prompts — you just can't adapt or send them.

**Q: Is my data sent anywhere?**  
A: Only when you explicitly click **Adapt** or **Send**. Context from your notes is sent to the LLM provider you chose, and nowhere else. No telemetry, no cloud sync, no analytics.

**Q: Can I use custom categories?**  
A: Yes! In the prompt creator, select "Custom..." from the category dropdown and type any name. It becomes available as a filter immediately.

**Q: Does this work on mobile?**  
A: Yes, Prompto works on Obsidian mobile. The sidebar and all modals are responsive.

**Q: Can I use this without AI / offline?**  
A: You can create, organize, browse, and manage prompts entirely offline. For AI adaptation and sending, you need either internet access (for cloud providers) or a running Ollama instance (for local AI).

---

## Contributing

Contributions are welcome! Whether it's bug reports, feature requests, documentation improvements, or code contributions.

### Reporting Issues

- Use the [GitHub Issues](https://github.com/prompto-obsidian/prompto/issues) page
- Include your Obsidian version, Prompto version, and OS
- For bugs, include steps to reproduce

### Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Test in a development vault (see [Development](#development) below)
5. Commit with a descriptive message: `git commit -m "feat: add cool new thing"`
6. Push to your fork: `git push origin feature/my-feature`
7. Open a Pull Request

### Coding Conventions

- The built `main.js` is a single bundled file (compiled from TypeScript source in `src/`)
- CSS is embedded in the JavaScript as a single injected string
- Follow existing code patterns and naming conventions
- Test with the Obsidian developer console open (`Ctrl/Cmd + Shift + I`)

---

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or later
- [npm](https://www.npmjs.com/)
- An Obsidian vault for testing

### Setup

```bash
# Clone the repo
git clone https://github.com/prompto-obsidian/prompto.git
cd prompto

# Install dependencies
npm install

# Build the plugin
npm run build

# For development with auto-rebuild on changes
npm run dev
```

### Development Workflow

1. Clone this repo into your vault's `.obsidian/plugins/prompto/` directory (or symlink it)
2. Run `npm run dev` to start the watcher
3. Enable the plugin in Obsidian settings
4. Install the [Hot Reload](https://github.com/pjeby/hot-reload) plugin for automatic reloading on changes
5. Make changes → the plugin rebuilds automatically → Obsidian reloads it

### Project Structure

```
prompto/
├── .github/
│   └── workflows/
│       └── release.yml          # GitHub Actions auto-release
├── src/
│   ├── main.ts                  # Plugin entry point
│   ├── types.ts                 # TypeScript interfaces
│   ├── settings.ts              # Settings tab
│   ├── views/
│   │   └── PromptLibraryView.ts # Sidebar view
│   ├── modals/
│   │   ├── PreviewModal.ts      # Prompt preview & send
│   │   └── ResponseModal.ts     # LLM response viewer
│   └── utils/
│       ├── adapter.ts           # Prompt adaptation logic
│       ├── api.ts               # LLM API calls
│       ├── context.ts           # Context gathering
│       └── frontmatter.ts       # YAML frontmatter parsing
├── sample-library/
│   └── Prompto Library/         # 8 starter prompts
├── main.js                      # Built plugin (committed)
├── manifest.json                # Plugin manifest
├── package.json                 # Node.js config
├── tsconfig.json                # TypeScript config
├── esbuild.config.mjs           # Build configuration
├── version-bump.mjs             # Version bump script
├── versions.json                # Version compatibility map
├── CHANGELOG.md                 # Release notes
└── LICENSE                      # MIT License
```

### Creating a Release

Releases are automated via GitHub Actions. To create a new release:

1. Update the version in `manifest.json` and `package.json`
2. Update `versions.json` with the new version mapping
3. Commit and push: `git commit -am "Release 1.1.0" && git push`
4. Create and push a tag: `git tag 1.1.0 && git push origin 1.1.0`
5. GitHub Actions will automatically build and publish the release with `main.js` and `manifest.json` attached

You can also use `npm version patch|minor|major` to bump versions automatically.

---

## Roadmap

Planned features (contributions welcome!):

- [ ] **Prompt chaining** — pipe one prompt's output into another
- [ ] **Template variables from frontmatter** — pull values from the active note's YAML
- [ ] **Community prompt sharing** — import/export prompt packs
- [ ] **Prompt version history** — diff and rollback prompt edits
- [ ] **Folder-based organization** — nested library folders
- [ ] **More LLM providers** — Gemini, Mistral, Perplexity, Groq
- [ ] **Slash command** — trigger prompts from the editor with `/prompto`

Have an idea? [Open a feature request!](https://github.com/prompto-obsidian/prompto/issues/new?labels=enhancement)

---

## Support

- 🐛 **Bug reports**: [GitHub Issues](https://github.com/prompto-obsidian/prompto/issues)
- 💬 **Discussion**: [GitHub Discussions](https://github.com/prompto-obsidian/prompto/discussions)
- 📖 **Obsidian Forum**: Search for "Prompto" on the [Obsidian Forum](https://forum.obsidian.md/)

If you find Prompto useful, consider giving the repo a ⭐ — it helps others discover it!

---

## Privacy & Security

- All prompt files are plain Markdown stored in your vault — no cloud sync, no telemetry
- API keys are stored locally in Obsidian's plugin data directory, never transmitted except to authenticate with your chosen provider
- Note context is sent **only** to the LLM provider you select, **only** when you click Adapt or Send
- Venice.ai option for privacy-focused users (decentralized, uncensored)
- Ollama option for fully local, offline, zero-data-leaving-your-machine operation
- This plugin does not collect analytics, track usage, or phone home in any way

---

## Acknowledgments

- Built with the [Obsidian Plugin API](https://docs.obsidian.md/)
- Icons by [Lucide](https://lucide.dev)
- Inspired by the Obsidian community's passion for local-first, privacy-respecting tools

---

## License

[MIT](LICENSE) — use it, fork it, build on it.
