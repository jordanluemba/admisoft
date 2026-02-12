/**
 * Utility Functions for Page Pocket
 * Reusable helper functions
 */

/**
 * Generate a unique ID
 * @returns {string} Unique identifier
 */
function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Format date to readable string
 * @param {string} isoDate - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Parse tags from comma-separated string
 * @param {string} tagsString - Comma-separated tags
 * @returns {Array<string>} Array of unique, trimmed tags
 */
function parseTags(tagsString) {
  if (!tagsString || tagsString.trim() === '') {
    return [];
  }

  return tagsString
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0)
    .filter((tag, index, self) => self.indexOf(tag) === index); // Remove duplicates
}

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL
 */
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Sanitize string input to prevent XSS
 * @param {string} str - String to sanitize
 * @returns {string} Sanitized string
 */
function sanitizeInput(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
function truncateText(text, maxLength = 50) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
}

/**
 * Sort links by date
 * @param {Array} links - Array of link objects
 * @param {string} order - 'newest' or 'oldest'
 * @returns {Array} Sorted array
 */
function sortLinks(links, order = 'newest') {
  return [...links].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return order === 'newest' ? dateB - dateA : dateA - dateB;
  });
}

/**
 * Show notification (if supported)
 * @param {string} message - Notification message
 */
function showNotification(message) {
  // For popup/vault pages - simple alert or toast
  console.log('Notification:', message);
}

/**
 * Export all utility functions
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateId,
    formatDate,
    parseTags,
    isValidUrl,
    sanitizeInput,
    truncateText,
    sortLinks,
    showNotification
  };
}
