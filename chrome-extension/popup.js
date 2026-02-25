/* Prompto Chrome Extension — popup.js */

// ═══ STATE ═══
let prompts = [];
let filtered = [];
let activeFilter = "All";
let searchQuery = "";
let currentPrompt = null;
let dirHandle = null;
let recentlyUsed = []; // prompt names

// ═══ CONFIG ═══
const DEFAULT_CONFIG = {
  sourceType: "local", cloudUrl: "", pasteJson: "",
  refreshInterval: 5, theme: "system", showBadge: true,
  customSelectors: "", onboarded: false,
  adapterModel: "grok", grokKey: "", claudeKey: "", openaiKey: "", geminiKey: "", veniceKey: ""
};

async function loadConfig() {
  const data = await chrome.storage.local.get("prompto_config");
  return Object.assign({}, DEFAULT_CONFIG, data.prompto_config || {});
}
async function saveConfig(config) {
  await chrome.storage.local.set({ prompto_config: config });
}

// ═══ TOAST ═══
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1800);
}

// ═══ THEME ═══
async function applyTheme(theme) {
  if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else if (theme === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
}

// ═══ ONBOARDING ═══
async function checkOnboarding() {
  const config = await loadConfig();
  if (!config.onboarded) {
    document.getElementById("onboarding").classList.add("active");
    return true;
  }
  return false;
}

async function finishOnboarding(sourceType) {
  const config = await loadConfig();
  config.onboarded = true;
  if (sourceType) config.sourceType = sourceType;
  await saveConfig(config);
  document.getElementById("onboarding").classList.remove("active");

  if (sourceType === "local") await pickLocalFolder();
  else if (sourceType === "cloud") showSettings();
  else if (sourceType === "paste") showSettings();
}

// ═══ LOAD LIBRARY ═══
async function loadLibrary() {
  const config = await loadConfig();
  let data = null;

  if (config.sourceType === "local") data = await loadFromLocal();
  else if (config.sourceType === "cloud") data = await loadFromCloud(config.cloudUrl);
  else if (config.sourceType === "paste") data = loadFromPaste(config.pasteJson);

  if (data && data.prompts) {
    prompts = data.prompts;
    prompts.sort((a, b) => {
      if (a.favorite && !b.favorite) return -1;
      if (!a.favorite && b.favorite) return 1;
      return (b.effectiveness || 0) - (a.effectiveness || 0) || a.name.localeCompare(b.name);
    });
    updateSource(true, prompts.length + " prompts · " + config.sourceType);
    buildCategoryDropdown();
    applyFilters();
    renderCards();
    // Update badge
    if (config.showBadge) {
      chrome.runtime.sendMessage({ type: "updateBadge", count: prompts.length });
    }
  } else {
    prompts = [];
    updateSource(false, "No library connected");
    renderCards();
  }
  document.getElementById("count").textContent = String(prompts.length);
}

// ═══ RECENTLY USED ═══
async function loadRecentlyUsed() {
  const data = await chrome.storage.local.get("prompto_recent");
  recentlyUsed = data.prompto_recent || [];
}
async function trackUsage(prompt) {
  recentlyUsed = recentlyUsed.filter(n => n !== prompt.name);
  recentlyUsed.unshift(prompt.name);
  recentlyUsed = recentlyUsed.slice(0, 5);
  await chrome.storage.local.set({ prompto_recent: recentlyUsed });
  // Also track as "last used" for quick-copy shortcut
  chrome.runtime.sendMessage({ type: "setLastUsed", prompt: { name: prompt.name, body: prompt.body } });
}

// ═══ LOCAL FILE / FOLDER ═══
let localJsonData = null; // cached JSON data from file pick

async function loadFromLocal() {
  // Try directory handle first (Chrome)
  if (!dirHandle) {
    try { dirHandle = await getStoredHandle(); } catch (e) {}
  }
  if (dirHandle) {
    try {
      const perm = await dirHandle.queryPermission({ mode: "read" });
      if (perm !== "granted") {
        const req = await dirHandle.requestPermission({ mode: "read" });
        if (req !== "granted") { dirHandle = null; }
      }
      if (dirHandle) {
        const fh = await dirHandle.getFileHandle("prompto-library.json");
        const file = await fh.getFile();
        return JSON.parse(await file.text());
      }
    } catch (e) { console.log("Prompto: dir handle read failed", e); dirHandle = null; }
  }
  // Fall back to cached file data (from file picker)
  if (localJsonData) return localJsonData;
  // Fall back to storage
  const stored = await chrome.storage.local.get("prompto_local_json");
  if (stored.prompto_local_json) {
    localJsonData = stored.prompto_local_json;
    return localJsonData;
  }
  return null;
}

async function pickLocalFolder() {
  // Try directory picker first (Chrome — may not work in all browsers)
  if (window.showDirectoryPicker) {
    try {
      dirHandle = await window.showDirectoryPicker({ mode: "read" });
      await storeHandle(dirHandle);
      document.getElementById("folderPath").textContent = "✓ Folder: " + dirHandle.name;
      toast("Folder selected!");
      await loadLibrary();
      return;
    } catch (e) {
      if (e.name === "AbortError") return;
      console.log("Prompto: Directory picker failed, falling back to file picker", e);
    }
  }
  // Fall back to file input (works in all browsers)
  pickJsonFile();
}

function pickJsonFile() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json,application/json";
  input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!data.prompts) { toast("Invalid library file — missing 'prompts' array"); return; }
      localJsonData = data;
      // Store in chrome.storage for persistence
      await chrome.storage.local.set({ prompto_local_json: data, prompto_local_filename: file.name });
      document.getElementById("folderPath").textContent = "✓ File: " + file.name;
      toast("Library loaded!");
      await loadLibrary();
    } catch (err) {
      toast("Could not read file: " + err.message);
    }
  });
  input.click();
}

