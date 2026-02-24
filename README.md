# 🎯 Prompto — Intelligent Context-Aware Prompt Library for Obsidian

**Your prompts, supercharged by your notes.**

Prompto transforms your Obsidian vault into an intelligent prompt command center. Store prompts as plain Markdown files, click any card, and Prompto automatically detects context from your active note, selection, and backlinks — then uses an LLM to adapt the prompt in real-time. Preview, tweak, and send to any provider with one tap.

100% local-first. Pure Markdown. Your data never leaves your vault (except when you explicitly send to an LLM).

---

## ✨ Features

- **📚 Beautiful Card Library** — Sidebar view with searchable card grid, category tabs (Writing / Coding / Research / Product / Daily / Favorites), and effectiveness ratings
- **🔍 Automatic Context Detection** — Gathers selected text, active note content, backlinks, file path, and recent notes without lifting a finger
- **🧠 Intelligent Adaptation** — Refiner LLM (Grok default, Claude, GPT-4o, Ollama) takes your prompt template + context and produces a perfectly adapted version
- **👁️ Live Preview Modal** — Beautiful two-column modal: rendered Markdown prompt on the left, editable variables + context summary + "Adapt with AI" on the right
- **🚀 One-Tap Multi-LLM Sending** — Send directly to Grok, Claude, GPT-4o, or Ollama. Response displayed in a polished modal with copy/insert actions
- **⭐ Effectiveness Tracking** — Rate prompts after each use. Stars and lastUsed date update automatically in the file's YAML frontmatter
- **💾 Save Chat as Prompt** — Turn any note or selection into a new prompt with one command
- **📊 Auto-Generated Index** — `_Prompto Index.md` with stats, category breakdown, and top-rated prompts
- **⚙️ Full Settings** — Library path, API keys for 4 providers, default refiner/send-to, context limits, auto-adapt toggle
- **📱 Mobile Ready** — Responsive design works on Obsidian Mobile
- **🌗 Native Theming** — Looks perfect in dark and light mode using Obsidian's CSS variables

---

## 🤔 Why Prompto?

Most AI prompt tools treat prompts as disposable one-off text. Prompto treats them as **living documents** in your knowledge graph:

1. **Context is king** — A "critique my writing" prompt becomes 10× better when the LLM knows what note you're editing, what you've selected, and what's linked to it
2. **Iteration is built in** — Version numbers, effectiveness tracking, and lastUsed dates help you refine prompts over time
3. **It's just Markdown** — No proprietary databases. Grep your prompts, sync them with Git, link them from other notes. They're files.
4. **Full-loop workflow** — From card → context → adaptation → preview → send → response → rating, all without leaving Obsidian

---

## 🏆 Comparison

| Feature | Prompto | Copilot | PromptCrafter | AI Prompt Manager | PromptNest |
|---------|---------|---------|---------------|-------------------|------------|
| Obsidian-native Markdown storage | ✅ | ❌ | ✅ | ✅ | ❌ |
| Automatic context detection | ✅ | ❌ | ❌ | ❌ | ❌ |
| LLM-powered prompt adaptation | ✅ | ❌ | ❌ | ❌ | ❌ |
| Live Markdown preview modal | ✅ | ❌ | ❌ | ❌ | ❌ |
| Multi-LLM send (Grok/Claude/GPT/Ollama) | ✅ | Partial | ❌ | Partial | ❌ |
| Effectiveness tracking in frontmatter | ✅ | ❌ | ❌ | ❌ | ❌ |
| Beautiful card grid UI | ✅ | ❌ | ❌ | ❌ | ✅ |
| Fully local-first | ✅ | ❌ | ✅ | ✅ | ✅ |

**Prompto is the only plugin that combines all of these into a single seamless flow.**

---

## 📦 Installation

### From Community Plugins (once approved)
1. Open **Settings → Community Plugins → Browse**
2. Search for "Prompto"
3. Click **Install** then **Enable**

### Manual Installation
1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/prompto-obsidian/prompto/releases)
2. Create folder: `<your-vault>/.obsidian/plugins/prompto/`
3. Copy the files into that folder
4. Enable **Prompto** in Settings → Community Plugins

### Beta Testing via BRAT
1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin
2. Add beta plugin: `prompto-obsidian/prompto`
3. Enable Prompto

---

## 🚀 Usage

### Getting Started
1. Enable Prompto — it creates a `Prompto Library` folder automatically
2. Copy the sample prompts from `sample-library/` into your `Prompto Library` folder (or write your own!)
3. Click the 🎯 icon in the left ribbon to open the sidebar
4. Click any card to open the Preview Modal

### Prompt File Format
Prompts are regular `.md` files with YAML frontmatter:

```yaml
---
name: "Your Prompt Name"
category: Writing
tags: [tag1, tag2]
variables: [selected_text, custom_var]
version: 1
effectiveness: 0
lastUsed: ""
icon: "pen-tool"
---
Your prompt text with {{variable}} placeholders.

Use {{selected_text}} to auto-fill with your current selection.
```

### Context Detection
When you click a prompt card, Prompto automatically gathers:
- **Selected text** from the active editor
- **Active note** title, path, and summary
- **Backlinks** — titles of notes linking to the active note
- **Recent notes** — titles of other open notes

This context is used to intelligently adapt the prompt via the refiner LLM.

### Commands
- `Prompto: Open Prompto Library` — Open the sidebar
- `Prompto: Save current note as new prompt` — Convert note/selection to a prompt
- `Prompto: Generate Prompto Index` — Rebuild the stats index file
- `Prompto: Refresh Prompto Library` — Reload all prompts

### API Configuration
Go to **Settings → Prompto** and add API keys for the providers you want to use:
- **Grok (xAI)**: `console.x.ai` — set as default refiner
- **Claude (Anthropic)**: `console.anthropic.com`
- **OpenAI**: `platform.openai.com`
- **Ollama**: Just set the URL (default `http://localhost:11434`)

---

## 📸 Screenshots

> *Screenshots will be added after first stable release*

| Sidebar Card Grid | Preview Modal | Response + Rating |
|:-:|:-:|:-:|
| *Searchable card grid with category tabs* | *Two-column: rendered prompt + variables/context* | *LLM response with copy/insert + star rating* |

---

## 🛠️ Development

```bash
# Clone the repo
git clone https://github.com/prompto-obsidian/prompto.git
cd prompto

# Install dependencies
npm install

# Build for development (watch mode)
npm run dev

# Build for production
npm run build
```

For local testing, symlink or copy the built `main.js` and `manifest.json` into `<your-vault>/.obsidian/plugins/prompto/`.

---

## 📤 Publishing to Community Plugins

1. Fork [obsidian-releases](https://github.com/obsidianmd/obsidian-releases)
2. Add an entry to `community-plugins.json`:
   ```json
   {
       "id": "prompto",
       "name": "Prompto",
       "author": "Prompto",
       "description": "Intelligent context-aware prompt library with auto-detection, LLM adaptation, and multi-provider sending.",
       "repo": "prompto-obsidian/prompto"
   }
   ```
3. Open a Pull Request to the upstream repo
4. Ensure your repo has a tagged release with `main.js`, `manifest.json`, and optionally `styles.css`

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repo and create a feature branch
2. Follow the existing code style (TypeScript strict, Obsidian API conventions)
3. Test on both desktop and mobile
4. Open a PR with a clear description

Ideas for contributions:
- Additional prompt templates
- New LLM provider integrations
- Import/export functionality
- Prompt chaining (send output of one prompt as input to another)
- Community prompt sharing

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

---

**Made with ❤️ for the Obsidian community.**
