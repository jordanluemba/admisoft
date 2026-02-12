/**
 * Vault Script - Main logic for displaying and managing saved links
 */

// DOM Elements
const linksContainer = document.getElementById('linksContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const totalLinksEl = document.getElementById('totalLinks');
const totalTagsEl = document.getElementById('totalTags');

// State
let allLinks = [];
let currentSort = 'newest';
let currentSearchQuery = '';

/**
 * Initialize vault when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', async () => {
  await loadLinks();
  setupEventListeners();
});

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Search input with debouncing
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    currentSearchQuery = e.target.value;
    searchTimeout = setTimeout(() => {
      filterAndDisplayLinks();
    }, 300);
  });

  // Sort select
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    filterAndDisplayLinks();
  });

  // Listen for storage changes (if links are added from popup)
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.page_pocket_links) {
      loadLinks();
    }
  });
}

/**
 * Load all links from storage
 */
async function loadLinks() {
  try {
    allLinks = await getLinks();
    updateStats();
    filterAndDisplayLinks();
  } catch (error) {
    console.error('Error loading links:', error);
    showEmptyState('Error loading links. Please refresh the page.');
  }
}

/**
 * Filter and display links based on search and sort
 */
async function filterAndDisplayLinks() {
  let filteredLinks = allLinks;

  // Apply search filter
  if (currentSearchQuery.trim() !== '') {
    filteredLinks = await searchLinks(currentSearchQuery);
  }

  // Apply sort
  filteredLinks = sortLinks(filteredLinks, currentSort);

  // Display links
  displayLinks(filteredLinks);
}

/**
 * Display links in the grid
 * @param {Array} links - Array of link objects to display
 */
function displayLinks(links) {
  linksContainer.innerHTML = '';

  if (links.length === 0) {
    showEmptyState();
    return;
  }

  const linksGrid = document.createElement('div');
  linksGrid.className = 'links-grid';

  links.forEach(link => {
    const linkCard = createLinkCard(link);
    linksGrid.appendChild(linkCard);
  });

  linksContainer.appendChild(linksGrid);
}

/**
 * Create a link card element
 * @param {Object} link - Link object
 * @returns {HTMLElement} Link card element
 */
function createLinkCard(link) {
  const card = document.createElement('div');
  card.className = 'link-card';
  card.dataset.linkId = link.id;

  // Header with title and delete button
  const header = document.createElement('div');
  header.className = 'link-header';

  const title = document.createElement('a');
  title.className = 'link-title';
  title.href = link.url;
  title.target = '_blank';
  title.rel = 'noopener noreferrer';
  title.textContent = link.title;
  title.onclick = (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: link.url });
  };

  header.appendChild(title);

  // URL
  const url = document.createElement('div');
  url.className = 'link-url';
  url.textContent = truncateText(link.url, 60);
  url.title = link.url;

  // Tags
  const tagsContainer = document.createElement('div');
  tagsContainer.className = 'link-tags';

  if (link.tags && link.tags.length > 0) {
    link.tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.className = 'tag';
      tagEl.textContent = tag;
      tagEl.onclick = () => {
        searchInput.value = tag;
        currentSearchQuery = tag;
        filterAndDisplayLinks();
      };
      tagEl.style.cursor = 'pointer';
      tagEl.title = `Search for "${tag}"`;
      tagsContainer.appendChild(tagEl);
    });
  }

  // Footer with date and delete button
  const footer = document.createElement('div');
  footer.className = 'link-footer';

  const date = document.createElement('span');
  date.className = 'link-date';
  date.textContent = formatDate(link.createdAt);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn-delete';
  deleteBtn.textContent = '🗑️ Delete';
  deleteBtn.onclick = () => handleDelete(link.id);

  footer.appendChild(date);
  footer.appendChild(deleteBtn);

  // Assemble card
  card.appendChild(header);
  card.appendChild(url);
  card.appendChild(tagsContainer);
  card.appendChild(footer);

  return card;
}

/**
 * Handle link deletion
 * @param {string} id - Link ID to delete
 */
async function handleDelete(id) {
  if (!confirm('Are you sure you want to delete this link?')) {
    return;
  }

  try {
    const success = await deleteLink(id);
    
    if (success) {
      // Update local state
      allLinks = allLinks.filter(link => link.id !== id);
      updateStats();
      filterAndDisplayLinks();
      
      // Show brief success message
      showToast('Link deleted successfully');
    } else {
      showToast('Failed to delete link', 'error');
    }
  } catch (error) {
    console.error('Error deleting link:', error);
    showToast('Error deleting link', 'error');
  }
}

/**
 * Show empty state
 * @param {string} message - Optional custom message
 */
function showEmptyState(message) {
  linksContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">📭</div>
      <h3>${message || 'No Links Saved Yet'}</h3>
      <p>
        ${message ? '' : 'Start saving your favorite pages by clicking the extension icon on any webpage.'}
      </p>
    </div>
  `;
}

/**
 * Update statistics
 */
function updateStats() {
  totalLinksEl.textContent = allLinks.length;

  // Calculate unique tags
  const uniqueTags = new Set();
  allLinks.forEach(link => {
    if (link.tags) {
      link.tags.forEach(tag => uniqueTags.add(tag));
    }
  });
  totalTagsEl.textContent = uniqueTags.size;
}

/**
 * Show toast notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type
 */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `message message-${type}`;
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.top = '20px';
  toast.style.right = '20px';
  toast.style.zIndex = '1000';
  toast.style.minWidth = '250px';
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

/**
 * Handle keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
  // Focus search with Ctrl/Cmd + F
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    e.preventDefault();
    searchInput.focus();
  }
  
  // Clear search with Escape
  if (e.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    currentSearchQuery = '';
    filterAndDisplayLinks();
  }
});