// IndexedDB for handle persistence
function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open("prompto_ext", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("handles");
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function storeHandle(handle) {
  const db = await openDB();
  const tx = db.transaction("handles", "readwrite");
  tx.objectStore("handles").put(handle, "dir");
  return new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = rej; });
}
async function getStoredHandle() {
  const db = await openDB();
  const tx = db.transaction("handles", "readonly");
  const req = tx.objectStore("handles").get("dir");
  return new Promise(res => { req.onsuccess = () => res(req.result); req.onerror = () => res(null); });
}

// ═══ CLOUD URL ═══
async function loadFromCloud(url) {
  if (!url) return null;
  try {
    const resp = await fetch(url, { cache: "no-store" });
    if (!resp.ok) throw new Error("HTTP " + resp.status);
    return await resp.json();
  } catch (e) { console.log("Prompto: cloud failed", e); return null; }
}

// ═══ PASTE JSON ═══
function loadFromPaste(jsonStr) {
  if (!jsonStr) return null;
  try { return JSON.parse(jsonStr); } catch (e) { return null; }
}

// ═══ SOURCE INDICATOR ═══
function updateSource(connected, text) {
  document.getElementById("sourceDot").className = "dot " + (connected ? "ok" : "err");
  document.getElementById("sourceText").textContent = text;
  const action = document.getElementById("sourceAction");
  action.textContent = connected ? "Refresh" : "Connect";
  action.onclick = connected ? () => loadLibrary() : () => showSettings();
}

// ═══ CONTEXT BANNER ═══
async function checkCapturedContext() {
  const data = await chrome.storage.local.get("prompto_page_context");
  const ctx = data.prompto_page_context;
  if (ctx && Date.now() - ctx.timestamp < 300000) { // 5 min expiry
    document.getElementById("contextBanner").style.display = "flex";
  } else {
    document.getElementById("contextBanner").style.display = "none";
  }
}

// ═══ FILTERS ═══
function applyFilters() {
  if (activeFilter === "Recent") {
    filtered = recentlyUsed.map(name => prompts.find(p => p.name === name)).filter(Boolean);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => matchesSearch(p, q));
    }
    return;
  }
  filtered = prompts.filter(p => {
    if (activeFilter !== "All" && activeFilter !== "Favorites" && p.category !== activeFilter) return false;
    if (activeFilter === "Favorites" && !p.favorite) return false;
    if (searchQuery) return matchesSearch(p, searchQuery.toLowerCase());
    return true;
  });
}

