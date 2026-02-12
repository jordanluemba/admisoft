/**
 * Popup Script - Main logic for saving pages
 */

// DOM Elements
const saveForm = document.getElementById('saveForm');
const pageTitleInput = document.getElementById('pageTitle');
const pageUrlInput = document.getElementById('pageUrl');
const pageTagsInput = document.getElementById('pageTags');
const saveBtn = document.getElementById('saveBtn');
const viewVaultBtn = document.getElementById('viewVaultBtn');
const messageArea = document.getElementById('messageArea');

/**
 * Initialize popup when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Get current tab information
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (tab) {
      pageTitleInput.value = tab.title || '';
      pageUrlInput.value = tab.url || '';
    }

    // Focus on title input
    pageTitleInput.focus();
    pageTitleInput.select();
  } catch (error) {
    console.error('Error initializing popup:', error);
    showMessage('Error loading page information', 'error');
  }
});

/**
 * Handle form submission
 */
saveForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Disable button while saving
  saveBtn.disabled = true;
  saveBtn.textContent = '💾 Saving...';

  try {
    // Get form values
    const title = pageTitleInput.value.trim();
    const url = pageUrlInput.value.trim();
    const tagsString = pageTagsInput.value.trim();

    // Validate inputs
    if (!title || !url) {
      showMessage('Please fill in all required fields', 'error');
      saveBtn.disabled = false;
      saveBtn.textContent = '💾 Save Page';
      return;
    }

    if (!isValidUrl(url)) {
      showMessage('Please enter a valid URL', 'error');
      saveBtn.disabled = false;
      saveBtn.textContent = '💾 Save Page';
      return;
    }

    // Parse tags
    const tags = parseTags(tagsString);

    // Create link object
    const link = {
      id: generateId(),
      title: sanitizeInput(title),
      url: url,
      tags: tags,
      createdAt: new Date().toISOString()
    };

    // Save to storage
    const success = await saveLink(link);

    if (success) {
      showMessage('✅ Page saved successfully!', 'success');
      
      // Clear form
      pageTagsInput.value = '';
      
      // Close popup after 1 second
      setTimeout(() => {
        window.close();
      }, 1000);
    } else {
      showMessage('Failed to save page. Please try again.', 'error');
      saveBtn.disabled = false;
      saveBtn.textContent = '💾 Save Page';
    }
  } catch (error) {
    console.error('Error saving page:', error);
    showMessage('An error occurred while saving', 'error');
    saveBtn.disabled = false;
    saveBtn.textContent = '💾 Save Page';
  }
});

/**
 * Handle view vault button click
 */
viewVaultBtn.addEventListener('click', () => {
  chrome.tabs.create({ url: chrome.runtime.getURL('vault.html') });
  window.close();
});

/**
 * Show message to user
 * @param {string} message - Message text
 * @param {string} type - Message type ('success' or 'error')
 */
function showMessage(message, type = 'success') {
  messageArea.innerHTML = '';
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message-${type}`;
  messageDiv.textContent = message;
  
  messageArea.appendChild(messageDiv);

  // Auto-hide success messages after 3 seconds
  if (type === 'success') {
    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  }
}

/**
 * Handle keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + Enter to save
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    saveForm.dispatchEvent(new Event('submit'));
  }
  
  // Escape to close popup
  if (e.key === 'Escape') {
    window.close();
  }
});
