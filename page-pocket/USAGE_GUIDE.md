# 📘 Page Pocket - Complete Usage Guide

## Table of Contents
1. [Installation](#installation)
2. [First Time Setup](#first-time-setup)
3. [Saving Your First Link](#saving-your-first-link)
4. [Using the Vault](#using-the-vault)
5. [Advanced Features](#advanced-features)
6. [Troubleshooting](#troubleshooting)

---

## Installation

### Step-by-Step Installation Guide

1. **Navigate to Chrome Extensions**
   - Open Google Chrome
   - Type `chrome://extensions/` in the address bar
   - Press Enter

2. **Enable Developer Mode**
   - Look for the "Developer mode" toggle in the top-right corner
   - Click to enable it

3. **Load the Extension**
   - Click the "Load unpacked" button that appears
   - Navigate to the `page-pocket` folder
   - Click "Select Folder"

4. **Verify Installation**
   - You should see the Page Pocket extension card
   - Look for the purple icon in your Chrome toolbar
   - Pin the extension for easy access (click the puzzle icon, then pin)

---

## First Time Setup

When you first install Page Pocket:

1. The vault page will automatically open
2. You'll see an empty state with a message: "No Links Saved Yet"
3. The extension is now ready to use!

**No configuration needed** - Page Pocket works out of the box!

---

## Saving Your First Link

### Quick Save (Recommended)

1. **Visit a webpage** you want to save (e.g., a blog post, article, or resource)
2. **Click the Page Pocket icon** in your toolbar
   - Or use the keyboard shortcut: `Ctrl+Shift+S` (Windows/Linux) or `Cmd+Shift+S` (Mac)
3. **Review the information:**
   - Title: Pre-filled with the page title (you can edit it)
   - URL: Automatically captured (read-only)
4. **Add tags** (optional but recommended):
   - Example: `tutorial, javascript, reference`
   - Separate multiple tags with commas
   - Tags help you organize and find links later
5. **Click "Save Page"**
6. Success! You'll see a confirmation message

### What Happens After Saving?

- The popup closes automatically after 1 second
- Your link is saved to local storage
- You can continue browsing

---

## Using the Vault

The Vault is your personal link library. Access it in two ways:
- Click "View Vault" button in the popup
- Right-click the extension icon → Click "View Vault"

### Vault Overview

**Top Section - Statistics**
- **Total Links**: Count of all saved links
- **Unique Tags**: Count of different tags you've used

**Middle Section - Controls**
- **Search Box**: Type to filter links in real-time
- **Sort Dropdown**: Choose "Newest First" or "Oldest First"

**Bottom Section - Link Cards**
Each card shows:
- Clickable title (opens link in new tab)
- Full URL
- Tags (clickable to filter)
- Creation date and time
- Delete button

### Using the Search Feature

The search feature is **real-time** and searches across:
- Page titles
- URLs
- Tags

**Search Examples:**
- Type `javascript` to find all JavaScript-related links
- Type `work` to find work-related content
- Type a URL fragment to find specific sites

**Search Tips:**
- Search is case-insensitive
- Partial matches work (e.g., "java" matches "javascript")
- Click any tag to instantly filter by that tag

### Sorting Links

Use the sort dropdown to change the order:
- **Newest First** (default): Most recently saved links appear first
- **Oldest First**: Your earliest saved links appear first

---

## Advanced Features

### Keyboard Shortcuts

**In the Popup:**
- `Ctrl/Cmd + Enter`: Quick save (no need to click the button)
- `Escape`: Close the popup

**In the Vault:**
- `Ctrl/Cmd + F`: Focus the search box
- `Escape` (when search is focused): Clear search

### Organizing with Tags

**Best Practices:**
- Use consistent tag names (e.g., always use "js" or always use "javascript", not both)
- Create tags by category:
  - Topics: `tutorial`, `article`, `documentation`
  - Priority: `important`, `urgent`, `reference`
  - Projects: `project-a`, `work`, `personal`
  - Tech: `javascript`, `python`, `design`

**Tag Tips:**
- Tags are case-sensitive in display but search is case-insensitive
- No special characters in tags
- Keep tags short (1-2 words)
- Aim for 3-5 tags per link

### Working with Link Cards

**Opening Links:**
- Click the title to open in a new tab
- The original tab stays open

**Quick Tag Filtering:**
- Click any tag on a link card
- The search automatically filters to that tag
- Clear the search to see all links again

**Deleting Links:**
- Click the "Delete" button on any card
- Confirm the deletion in the popup
- The link is permanently removed

---

## Troubleshooting

### Extension Not Appearing

**Problem:** Extension icon doesn't show in toolbar  
**Solution:**
- Click the puzzle icon in the toolbar
- Find "Page Pocket"
- Click the pin icon to pin it to your toolbar

### Can't Save a Link

**Problem:** "Save Page" button doesn't work  
**Solutions:**
1. Check that you're on a valid webpage (not chrome:// pages)
2. Make sure the title field is not empty
3. Try reloading the extension:
   - Go to `chrome://extensions/`
   - Find Page Pocket
   - Click the refresh icon

### Links Not Appearing in Vault

**Problem:** Saved links don't show in the vault  
**Solutions:**
1. Refresh the vault page (F5)
2. Check if a search filter is active (clear the search box)
3. Verify the link was actually saved (you should have seen a confirmation)

### Search Not Working

**Problem:** Search doesn't filter links  
**Solutions:**
1. Make sure you're typing in the search box (not the browser's search)
2. Check your search term for typos
3. Try a simpler search term
4. Refresh the vault page

### Storage Issues

**Problem:** Error saving links or "Storage failure"  
**Solutions:**
1. Check Chrome storage:
   - Go to `chrome://extensions/`
   - Enable Developer mode
   - Click "Background page" or "Service worker" for Page Pocket
   - Check the console for errors
2. Clear extension data (WARNING: This deletes all saved links):
   - Right-click extension icon → Manage extension
   - Scroll to "Site settings"
   - Clear data

### Data Not Syncing

**Note:** Page Pocket currently uses **local storage only**. Data is stored on your device and does not sync across browsers or devices. Cloud sync is planned for a future version.

---

## Tips for Power Users

### Bulk Organization

Since Page Pocket doesn't have bulk operations yet:
1. Use consistent tagging from the start
2. Use the search to find similar links
3. Consider exporting data periodically (feature coming soon)

### Backup Your Data

To manually backup your saved links:
1. Go to `chrome://extensions/`
2. Enable Developer mode
3. Click "Background page" for Page Pocket
4. In the console, type: `chrome.storage.local.get('page_pocket_links', console.log)`
5. Copy the output to save your data

### Tag Strategy Examples

**For Developers:**
- `docs`, `tutorial`, `stackoverflow`, `github`
- `frontend`, `backend`, `devops`
- `bug`, `feature`, `research`

**For Students:**
- `assignment`, `reference`, `study`
- `math`, `science`, `history`
- `video`, `article`, `paper`

**For Researchers:**
- `paper`, `study`, `dataset`
- `methodology`, `results`, `review`
- `cite`, `read-later`, `important`

---

## Getting Help

If you encounter issues not covered in this guide:

1. Check the main [README.md](README.md) for technical details
2. Review the extension's console logs for error messages
3. Try uninstalling and reinstalling the extension
4. Open an issue on the GitHub repository

---

## What's Next?

Check out the [Roadmap](README.md#-roadmap) in the README for upcoming features:
- Export/Import functionality
- Dark mode
- Cloud sync
- And more!

---

**Happy organizing! 📌✨**