function matchesSearch(p, q) {
  return p.name.toLowerCase().includes(q) ||
    (p.tags || []).some(t => t.toLowerCase().includes(q)) ||
    (p.category || "").toLowerCase().includes(q) ||
    (p.body || "").toLowerCase().includes(q);
}

function buildCategoryDropdown() {
  const sel = document.getElementById("catSelect");
  sel.innerHTML = '<option value="">Category...</option>';
  [...new Set(prompts.map(p => p.category).filter(Boolean))].sort().forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    sel.appendChild(opt);
  });
}

// ═══ RENDER ═══
function renderCards() {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  if (filtered.length === 0) {
    const hint = prompts.length === 0
      ? 'Click ⚙ → Choose Folder or enter a Cloud URL'
      : activeFilter === "Recent" ? "No recently used prompts yet" : "No prompts match";
    container.innerHTML = '<div class="empty"><p>' +
      (prompts.length === 0 ? 'No library loaded.' : activeFilter === "Recent" ? "No recent prompts." : "No matches.") +
      '</p><p class="hint">' + hint + '</p></div>';
    return;
  }

  // Section label for Recent
  if (activeFilter === "Recent") {
    const label = document.createElement("div");
    label.className = "section-label";
    label.textContent = "Recently Used";
    container.appendChild(label);
  }

  // Pinned favorites at top (only in All view)
  if (activeFilter === "All" && !searchQuery) {
    const favs = filtered.filter(p => p.favorite);
    if (favs.length > 0) {
      const label = document.createElement("div");
      label.className = "section-label";
      label.textContent = "⚑ Pinned";
      container.appendChild(label);
      favs.forEach(p => renderCard(container, p));
      const allLabel = document.createElement("div");
      allLabel.className = "section-label";
      allLabel.textContent = "All Prompts";
      container.appendChild(allLabel);
      filtered.filter(p => !p.favorite).forEach(p => renderCard(container, p));
      return;
    }
  }

  filtered.forEach(p => renderCard(container, p));
}

function renderCard(container, p) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML =
    '<div class="card-header">' +
      '<span class="card-title">' + esc(p.name) + '</span>' +
      (p.favorite ? '<span class="card-fav">⚑</span>' : '') +
    '</div>' +
    '<div class="card-meta">' +
      '<span class="card-cat">' + esc(p.category || 'General') + '</span>' +
      (p.tags || []).slice(0, 3).map(t => '<span class="card-tag">' + esc(t) + '</span>').join('') +
    '</div>' +
    '<div class="card-body">' + esc((p.body || '').slice(0, 120)) + '</div>' +
    '<div class="card-footer">' +
      '<span class="card-date">' + esc(p.lastUsed || '') + '</span>' +
    '</div>';
  card.addEventListener("click", () => showPreview(p));
  container.appendChild(card);
}

function esc(s) { const el = document.createElement("span"); el.textContent = s || ""; return el.innerHTML; }

// ═══ PREVIEW ═══
function showPreview(prompt) {
  currentPrompt = prompt;
  document.getElementById("previewTitle").textContent = prompt.name;
  document.getElementById("previewCat").textContent = prompt.category || "General";
  const meta = [];
  if (prompt.lastUsed) meta.push("Last: " + prompt.lastUsed);
  if ((prompt.tags || []).length) meta.push(prompt.tags.join(", "));
  document.getElementById("previewMeta").innerHTML = meta.map(m => '<span>' + esc(m) + '</span>').join('');
  document.getElementById("previewPrompt").textContent = prompt.body || "";
  // Reset adapted section
  document.getElementById("adaptedSection").style.display = "none";
  document.getElementById("adaptedPrompt").textContent = "";
  document.getElementById("preview").classList.add("active");
}

function hidePreview() {
  document.getElementById("preview").classList.remove("active");
  currentPrompt = null;
}

// ═══ ACTIONS ═══
async function copyPrompt() {
  if (!currentPrompt) return;
  // Copy adapted version if available, otherwise original
  const adaptedEl = document.getElementById("adaptedPrompt");
  const text = (adaptedEl && adaptedEl.textContent) ? adaptedEl.textContent : (currentPrompt.body || "");
  await navigator.clipboard.writeText(text);
  await trackUsage(currentPrompt);
  toast("Copied!");
}

