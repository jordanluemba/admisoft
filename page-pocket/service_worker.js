/**
 * Service Worker - Background script for Page Pocket
 * Handles installation and background tasks
 */

/**
 * Extension installation handler
 */
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Page Pocket installed successfully');
    
    // Open welcome page or vault on first install
    chrome.tabs.create({ 
      url: chrome.runtime.getURL('vault.html')
    });
  } else if (details.reason === 'update') {
    console.log('Page Pocket updated');
  }
});

/**
 * Extension icon click handler
 * This is redundant with action.default_popup but kept for completeness
 */
chrome.action.onClicked.addListener((tab) => {
  // This won't fire if default_popup is set, but kept for future use
  console.log('Extension icon clicked', tab);
});

/**
 * Context menu item (optional future feature)
 * Uncomment to enable right-click save
 */
/*
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'savePage',
    title: 'Save to Page Pocket',
    contexts: ['page', 'link']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'savePage') {
    // Handle context menu save
    const url = info.linkUrl || tab.url;
    const title = info.selectionText || tab.title;
    
    // Send message to popup or save directly
    console.log('Save from context menu:', url, title);
  }
});
*/

/**
 * Message handler for communication with popup/vault
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getTabInfo') {
    // Get current tab information
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        sendResponse({
          title: tabs[0].title,
          url: tabs[0].url
        });
      }
    });
    return true; // Keep channel open for async response
  }
  
  if (request.action === 'notification') {
    // Show notification (if needed)
    console.log('Notification:', request.message);
  }
});

console.log('Page Pocket service worker loaded');
