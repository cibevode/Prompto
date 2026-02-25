/* Prompto Chrome Extension — content.js
   Page interaction: scrape context, inject into inputs */

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "getPageContext") {
    const sel = window.getSelection().toString();
    const title = document.title;
    const url = window.location.href;
    const meta = document.querySelector('meta[name="description"]');
    const description = meta ? meta.getAttribute("content") || "" : "";
    const body = document.body.innerText.slice(0, 3000);
    sendResponse({ selection: sel, title, url, description, body });
  }

  if (msg.type === "injectText") {
    const result = injectIntoInput(msg.text, msg.customSelectors || []);
    sendResponse({ success: result });
  }

  return true; // keep channel open for async
});

function injectIntoInput(text, customSelectors) {
  // User-defined selectors first, then known LLM sites, then generic
  const selectors = [
    ...customSelectors,
    // ChatGPT
    '#prompt-textarea',
    'textarea[data-id="root"]',
    // Claude.ai
    'div.ProseMirror[contenteditable="true"]',
    // Gemini
    'div.ql-editor[contenteditable="true"]',
    // Perplexity
    'textarea[placeholder*="Ask"]',
    // Generic LLM patterns
    'textarea[placeholder*="Message"]',
    'textarea[placeholder*="message"]',
    'textarea[placeholder*="Send"]',
    'textarea[placeholder*="Type"]',
    'textarea[placeholder*="Chat"]',
    'textarea[placeholder*="chat"]',
    // Fallbacks
    'div[contenteditable="true"][role="textbox"]',
    'div[contenteditable="true"]',
    'textarea:not([readonly])',
  ];

  for (const sel of selectors) {
    try {
      const el = document.querySelector(sel);
      if (el && el.offsetParent !== null) {
        el.focus();

        if (el.tagName === "TEXTAREA" || el.tagName === "INPUT") {
          // Use native setter to trigger React/Vue/etc state updates
          const proto = el.tagName === "TEXTAREA"
            ? window.HTMLTextAreaElement.prototype
            : window.HTMLInputElement.prototype;
          const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
          if (setter) {
            setter.call(el, text);
          } else {
            el.value = text;
          }
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
          // ContentEditable div (Claude, Gemini, etc)
          el.focus();
          // Clear existing content
          el.innerHTML = '';
          // Insert as text node to trigger framework updates
          const textNode = document.createTextNode(text);
          el.appendChild(textNode);
          // Fire events that frameworks listen for
          el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: text }));
          el.dispatchEvent(new Event('input', { bubbles: true }));
        }

        el.focus();
        return true;
      }
    } catch (e) {
      // Selector failed, try next
    }
  }
  return false;
}