// ═══ LLM API ═══
async function callLLM(provider, systemPrompt, userPrompt, config) {
  if (provider === "grok" && config.grokKey) {
    const resp = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + config.grokKey },
      body: JSON.stringify({ model: "grok-3-mini-fast", messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userPrompt }], temperature: 0.7 })
    });
    const data = await resp.json();
    return data.choices[0].message.content;
  } else if (provider === "claude" && config.claudeKey) {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": config.claudeKey, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 4096, system: systemPrompt, messages: [{ role: "user", content: userPrompt }] })
    });
    const data = await resp.json();
    return data.content[0].text;
  } else if (provider === "openai" && config.openaiKey) {
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + config.openaiKey },
      body: JSON.stringify({ model: "gpt-4o", messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userPrompt }], temperature: 0.7 })
    });
    const data = await resp.json();
    return data.choices[0].message.content;
  } else if (provider === "gemini" && config.geminiKey) {
    const resp = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + config.geminiKey, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: system + "\n\n" + user }] }], generationConfig: { temperature: 0.7 } })
    });
    const data = await resp.json();
    return data.candidates[0].content.parts[0].text;
  } else if (provider === "venice" && config.veniceKey) {
    const resp = await fetch("https://api.venice.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + config.veniceKey },
      body: JSON.stringify({ model: "llama-3.3-70b", messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userPrompt }], temperature: 0.7 })
    });
    const data = await resp.json();
    return data.choices[0].message.content;
  }
  throw new Error("No API key configured for " + provider);
}

async function adaptToPage() {
  if (!currentPrompt) return;
  const config = await loadConfig();
  const provider = config.adapterModel || "grok";

  // Check if API key is configured
  const keyMap = { grok: config.grokKey, claude: config.claudeKey, openai: config.openaiKey, gemini: config.geminiKey, venice: config.veniceKey };
  if (!keyMap[provider]) {
    toast("No API key set for " + provider + " — configure in Settings");
    return;
  }

  // Show loading state
  const btn = document.getElementById("btnAdapt");
  const origText = btn.textContent;
  btn.textContent = "⏳ Adapting...";
  btn.style.opacity = "0.6";
  btn.style.pointerEvents = "none";

  try {
    // Scrape page context
    const stored = await chrome.storage.local.get("prompto_page_context");
    let ctx = stored.prompto_page_context;

    if (!ctx || Date.now() - ctx.timestamp > 300000) {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab) { toast("No active tab"); return; }
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => ({
          selection: window.getSelection().toString(),
          title: document.title,
          url: window.location.href,
          description: (document.querySelector('meta[name="description"]') || {}).content || "",
          body: document.body.innerText.slice(0, 4000)
        })
      });
      ctx = results[0].result;
    }

    // Build the adaptation request
    const systemPrompt = `You are a prompt engineering expert. Your job is to take a prompt template and intelligently adapt it based on the user's current context.

Rules:
- Preserve the original prompt's intent, structure, and tone
- Weave in specific, relevant details from the context naturally
- Replace any {{variables}} with appropriate values inferred from context
- Make the prompt immediately usable — the user should be able to paste it directly into an LLM
- Return ONLY the adapted prompt text, nothing else — no explanations, no preamble`;

    const contextSummary = [
      ctx.title ? 'Page: "' + ctx.title + '"' : '',
      ctx.url ? 'URL: ' + ctx.url : '',
      ctx.selection ? 'User selected text:\n' + ctx.selection.slice(0, 2000) : '',
      ctx.description ? 'Page description: ' + ctx.description : '',
      ctx.body ? 'Page content (excerpt):\n' + ctx.body.slice(0, 2500) : ''
    ].filter(Boolean).join('\n\n');

    const userPrompt = `## Original Prompt Template\n${currentPrompt.body}\n\n## Current Page Context\n${contextSummary}\n\nAdapt the prompt above using this context. Make it specific and ready to use. Return ONLY the adapted prompt.`;

    // Call LLM
    const adapted = await callLLM(provider, systemPrompt, userPrompt, config);

    // Show adapted version in the preview
    document.getElementById("adaptedPrompt").textContent = adapted;
    document.getElementById("adaptedSection").style.display = "";

    // Copy to clipboard
    await navigator.clipboard.writeText(adapted);
    await trackUsage(currentPrompt);

    // Clear captured context
    await chrome.storage.local.remove("prompto_page_context");
    document.getElementById("contextBanner").style.display = "none";

    toast("Adapted & copied!");

  } catch (e) {
    console.error("Prompto adapt error:", e);
    const msg = (e.message || "").toLowerCase();
    if (msg.includes("cannot access") || msg.includes("chrome://") || msg.includes("not be scripted") || msg.includes("permissions")) {
      toast("Can't read this page — open a regular webpage first");
    } else if (msg.includes("api key") || msg.includes("401") || msg.includes("403")) {
      toast("API key issue — check your key in Settings");
    } else if (msg.includes("fetch") || msg.includes("network") || msg.includes("failed to fetch")) {
      toast("Network error — check your connection");
    } else {
      toast("Adaptation failed — try on a different page");
    }
  } finally {
    btn.textContent = origText;
    btn.style.opacity = "";
    btn.style.pointerEvents = "";
  }
}

