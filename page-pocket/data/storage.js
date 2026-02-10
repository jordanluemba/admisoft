/**
 * Storage Module - Data Layer for Page Pocket
 * Handles all interactions with chrome.storage.local
 */

const STORAGE_KEY = 'page_pocket_links';

/**
 * Get all saved links from storage
 * @returns {Promise<Array>} Array of link objects
 */
async function getLinks() {
  try {
    const result = await chrome.storage.local.get([STORAGE_KEY]);
    return result[STORAGE_KEY] || [];
  } catch (error) {
    console.error('Error getting links:', error);
    return [];
  }
}

/**
 * Save a new link to storage
 * @param {Object} link - Link object to save
 * @returns {Promise<boolean>} Success status
 */
async function saveLink(link) {
  try {
    const links = await getLinks();
    links.push(link);
    await chrome.storage.local.set({ [STORAGE_KEY]: links });
    return true;
  } catch (error) {
    console.error('Error saving link:', error);
    return false;
  }
}

/**
 * Delete a link by ID
 * @param {string} id - Link ID to delete
 * @returns {Promise<boolean>} Success status
 */
async function deleteLink(id) {
  try {
    const links = await getLinks();
    const filteredLinks = links.filter(link => link.id !== id);
    await chrome.storage.local.set({ [STORAGE_KEY]: filteredLinks });
    return true;
  } catch (error) {
    console.error('Error deleting link:', error);
    return false;
  }
}

/**
 * Update an existing link
 * @param {Object} updatedLink - Updated link object
 * @returns {Promise<boolean>} Success status
 */
async function updateLink(updatedLink) {
  try {
    const links = await getLinks();
    const index = links.findIndex(link => link.id === updatedLink.id);
    if (index !== -1) {
      links[index] = updatedLink;
      await chrome.storage.local.set({ [STORAGE_KEY]: links });
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error updating link:', error);
    return false;
  }
}

/**
 * Search links by query (title or tags)
 * @param {string} query - Search query
 * @returns {Promise<Array>} Filtered array of links
 */
async function searchLinks(query) {
  try {
    const links = await getLinks();
    if (!query || query.trim() === '') {
      return links;
    }

    const searchTerm = query.toLowerCase().trim();
    return links.filter(link => {
      const titleMatch = link.title.toLowerCase().includes(searchTerm);
      const tagMatch = link.tags.some(tag => 
        tag.toLowerCase().includes(searchTerm)
      );
      const urlMatch = link.url.toLowerCase().includes(searchTerm);
      return titleMatch || tagMatch || urlMatch;
    });
  } catch (error) {
    console.error('Error searching links:', error);
    return [];
  }
}

/**
 * Export all storage functions
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getLinks,
    saveLink,
    deleteLink,
    updateLink,
    searchLinks
  };
}
