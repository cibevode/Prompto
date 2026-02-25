/* Prompto Chrome Extension — background.js (service worker)
   Context menus, badge, keyboard shortcuts, side panel registration */

// ═══ CONTEXT MENU ═══
chrome.runtime.onInstalled.addListener(() => {
  // Right-click context menu on selected text
  chrome.contextMenus.create({
    id: "prompto-send-selection",
    title: 'Prompto: Copy selection as context',
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "prompto-open",
    title: "Open Prompto",
    contexts: ["action"]
  });

  // Enable side panel if supported
  if (chrome.sidePanel) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: false }).catch(() => {});
  }

  console.log("Prompto: Extension installed");
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "prompto-send-selection" && info.selectionText) {
    // Store selected text for use in popup
    await chrome.storage.local.set({
      prompto_page_context: {
        selection: info.selectionText,
        url: info.pageUrl || "",
        title: tab?.title || "",
        timestamp: Date.now()
      }
    });
    // Open popup (can't programmatically, so show notification)
    // Badge flash to indicate capture
    chrome.action.setBadgeText({ text: "✓" });
    chrome.action.setBadgeBackgroundColor({ color: "#40c080" });
    setTimeout(() => {
      chrome.storage.local.get("prompto_config", (data) => {
        const count = data.prompto_prompt_count || "";
        chrome.action.setBadgeText({ text: count ? String(count) : "" });
        chrome.action.setBadgeBackgroundColor({ color: "#7c5bf0" });
      });
    }, 2000);
  }
});

// ═══ KEYBOARD COMMANDS ═══
chrome.commands.onCommand.addListener(async (command) => {
  if (command === "quick-copy-last") {
    // Get last used prompt from storage and copy to clipboard
    const data = await chrome.storage.local.get("prompto_last_used");
    if (data.prompto_last_used) {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (text) => { navigator.clipboard.writeText(text); },
          args: [data.prompto_last_used.body || ""]
        });
        chrome.action.setBadgeText({ text: "📋" });
        chrome.action.setBadgeBackgroundColor({ color: "#7c5bf0" });
        setTimeout(() => {
          chrome.action.setBadgeText({ text: "" });
        }, 1500);
      }
    }
  }
});

// ═══ MESSAGES FROM POPUP ═══
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "updateBadge") {
    chrome.action.setBadgeText({ text: msg.count > 0 ? String(msg.count) : "" });
    chrome.action.setBadgeBackgroundColor({ color: "#7c5bf0" });
    // Store count for later
    chrome.storage.local.set({ prompto_prompt_count: msg.count });
  }
  if (msg.type === "setLastUsed") {
    chrome.storage.local.set({ prompto_last_used: msg.prompt });
  }
  if (msg.type === "openSidePanel") {
    if (chrome.sidePanel) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) chrome.sidePanel.open({ windowId: tabs[0].windowId }).catch(() => {});
      });
    }
  }
});