async function injectPrompt() {
  if (!currentPrompt) return;
  const config = await loadConfig();
  const customSelectors = (config.customSelectors || "").split("\n").map(s => s.trim()).filter(Boolean);
  // Use adapted version if available
  const adaptedEl = document.getElementById("adaptedPrompt");
  const textToInject = (adaptedEl && adaptedEl.textContent) ? adaptedEl.textContent : (currentPrompt.body || "");

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) { toast("No active tab"); return; }
  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (text, selectors) => {
        const allSelectors = [
          ...selectors,
          '#prompt-textarea',
          'textarea[data-id="root"]',
          'div.ProseMirror[contenteditable="true"]',
          'div.ql-editor[contenteditable="true"]',
          'textarea[placeholder*="Ask"]',
          'textarea[placeholder*="Message"]',
          'textarea[placeholder*="message"]',
          'textarea[placeholder*="Send"]',
          'textarea[placeholder*="Type"]',
          'textarea[placeholder*="Chat"]',
          'div[contenteditable="true"][role="textbox"]',
          'div[contenteditable="true"]',
          'textarea:not([readonly])',
        ];
        for (const sel of allSelectors) {
          try {
            const el = document.querySelector(sel);
            if (el && el.offsetParent !== null) {
              el.focus();
              if (el.tagName === "TEXTAREA" || el.tagName === "INPUT") {
                const proto = el.tagName === "TEXTAREA" ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
                const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
                if (setter) setter.call(el, text);
                else el.value = text;
                el.dispatchEvent(new Event('input', { bubbles: true }));
                el.dispatchEvent(new Event('change', { bubbles: true }));
              } else {
                el.innerHTML = '';
                el.appendChild(document.createTextNode(text));
                el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: text }));
              }
              el.focus();
              return true;
            }
          } catch (e) {}
        }
        return false;
      },
      args: [textToInject, customSelectors]
    });
    await trackUsage(currentPrompt);
    if (results[0]?.result) {
      toast("Injected!");
      window.close();
    } else {
      toast("No input found — copied instead");
      await navigator.clipboard.writeText(textToInject);
    }
  } catch (e) {
    toast("Can't inject on this page — prompt copied instead");
    await navigator.clipboard.writeText(textToInject);
  }
}

// ═══ SETTINGS ═══
function showSettings() {
  document.getElementById("settingsOverlay").classList.add("active");
  loadSettingsUI();
}
function hideSettings() { document.getElementById("settingsOverlay").classList.remove("active"); }

