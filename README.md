<p align="center">
  <img src="assets/prompto-banner.png" alt="Prompto" width="600" />
</p>

<h1 align="center">Prompto</h1>

<p align="center">
  <strong>Your AI prompt library — in Obsidian, in your browser, everywhere.</strong>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#obsidian-plugin">Obsidian Plugin</a> •
  <a href="#chrome-extension">Chrome Extension</a> •
  <a href="#faq">FAQ</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" />
  <img src="https://img.shields.io/badge/obsidian-%3E%3D1.4.0-7c3aed.svg" alt="Obsidian" />
  <img src="https://img.shields.io/badge/chrome-Manifest%20v3-4285f4.svg" alt="Chrome" />
  <img src="https://img.shields.io/badge/brave-compatible-fb542b.svg" alt="Brave" />
</p>

---

## What is Prompto?

Prompto is a two-part open-source system for managing, adapting, and using AI prompts across your entire workflow:

1. **Obsidian Plugin** — Your prompts live as plain Markdown notes in your vault. Prompto adds a visual sidebar, context-aware AI adaptation, multi-LLM delivery, and auto-export.

2. **Chrome Extension** — Access the same prompt library from any browser tab. Copy prompts, adapt them to page content with AI, or inject them directly into ChatGPT, Claude, Gemini, and more.

The two connect through a shared `prompto-library.json` file that syncs via **any** cloud service or local folder.

### Why Prompto?

If you've ever found yourself doing any of the following, Prompto is for you:

- **Copy-pasting prompts** from a notes app into ChatGPT over and over
- **Losing track** of which version of a prompt worked best
- **Manually editing prompts** every time the context changes
- **Wishing your browser knew** about your prompt collection
- **Wanting to use the same prompts** across different AI tools (Claude, GPT, Gemini, Grok, etc.)

Prompto turns your scattered prompt collection into a searchable, AI-powered library that works everywhere you do.

---

## How It Works

```
┌───────────────────────────────────────────────────────────┐
│                    Your Obsidian Vault                     │
│                                                           │
│   📝 Blog Post Generator.md    📝 Code Review Expert.md  │
│   📝 Ruthless Draft Critique.md   📝 Debug Detective.md  │
│   📄 prompto-library.json  ← auto-exported by plugin     │
│                                                           │
├───────────────────────┬───────────────────────────────────┤
│                       │                                   │
│  ☁️  Syncs via any     │                                   │
│  cloud service:       │                                   │
│  Dropbox, OneDrive,   │                                   │
│  Google Drive, iCloud,│                                   │
│  Syncthing, etc.      │                                   │
│                       │                                   │
├───────────┬───────────┴──────────┬────────────────────────┤
│           ▼                      ▼                        │
│  ┌────────────────┐    ┌──────────────────┐              │
│  │ Obsidian Plugin │    │ Chrome Extension  │              │
│  │                │    │                  │              │
│  │ 🧠 Context      │    │ 📋 Copy           │              │
│  │ ⚡ Adapt        │    │ ✨ AI Adapt        │              │
│  │ 🚀 Send to LLM  │    │ ➡ Inject into     │              │
│  │ 📋 Copy         │    │   LLM chat box   │              │
│  └────────────────┘    └──────────────────┘              │
└───────────────────────────────────────────────────────────┘
```

---

## Quick Start

### Step 1: Install the Obsidian Plugin

**Manual install (recommended for now):**

1. Download or clone this repository
2. Copy `main.js` and `manifest.json` from the root of this repository into:
   ```
   <your-vault>/.obsidian/plugins/prompto/
   ```
3. Open Obsidian → Settings → Community Plugins → Enable **Prompto**

> **Tip:** If you don't see the `.obsidian` folder, enable "Show hidden files" in your file explorer.

### Step 2: Add Your First Prompts

**Option A — Use the starter library:**
Copy the contents of `sample-library/Prompto Library/` into a folder called `Prompto Library` in your vault root. Prompto will detect them automatically.

