# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in Prompto, please report it responsibly.

**Do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email: **[kilobyte_suggest857@simplelogin.com]**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

You should receive a response within 48 hours. We'll work with you to understand the issue and coordinate a fix before any public disclosure.

## Scope

Security issues we care about:

- API key exposure or leakage
- Unintended data transmission (prompts or content sent somewhere unexpected)
- Chrome extension permission escalation
- Code injection via malicious prompt files
- Cross-site scripting (XSS) in the extension popup

## Out of Scope

- Vulnerabilities in third-party LLM APIs (report those to the provider)
- Issues requiring physical access to the user's machine
- Social engineering attacks

## API Key Handling

Prompto stores API keys locally:
- **Obsidian plugin:** In the plugin's `data.json` file within your vault
- **Chrome extension:** In `chrome.storage.local`

Keys are never transmitted except directly to the LLM provider you've selected, and only when you explicitly click Adapt or Send.