async function loadSettingsUI() {
  const config = await loadConfig();
  setRadioGroup("sourceType", config.sourceType);
  showSourcePanel(config.sourceType);
  setRadioGroup("themeSelect", config.theme);
  setRadioGroup("badgeToggle", String(config.showBadge));
  document.getElementById("cloudUrl").value = config.cloudUrl || "";
  document.getElementById("pasteJson").value = config.pasteJson || "";
  document.getElementById("refreshInterval").value = String(config.refreshInterval || 5);
  document.getElementById("customSelectors").value = config.customSelectors || "";
  // API keys
  setRadioGroup("adapterModel", config.adapterModel || "grok");
  document.getElementById("grokKey").value = config.grokKey || "";
  document.getElementById("claudeKey").value = config.claudeKey || "";
  document.getElementById("openaiKey").value = config.openaiKey || "";
  document.getElementById("geminiKey").value = config.geminiKey || "";
  document.getElementById("veniceKey").value = config.veniceKey || "";
  if (dirHandle) {
    document.getElementById("folderPath").textContent = "✓ Folder: " + dirHandle.name;
  } else {
    const sf = await chrome.storage.local.get("prompto_local_filename");
    if (sf.prompto_local_filename) document.getElementById("folderPath").textContent = "✓ File: " + sf.prompto_local_filename;
  }
  // OS-aware path hint
  const hintEl = document.getElementById("pathHint");
  if (hintEl) {
    const plat = navigator.platform || navigator.userAgentData?.platform || "";
    let path;
    if (plat.startsWith("Win")) {
      path = "C:\\Users\\YourName\\Documents\\YourVault\\Prompto Library\\prompto-library.json";
    } else if (plat.startsWith("Mac") || plat.startsWith("iP")) {
      path = "~/Documents/YourVault/Prompto Library/prompto-library.json";
    } else {
      path = "~/Documents/YourVault/Prompto Library/prompto-library.json";
    }
    hintEl.textContent = "📍 Look here: " + path;
  }
}

function showSourcePanel(type) {
  document.getElementById("localSetting").style.display = type === "local" ? "" : "none";
  document.getElementById("cloudSetting").style.display = type === "cloud" ? "" : "none";
  document.getElementById("pasteSetting").style.display = type === "paste" ? "" : "none";
}

function setRadioGroup(id, value) {
  document.querySelectorAll("#" + id + " .radio-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.value === value);
  });
}
function getRadioValue(id) {
  return document.querySelector("#" + id + " .radio-btn.active")?.dataset.value;
}

async function saveSettingsAndReload() {
  const config = {
    sourceType: getRadioValue("sourceType") || "local",
    cloudUrl: document.getElementById("cloudUrl").value.trim(),
    pasteJson: document.getElementById("pasteJson").value.trim(),
    refreshInterval: parseInt(document.getElementById("refreshInterval").value) || 5,
    theme: getRadioValue("themeSelect") || "system",
    showBadge: getRadioValue("badgeToggle") === "true",
    customSelectors: document.getElementById("customSelectors").value,
    adapterModel: getRadioValue("adapterModel") || "grok",
    grokKey: document.getElementById("grokKey").value.trim(),
    claudeKey: document.getElementById("claudeKey").value.trim(),
    openaiKey: document.getElementById("openaiKey").value.trim(),
    geminiKey: document.getElementById("geminiKey").value.trim(),
    veniceKey: document.getElementById("veniceKey").value.trim(),
    onboarded: true,
  };
  await saveConfig(config);
  applyTheme(config.theme);
  if (!config.showBadge) chrome.runtime.sendMessage({ type: "updateBadge", count: 0 });
  toast("Saved!");
  hideSettings();
  await loadLibrary();
}

// ═══ EXPORT / IMPORT CONFIG ═══
async function exportConfig() {
  const config = await loadConfig();
  const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "prompto-settings.json";
  a.click(); URL.revokeObjectURL(url);
  toast("Settings exported!");
}

async function importConfig(file) {
  try {
    const text = await file.text();
    const config = JSON.parse(text);
    await saveConfig(Object.assign({}, DEFAULT_CONFIG, config));
    toast("Settings imported!");
    await loadSettingsUI();
    await loadLibrary();
  } catch (e) { toast("Invalid settings file"); }
}

async function resetConfig() {
  if (!confirm("Reset all Prompto settings? This cannot be undone.")) return;
  await saveConfig(DEFAULT_CONFIG);
  dirHandle = null;
  localJsonData = null;
  await chrome.storage.local.remove(["prompto_local_json", "prompto_local_filename"]);
  try { const db = await openDB(); const tx = db.transaction("handles", "readwrite"); tx.objectStore("handles").clear(); } catch (e) {}
  chrome.runtime.sendMessage({ type: "updateBadge", count: 0 });
  toast("Reset complete");
  await loadSettingsUI();
  await loadLibrary();
}