**Option B — Create from scratch:**
Click the **+** button in the Prompto sidebar. This creates a new prompt note from a template and opens it in Obsidian's editor.

**Option C — Convert an existing note:**
Use the command palette: `Prompto: Save current note as prompt`

### Step 3: Install the Chrome Extension

1. Open `chrome://extensions/` in Chrome or Brave
2. Enable **Developer mode** (toggle in the top-right)
3. Click **Load unpacked**
4. Select the `chrome-extension/` folder from this repository
5. Pin the Prompto icon to your toolbar for easy access

### Step 4: Connect the Extension to Your Library

The Obsidian plugin auto-exports a `prompto-library.json` file into your Prompto Library folder. The Chrome extension reads this file.

Click the Prompto extension icon → the onboarding wizard will guide you through connecting. Choose the method that matches your setup:

| Your Setup | Connection Method |
|---|---|
| Vault is on this computer | **Choose File** — select `prompto-library.json` directly |
| Vault syncs via Dropbox | **Cloud URL** — share the JSON file, change `?dl=0` → `?dl=1` |
| Vault syncs via Google Drive | **Cloud URL** — `https://drive.google.com/uc?export=download&id=FILE_ID` |
| Vault syncs via OneDrive | **Cloud URL** — use the embed/direct download link |
| Vault syncs via iCloud / Syncthing | **Choose File** — point to the synced folder on your machine |
| No Obsidian / testing it out | **Paste JSON** — paste library data directly |

### Step 5: Use It

**In Obsidian:** Open the Prompto sidebar → click a prompt card → preview, adapt with AI, copy, or send to any LLM.

**In the browser:** Click the Prompto icon (or press `Ctrl+Shift+P`) → pick a prompt → **Copy**, **Adapt** (AI rewrites it for the current page), or **Inject** (pastes into the active chat input).

---

## Obsidian Plugin

### Features

- **Sidebar Library** — Browse all your prompts as visual cards with search, category filters, and favorites
- **Native Editing** — Prompts are standard Markdown notes. Edit them in Obsidian's editor with full preview, linking, and plugin support
- **Context Detection** — Automatically gathers the active note, selected text, and backlinks as context for adaptation
- **AI Adaptation** — A refiner LLM rewrites your prompt template using gathered context, making it specific and ready to use
- **5 LLM Providers** — Send adapted prompts directly to Grok, Claude, GPT-4o, Venice.ai, or Ollama (local)
- **File Watcher** — The sidebar auto-refreshes when you add, edit, or delete prompt files
- **Auto-Export JSON** — Automatically generates `prompto-library.json` so the Chrome extension stays in sync
- **Copy to Clipboard** — One-click copy from any prompt card
- **Effectiveness Tracking** — Rate LLM responses after each use; scores are saved in frontmatter
- **Favorites** — Flag your best prompts so they float to the top

### Commands

Open the command palette (`Ctrl+P` / `Cmd+P`) and type "Prompto":

| Command | What It Does |
|---|---|
| **Open Prompto Library** | Show/focus the sidebar |
| **New prompt from template** | Create a new prompt note and open it in the editor |
| **Save current note as prompt** | Copy the active note into your Prompto Library folder |
| **Refresh Prompto Library** | Force-refresh the sidebar |
| **Generate Prompto Index** | Rebuild the index file |
| **Export library as JSON** | Manually trigger JSON export |

### Prompt Format

Prompts are Markdown files with YAML frontmatter:

```markdown
---
name: "Code Review Expert"
category: Coding
tags: [review, quality, bugs]
icon: "code-2"
favorite: true
---
You are a senior staff engineer performing a thorough code review.

Review this code:

{{selected_text}}

Language/framework: {{language}}
Review priorities: {{priorities}}

For each issue, show the problematic code and a concrete fix.
```

**Frontmatter fields:**

