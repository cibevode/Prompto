# Contributing to Prompto

Thanks for your interest in contributing!

## Project Structure

This is a monorepo with two independent projects:

| Project | Path | Tech |
|---------|------|------|
| Obsidian Plugin | `obsidian-plugin/` | JavaScript (built from TypeScript) |
| Chrome Extension | `chrome-extension/` | Vanilla JS, HTML, CSS |

They share the `prompto-library.json` format but have no code dependencies on each other.

## Obsidian Plugin Development

```bash
cd obsidian-plugin
npm install
npm run dev
```

Symlink the folder into your test vault's `.obsidian/plugins/prompto/`.

### Architecture

The plugin is intentionally lean — Obsidian handles file creation and editing, Prompto adds the AI layer.

| Component | Purpose |
|-----------|---------|
| Frontmatter utils | Parse/update YAML in prompt files |
| Context gathering | Detect active note, selection, backlinks |
| LLM API | Call Grok, Claude, OpenAI, Venice, Ollama |
| Adapter | AI prompt refinement with context |
| PreviewModal | Preview, adapt, copy, send |
| ResponseModal | Show response, rate, copy, insert |
| PromptLibraryView | Sidebar with cards, search, filters |
| PromptoPlugin | Main plugin, file watcher, auto-export |

### Guidelines

- If Obsidian already does something, don't rebuild it
- No external dependencies beyond the Obsidian API
- Maintain backward compatibility with existing frontmatter

## Chrome Extension Development

Load `chrome-extension/` as unpacked in `chrome://extensions/` with Developer mode enabled.

### Files

| File | Purpose |
|------|---------|
| `popup.html` | UI structure |
| `popup.css` | Styles with theme support |
| `popup.js` | Main logic, library loading, actions |
| `content.js` | Page scraping and input injection |
| `background.js` | Context menu, badge, keyboard shortcuts |

### Guidelines

- Keep it self-contained — no build step, no frameworks
- Test injection on ChatGPT, Claude.ai, Gemini, and Perplexity
- Respect privacy — no analytics, no external requests beyond user-configured URLs

## Pull Requests

1. Fork → feature branch → make changes → test → PR
2. Describe what changed and why
3. Test on at least one platform (Windows/Mac/Linux)

## Reporting Bugs

Open an issue with: Obsidian/Chrome version, Prompto version, steps to reproduce, expected vs actual behavior.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