// ═══ INIT ═══
document.addEventListener("DOMContentLoaded", async () => {
  // Restore dir handle
  try { const stored = await getStoredHandle(); if (stored) dirHandle = stored; } catch (e) {}

  // Load config and apply theme
  const config = await loadConfig();
  applyTheme(config.theme);
  await loadRecentlyUsed();

  // Onboarding check
  const isNew = await checkOnboarding();
  if (!isNew) await loadLibrary();

  // Check for captured context
  await checkCapturedContext();

  // ═══ EVENT LISTENERS ═══

  // Search
  document.getElementById("search").addEventListener("input", e => {
    searchQuery = e.target.value;
    applyFilters(); renderCards();
  });

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      document.getElementById("catSelect").value = "";
      applyFilters(); renderCards();
    });
  });

  // Category dropdown
  document.getElementById("catSelect").addEventListener("change", e => {
    const v = e.target.value;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    if (v) activeFilter = v;
    else { activeFilter = "All"; document.querySelector('.filter-btn[data-filter="All"]').classList.add("active"); }
    applyFilters(); renderCards();
  });

  // Preview
  document.getElementById("previewBack").addEventListener("click", hidePreview);
  document.getElementById("btnCopy").addEventListener("click", copyPrompt);
  document.getElementById("btnAdapt").addEventListener("click", adaptToPage);
  document.getElementById("btnInject").addEventListener("click", injectPrompt);

  // Settings
  document.getElementById("openSettings").addEventListener("click", showSettings);
  document.getElementById("settingsBack").addEventListener("click", hideSettings);
  document.getElementById("pickFolder").addEventListener("click", pickLocalFolder);
  document.getElementById("saveSettings").addEventListener("click", saveSettingsAndReload);
  document.getElementById("exportConfig").addEventListener("click", exportConfig);
  document.getElementById("importConfig").addEventListener("change", e => {
    if (e.target.files[0]) importConfig(e.target.files[0]);
  });
  document.getElementById("resetConfig").addEventListener("click", resetConfig);
  document.getElementById("openShortcuts")?.addEventListener("click", () => {
    chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
  });

  // Source type radios in settings
  document.querySelectorAll("#sourceType .radio-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setRadioGroup("sourceType", btn.dataset.value);
      showSourcePanel(btn.dataset.value);
    });
  });
  // Theme radios
  document.querySelectorAll("#themeSelect .radio-btn").forEach(btn => {
    btn.addEventListener("click", () => setRadioGroup("themeSelect", btn.dataset.value));
  });
  // Badge radios
  document.querySelectorAll("#badgeToggle .radio-btn").forEach(btn => {
    btn.addEventListener("click", () => setRadioGroup("badgeToggle", btn.dataset.value));
  });
  // Adapter model radios
  document.querySelectorAll("#adapterModel .radio-btn").forEach(btn => {
    btn.addEventListener("click", () => setRadioGroup("adapterModel", btn.dataset.value));
  });

  // Theme toggle button (quick toggle)
  document.getElementById("toggleTheme").addEventListener("click", async () => {
    const cfg = await loadConfig();
    const next = cfg.theme === "dark" ? "light" : cfg.theme === "light" ? "system" : "dark";
    cfg.theme = next;
    await saveConfig(cfg);
    applyTheme(next);
    toast("Theme: " + next);
  });

  // Side panel button
  document.getElementById("openSidePanel").addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "openSidePanel" });
  });

  // Context banner clear
  document.getElementById("clearContext").addEventListener("click", async () => {
    await chrome.storage.local.remove("prompto_page_context");
    document.getElementById("contextBanner").style.display = "none";
  });

  // Source row connect
  document.getElementById("sourceAction").addEventListener("click", () => {
    if (prompts.length > 0) loadLibrary(); else showSettings();
  });

  // Onboarding buttons
  document.getElementById("onboardLocal").addEventListener("click", () => finishOnboarding("local"));
  document.getElementById("onboardCloud").addEventListener("click", () => finishOnboarding("cloud"));
  document.getElementById("onboardPaste").addEventListener("click", () => finishOnboarding("paste"));
  document.getElementById("onboardSkip").addEventListener("click", () => finishOnboarding(null));

  // Auto-refresh
  if (config.refreshInterval > 0) {
    setInterval(() => loadLibrary(), config.refreshInterval * 60 * 1000);
  }
});