| Field | Required | Description |
|---|---|---|
| `name` | Yes | Display name shown on the card |
| `category` | Yes | Used for filtering (e.g., Coding, Writing, Research) |
| `tags` | No | Keywords for search |
| `icon` | No | Lucide icon name (see [lucide.dev](https://lucide.dev)) |
| `favorite` | No | Set to `true` to pin to the top |
| `variables` | No | List of `{{variable}}` names used in the body |
| `effectiveness` | Auto | Average rating — updated when you rate responses |
| `lastUsed` | Auto | Date stamp — updated each time you send the prompt |
| `version` | No | Version number for tracking iterations |

**Variables:** Use `{{variable_name}}` anywhere in the body. Prompto auto-detects them and prompts you to fill them in. The special variable `{{selected_text}}` auto-fills with your current editor selection. See the [Writing Great Prompts](#writing-great-prompts) guide below for best practices.

### Configuration

Go to Settings → Prompto, or click the ⚙ gear icon in the sidebar.

**API Keys** (needed for AI adaptation and LLM delivery):

| Provider | Where to Get a Key |
|---|---|
| Grok | [console.x.ai](https://console.x.ai) |
| Claude | [console.anthropic.com](https://console.anthropic.com) |
| OpenAI | [platform.openai.com](https://platform.openai.com) |
| Venice.ai | [venice.ai](https://venice.ai) |
| Ollama | No key needed — runs locally at `localhost:11434` |

**Behavior settings:** Default refiner model, default send-to model, auto-detect context, auto-adapt, max context characters, auto-export JSON on changes.

---

## Writing Great Prompts

The difference between a mediocre AI response and an excellent one almost always comes down to the prompt. This guide covers how to write prompts that work well with Prompto's variable system and AI adaptation.

### Understanding Variables

Variables are the core of what makes Prompto powerful. They turn a one-time prompt into a **reusable template** that adapts to different situations.

A variable is any word wrapped in double curly braces: `{{variable_name}}`. When you use a prompt, Prompto detects all variables and either fills them automatically from context or asks you to provide values.

### Common Variables

These are the most useful variables to include in your prompts. You can use any name you want — these are just proven patterns:

| Variable | Purpose | Example Use |
|---|---|---|
| `{{selected_text}}` | Auto-fills with highlighted text from the editor | "Review this code: {{selected_text}}" |
| `{{topic}}` | The subject to focus on | "Write a blog post about {{topic}}" |
| `{{audience}}` | Who the output is written for | "Explain this for {{audience}}" |
| `{{tone}}` | Writing style (formal, casual, technical) | "Write in a {{tone}} tone" |
| `{{language}}` | Programming or spoken language | "Translate to {{language}}" |
| `{{format}}` | Output structure (bullets, essay, table) | "Respond as {{format}}" |
| `{{constraints}}` | Limits, rules, things to avoid | "Follow these rules: {{constraints}}" |
| `{{context}}` | Background information or situation | "Given this context: {{context}}" |
| `{{examples}}` | Sample inputs or outputs | "Here are examples: {{examples}}" |
| `{{role}}` | Who the AI should act as | "You are a {{role}}" |

### The `{{selected_text}}` Variable

This is Prompto's most powerful built-in variable. It automatically fills with:

- **In Obsidian:** Whatever text you have highlighted in the editor when you activate the prompt
- **In the Chrome Extension:** Text you've selected on the current webpage, or page content when using AI Adapt

This means you can write prompts like "Critique this writing: {{selected_text}}" and they'll work instantly — highlight text, click the prompt, done. No manual copy-pasting.

### Anatomy of a Great Prompt

The best prompts follow a consistent structure:

```markdown
---
name: "Prompt Name"
category: Category
tags: [relevant, tags]
icon: "icon-name"
---
[1. ROLE — Tell the AI who to be]
You are a senior technical writer with 15 years of experience.

[2. TASK — Be specific about what to do]
Rewrite the following documentation to be clearer and more concise:

{{selected_text}}

[3. CONTEXT — Give the AI what it needs]
The target audience is {{audience}}.
The documentation is for {{product}}.

[4. FORMAT — Define the output structure]
Respond with:
- A rewritten version (same sections, better writing)
- A list of the 3 biggest issues with the original
- One sentence summarizing the main improvement

[5. CONSTRAINTS — Set boundaries]
Keep the same technical depth. Do not add information that wasn't in the original.
Maximum length: {{constraints}}.
```

### Best Practices

**1. Start with a role**

Giving the AI a role dramatically improves output quality. Be specific — "You are a senior editor known for transforming mediocre writing into compelling prose" works better than "You are a helpful assistant."

**2. Make the task unambiguous**

"Review this code" is vague. "Review this code for security vulnerabilities, focusing on SQL injection and XSS vectors, and suggest fixes for each issue you find" is clear.

**3. Use variables for what changes, not what stays**

The structure, role, and instructions should be fixed. Variables should capture the **inputs** — the text to analyze, the topic to write about, the audience to target.

❌ Bad: `{{instructions}} about {{topic}}`
✅ Good: `You are a research analyst. Provide a comprehensive overview of {{topic}} focusing on recent developments, key players, and future outlook.`

**4. Include output format instructions**

Tell the AI exactly how to structure its response. This is especially important for prompts you'll use repeatedly — consistent output makes the results more useful.

**5. Add constraints that matter**

Word limits, tone requirements, things to avoid, required sources — constraints focus the AI and prevent generic responses.

**6. Design for adaptation**

When using the Chrome Extension's AI Adapt feature, Prompto sends the current page's context to the LLM along with your prompt. Write prompts that benefit from this context:

- Use `{{selected_text}}` — it gets filled with page content during adaptation
- Include variables like `{{topic}}` and `{{audience}}` — the AI adapter infers these from the page
- Write prompts that make sense even when the variables are filled by AI rather than by hand

### Prompt Examples by Category

**Writing — Blog Post Generator:**
```markdown
You are a content strategist who writes engaging, SEO-aware blog posts.

Write a blog post about {{topic}} for {{audience}}.

Tone: {{tone}}
Target length: {{word_count}} words

Structure the post with:
- A hook opening that creates curiosity
- 3-5 subheadings that break up the content
- Actionable takeaways in each section
- A conclusion with a clear call to action

Avoid generic filler. Every sentence should earn its place.
```

**Coding — Debug Detective:**
```markdown
You are a debugging specialist. Analyze this code systematically:

{{selected_text}}

Language: {{language}}

Follow this process:
1. Read the code and identify what it's trying to do
2. Trace the execution path for the reported issue
3. Identify the root cause (not just the symptom)
4. Provide a minimal fix with explanation
5. Suggest how to prevent this class of bug in the future

Be specific. Reference line numbers. Show the fix as a diff.
```

**Research — Deep Dive:**
```markdown
You are a research analyst. Provide a comprehensive analysis of {{topic}}.

Cover:
- Current state and recent developments (last 12 months)
- Key players, companies, or organizations involved
- Major challenges and open questions
- Future outlook and predictions

Target audience: {{audience}}
Depth: {{depth}}

Cite specific examples, data points, and sources where possible.
Distinguish between established facts and your analysis.
```

**Productivity — Meeting Notes:**
```markdown
Process these raw meeting notes into a structured summary:

{{selected_text}}

Output format:
- **Decisions Made** — What was agreed on
- **Action Items** — Who does what by when (table format)
- **Open Questions** — Unresolved items that need follow-up
- **Key Discussion Points** — Brief summary of major topics

Keep it concise. Use the participants' actual names. Flag any action items without a clear owner.
```

---

## Chrome Extension

### Features

- **Three Source Modes** — Local file, Cloud URL, or paste JSON directly
- **AI-Powered Adaptation** — Uses Grok, Claude, GPT-4o, or Venice to intelligently rewrite prompts based on the current page's content, title, and your selected text
- **Inject into Any LLM** — One click pastes your prompt into ChatGPT, Claude, Gemini, Perplexity, DeepSeek, Grok, or any site with a custom CSS selector
- **Browse & Search** — Filter by category, search by keyword, browse favorites
- **Recently Used** — Quick access to your last 5 prompts
- **Pinned Favorites** — Favorited prompts float to the top
- **Keyboard Shortcuts** — `Ctrl+Shift+P` to open, `Ctrl+Shift+L` to quick-copy your last used prompt
- **Right-Click Menu** — Select text on any page → right-click → "Save as Prompto context"
- **Theme Support** — System, Dark, or Light theme with a quick toggle
- **Custom CSS Selectors** — Define input selectors for LLM sites that aren't built-in
- **Export/Import Settings** — Backup and restore your full configuration
- **Onboarding Wizard** — Guided first-run setup
- **Badge Count** — Shows your prompt count on the extension icon
- **Auto-Refresh** — Configurable interval to re-fetch your library

### AI Adaptation — How It Works

When you click **Adapt** on a prompt:

1. Prompto scrapes the current page (title, URL, meta description, selected text, body excerpt)
2. Sends your prompt template + page context to your chosen LLM
3. The LLM intelligently rewrites the prompt — filling in variables, adjusting tone, making it specific to what you're looking at
4. The adapted version appears in a highlighted preview below the original
5. Automatically copied to your clipboard

**Example:** You have a "Blog Post Generator" prompt with `{{topic}}` and `{{audience}}` variables. You're reading a TechCrunch article about quantum computing. Click Adapt → the LLM fills in the topic from the article, infers a tech-savvy audience, and produces a ready-to-use prompt.

### Setting Up AI Adaptation

1. Click the Prompto extension icon → scroll to **Settings** (⚙)
2. Under **AI Adaptation**, select your preferred model
3. Enter the API key for that provider
4. Click **Save**

### Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+Shift+P` (`Cmd+Shift+P` on Mac) | Open Prompto popup |
| `Ctrl+Shift+L` (`Cmd+Shift+L` on Mac) | Quick-copy last used prompt |

Customize these at `chrome://extensions/shortcuts`.

### Supported LLM Sites (Inject)

Prompto can inject prompts directly into the chat input of:

- ChatGPT (chat.openai.com)
- Claude (claude.ai)
- Google Gemini (gemini.google.com)
- Perplexity (perplexity.ai)
- DeepSeek (chat.deepseek.com)
- Grok (grok.x.ai)
- HuggingChat (huggingface.co/chat)
- Poe (poe.com)

**Don't see your site?** Add a custom CSS selector in Settings → Custom Selectors. Format: `domain.com = textarea.chat-input` (one per line).

---

## Connecting Obsidian ↔ Chrome Extension

The connection between the two is a single JSON file. Here's how each cloud service works:

### Dropbox
1. In Obsidian, Prompto auto-exports `prompto-library.json` to your library folder
2. Right-click the file in Dropbox → **Copy link**
3. Change `?dl=0` at the end to `?dl=1`
4. Paste the URL into the Chrome extension's Cloud URL field

### Google Drive
1. Right-click `prompto-library.json` in Google Drive → **Get link** → set to "Anyone with the link"
2. Copy the file ID from the URL
3. Use: `https://drive.google.com/uc?export=download&id=YOUR_FILE_ID`
4. Paste into the Chrome extension

### OneDrive
1. Right-click `prompto-library.json` → **Embed** → copy the direct download link
2. Paste into the Chrome extension

### Local (No Cloud)
1. Click "📁 Choose prompto-library.json" in the Chrome extension
2. Navigate to your vault's Prompto Library folder
3. Select `prompto-library.json`

> **Note:** The local file picker requires you to re-select the file after each browser restart. Cloud URLs don't have this limitation.

### iCloud / Syncthing / Other Local Sync
Same as Local — the synced folder appears on your filesystem, so just point the extension at it.

---

## Sample Library

Prompto ships with 8 starter prompts to get you going:

| Prompt | Category | What It Does |
|---|---|---|
| Blog Post Generator | Writing | Generates structured blog posts with SEO awareness |
| Ruthless Draft Critique | Writing | Brutally honest writing feedback in three sections |
| Code Review Expert | Coding | Thorough code review covering bugs, design, and style |
| Debug Detective | Coding | Systematic debugging with root cause analysis |
| PRD Writer | Product | Product requirements document from a feature brief |
| Research Deep Dive | Research | Multi-source research synthesis with citations |
| Meeting Notes Processor | Productivity | Turns raw meeting notes into structured action items |
| Daily Reflection | Personal | Guided journaling prompt for daily review |

Copy `sample-library/Prompto Library/` into your vault to use them immediately.

---

## Project Structure

```
prompto/
├── main.js                     Built Obsidian plugin
├── manifest.json               Obsidian plugin manifest
├── package.json                Node.js config & build scripts
├── tsconfig.json               TypeScript config
├── esbuild.config.mjs          Build config
├── versions.json               Obsidian version compatibility
│
├── src/                        TypeScript source
│   ├── main.ts                 Plugin entry point
│   ├── types.ts                Type definitions
│   ├── settings.ts             Settings tab
│   ├── views/                  Sidebar view
│   ├── modals/                 Preview & response modals
│   └── utils/                  API, adapter, context, frontmatter
│
├── chrome-extension/           Chrome/Brave extension
│   ├── manifest.json           Manifest v3
│   ├── popup.html              Extension popup UI
│   ├── popup.css               Styles (theme support)
│   ├── popup.js                Main logic (822 lines)
│   ├── content.js              Page scraping & injection
│   ├── background.js           Service worker, context menu, shortcuts
│   └── icons/                  PNG icons (16, 48, 128px)
│
├── sample-library/             8 starter prompts
│   └── Prompto Library/
│       ├── Blog Post Generator.md
│       ├── Code Review Expert.md
│       ├── Ruthless Draft Critique.md
│       └── ... (5 more)
│
├── assets/                     Screenshots & media
├── .github/workflows/          CI/CD (GitHub Actions)
├── CHANGELOG.md                Version history
├── CONTRIBUTING.md             Contributor guide
├── LICENSE                     MIT License
└── README.md                   You are here
```

---

## Privacy & Security

Prompto is designed with privacy as a core principle:

- **Your prompts stay local.** They're Markdown files in your vault. No cloud database, no telemetry, no tracking.
- **API keys are stored locally.** In Obsidian's plugin settings (on-device) and in Chrome's local storage. Never transmitted anywhere except to the LLM provider you choose.
- **Context is sent only when you click.** Page content and note context are sent to your chosen LLM only when you explicitly click Adapt or Send. Never in the background.
- **No analytics.** No usage tracking, no crash reporting, no phoning home.
- **Fully local option.** Use Ollama (Obsidian) or Venice.ai for on-device / privacy-first LLM processing.
- **Open source.** Read every line of code. Verify for yourself.

---

## FAQ

### General

**Q: Do I need both the Obsidian plugin and the Chrome extension?**
A: No. They work independently. Use just the plugin if you only work in Obsidian. Use just the extension if you want prompts in your browser (you can paste the JSON directly). Use both for the full experience.

**Q: What LLM providers are supported?**
A: The Obsidian plugin supports Grok, Claude, GPT-4o, Venice.ai, and Ollama (local). The Chrome extension supports Grok, Claude, GPT-4o, and Venice.ai for AI adaptation.

**Q: Is an API key required?**
A: Not for basic usage. You can browse, search, copy, and organize prompts without any API key. A key is only needed for AI adaptation (smart rewriting) and direct LLM delivery from Obsidian.

**Q: Does Prompto work with Brave?**
A: Yes. The Chrome extension is fully compatible with Brave. Load it as an unpacked extension the same way as Chrome.

**Q: Can I use Prompto with other browsers?**
A: The extension works with any Chromium-based browser — Chrome, Brave, Edge, Arc, Vivaldi, Opera. Firefox is not supported at this time.

**Q: Is my data safe?**
A: Yes. Prompto stores everything locally. No data is sent anywhere unless you explicitly click Adapt or Send, and then only to the LLM provider you've chosen. There are no analytics, no tracking, and no cloud storage. See the [Privacy & Security](#privacy--security) section for details.

### Obsidian Plugin

**Q: Where should I put my prompts?**
A: By default, in a folder called `Prompto Library` at your vault root. You can change this path in Settings → Prompto → Library folder.

**Q: Can I organize prompts in subfolders?**
A: Currently, Prompto reads from a single folder. Use categories and tags in frontmatter for organization within the library.

**Q: What happens if I edit a prompt file?**
A: Prompto's file watcher detects the change and auto-refreshes the sidebar within a few seconds. The JSON export is also updated automatically.

**Q: Do I need frontmatter?**
A: Yes — at minimum `name` and `category`. Without these, Prompto won't recognize the file as a prompt.

**Q: What are variables?**
A: Placeholders like `{{selected_text}}` or `{{topic}}` in your prompt body. When you use a prompt, Prompto detects these and either fills them from context or asks you to provide values.

**Q: Can I use Obsidian links and formatting in prompts?**
A: Absolutely. Prompts are standard Markdown notes. You can use links, tags, embeds, and any Obsidian feature. When the prompt is sent to an LLM, the raw Markdown body is used.

**Q: What's the `{{selected_text}}` variable?**
A: It's a special variable that auto-fills with whatever text you have selected in the Obsidian editor when you activate a prompt. In the Chrome extension, it fills with your page selection or page content during AI adaptation. Perfect for "review this code" or "critique this paragraph" type prompts.

**Q: Can I create my own variable names?**
A: Absolutely. Variables are just `{{anything_you_want}}`. Prompto auto-detects them from your prompt body — there's no need to register or declare them. Common ones include `{{topic}}`, `{{audience}}`, `{{tone}}`, `{{language}}`, `{{format}}`, and `{{constraints}}`, but you can invent any name that makes sense for your prompt.

**Q: How do variables work with AI Adaptation?**
A: When you click Adapt in the Chrome extension, Prompto sends your prompt template and the current page's context to an LLM. The LLM intelligently fills in all variables based on the page content. For example, a prompt with `{{topic}}` and `{{audience}}` on a TechCrunch article would get those filled with the article's subject and a tech-savvy audience. You don't need to fill variables manually — the AI does it for you.

**Q: What makes a good variable vs. a bad one?**
A: Good variables represent inputs that change between uses — the text to analyze, the topic to research, the audience to write for. Bad variables replace the instructions themselves. For example, `Review {{selected_text}} for {{priorities}}` is good because the structure is fixed and the inputs vary. `{{instructions}} about {{topic}}` is bad because the entire prompt changes and there's no consistent structure for the AI to follow.

**Q: How many variables should a prompt have?**
A: Most effective prompts have 2-4 variables. One variable (usually `{{selected_text}}`) is often enough for simple prompts. Avoid more than 5-6 — too many variables means the prompt structure is too loose. If you find yourself needing many variables, consider splitting into multiple specialized prompts instead.

### Chrome Extension

**Q: Why does the file picker require me to re-select after restarting the browser?**
A: This is a browser security limitation — Chrome doesn't persist file system access across sessions for extensions. Using a Cloud URL avoids this entirely since the URL is saved permanently.

**Q: I get "Can't read this page" when adapting — what's wrong?**
A: You're on a restricted page like `chrome://settings`, the extensions page, or a new tab. Navigate to a regular webpage and try again.

**Q: Inject isn't working on my LLM site.**
A: The site might not be in the built-in list. Go to Settings → Custom Selectors and add a line like: `yoursite.com = textarea.chat-input`. Use your browser's Inspect tool to find the correct CSS selector for the chat input field.

**Q: Can I use the extension without Obsidian?**
A: Yes. Choose "Paste JSON" during onboarding and paste your prompt library data directly. You can also host a JSON file anywhere and use the Cloud URL method.

**Q: How do I update my prompts in the extension?**
A: If using a Cloud URL, the extension auto-refreshes on a configurable interval. If using a local file, re-select the file or click the refresh button. If using Paste JSON, paste the updated JSON.

**Q: What does the Adapt button actually do?**
A: It uses AI to intelligently rewrite your prompt template based on what's on the current webpage. It reads the page title, URL, any text you've selected, and a body excerpt, then sends that context along with your prompt to your chosen LLM. The result is a version of your prompt that's tailored to the specific page you're looking at.

### Troubleshooting

**Q: The sidebar is empty.**
A: Make sure your Prompto Library folder contains `.md` files with valid frontmatter (at minimum `name` and `category`). Check Settings → Prompto to confirm the folder path is correct.

**Q: API calls are failing.**
A: Verify your API key is correct and has credits/quota remaining. Check that your key has the right permissions (e.g., Claude keys need the Messages API scope).

**Q: The extension shows 0 prompts.**
A: Re-check your data source. For Cloud URLs, open the URL in a browser tab to verify it returns valid JSON. For local files, re-select `prompto-library.json`. For Paste JSON, make sure you pasted valid JSON (array of objects with `name` and `category` fields).

**Q: Adapt takes a long time.**
A: Adaptation speed depends on your LLM provider. Grok tends to be fastest. If it's consistently slow, check your internet connection and API quotas.

**Q: The extension popup is too small / content is cut off.**
A: This can vary by OS and display scaling. The popup is designed for 580px height. If you're on a high-DPI display, try adjusting your browser's zoom level.

---

## Roadmap

Planned for future releases:

- **Obsidian Community Plugin Directory** — Submit for one-click install
- **Chrome Web Store** — Publish for easy installation
- **Firefox Extension** — Port with Manifest v2/v3 compatibility
- **Prompt Versioning** — Track and diff prompt iterations over time
- **Shared Team Libraries** — Collaborative prompt libraries via shared cloud folders
- **More LLM Providers** — Mistral, Cohere, local models via LM Studio
- **Prompt Analytics** — Usage stats and effectiveness trends over time
- **Template Marketplace** — Community-contributed prompt templates

Have a feature request? [Open an issue](../../issues).

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

**Quick version:**

### Plugin Development
```bash
npm install
npm run dev
```
Symlink the repo into your vault's `.obsidian/plugins/prompto/` for live testing.

### Extension Development
Load `chrome-extension/` as unpacked in `chrome://extensions/` with Developer mode on. Changes to HTML/CSS/JS take effect on extension reload.

### Submitting Changes
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make your changes and test
4. Submit a pull request with a clear description

### Reporting Bugs
[Open an issue](../../issues) with: your OS, Obsidian version, browser version, Prompto version, steps to reproduce, and expected vs. actual behavior.

---

## Acknowledgments

- [Obsidian](https://obsidian.md) for building the best knowledge management tool
- [Lucide](https://lucide.dev) for the beautiful open-source icon set
- The Obsidian plugin developer community for excellent documentation and examples

---

## License

Prompto is open source under the [MIT License](LICENSE).

You are free to use, modify, and distribute Prompto for any purpose. See the LICENSE file for full terms.

---

<p align="center">
  Built with ☕ and Obsidian.<br>
  If Prompto helps your workflow, consider giving it a ⭐ on GitHub.
</p>
