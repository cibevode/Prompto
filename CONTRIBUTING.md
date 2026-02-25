# Contributing to Prompto

Thanks for your interest in contributing to Prompto! This document covers how to get started.

## Ways to Contribute

- **Bug reports** — found something broken? [Open an issue](https://github.com/prompto-obsidian/prompto/issues/new?labels=bug)
- **Feature requests** — have an idea? [Open a feature request](https://github.com/prompto-obsidian/prompto/issues/new?labels=enhancement)
- **Code contributions** — bug fixes, new features, or improvements
- **Documentation** — improve the README, add examples, fix typos
- **Prompt templates** — share useful prompt files for the sample library

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/)
- An Obsidian vault for testing

### Getting Started

```bash
# Fork the repo, then clone your fork
git clone https://github.com/YOUR-USERNAME/prompto.git
cd prompto

# Install dependencies
npm install

# Build once
npm run build

# Or start dev mode with auto-rebuild
npm run dev
```

### Testing in Obsidian

**Option A: Symlink (recommended)**
```bash
ln -s /path/to/prompto /path/to/vault/.obsidian/plugins/prompto
```

**Option B: Clone directly into plugins**
```bash
cd /path/to/vault/.obsidian/plugins
git clone https://github.com/YOUR-USERNAME/prompto.git
cd prompto && npm install && npm run dev
```

Then enable the plugin in Obsidian settings. Install the [Hot Reload](https://github.com/pjeby/hot-reload) plugin for automatic reloading.

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly in a development vault
4. Ensure the plugin builds without errors: `npm run build`
5. Write a clear PR description explaining what and why
6. Submit the PR

## Code Style

- The bundled `main.js` is the compiled output — edit TypeScript sources in `src/`
- CSS is embedded in the JavaScript as a single injected string
- Follow existing naming conventions and code patterns
- Use descriptive variable names
- Test with Obsidian developer console open (`Ctrl/Cmd + Shift + I`)

## Commit Messages

We loosely follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `refactor:` — code changes that don't fix bugs or add features
- `style:` — formatting, CSS changes
- `chore:` — maintenance tasks

## Questions?

Open a [Discussion](https://github.com/prompto-obsidian/prompto/discussions) for any questions not covered here.
