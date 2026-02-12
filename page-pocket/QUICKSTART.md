# 🚀 Quick Start Guide - Page Pocket

## Load Extension in 60 Seconds

### 1. Open Chrome Extensions Page
```
chrome://extensions/
```
Paste this in your Chrome address bar and press Enter.

### 2. Enable Developer Mode
Toggle the switch in the **top-right corner**.

### 3. Load Extension
1. Click **"Load unpacked"** button
2. Navigate to and select the `page-pocket` folder
3. Done! ✅

---

## Test the Extension (5-Minute Walkthrough)

### Test 1: Save Your First Link ⏱️ 30 seconds

1. Visit any website (e.g., https://github.com)
2. Click the **Page Pocket icon** (purple icon in toolbar)
3. Add some tags: `test, github, code`
4. Click **"Save Page"**
5. ✅ You should see a success message

### Test 2: View Your Vault ⏱️ 1 minute

1. In the popup, click **"View Vault"**
2. ✅ You should see:
   - Statistics showing 1 link, 3 tags
   - Your saved link displayed as a card
   - The clickable title, URL, and tags

### Test 3: Search Functionality ⏱️ 30 seconds

1. In the vault, type `github` in the search box
2. ✅ Your link should remain visible
3. Type `xyz123` (something that doesn't exist)
4. ✅ You should see "No Links Saved Yet" (empty state)
5. Clear the search
6. ✅ Your link should reappear

### Test 4: Tag Filtering ⏱️ 30 seconds

1. Click one of the tags (e.g., `test`)
2. ✅ The search box should auto-fill with that tag
3. ✅ Only links with that tag should display

### Test 5: Sorting ⏱️ 15 seconds

1. Use the sort dropdown
2. Switch between "Newest First" and "Oldest First"
3. ✅ The order should change (you'll see this better with multiple links)

### Test 6: Save Multiple Links ⏱️ 1 minute

1. Visit 2-3 different websites
2. Save each one with different tags
3. Go back to the vault
4. ✅ You should see:
   - Updated statistics (3-4 links)
   - All your saved links
   - Multiple tags

### Test 7: Delete a Link ⏱️ 30 seconds

1. In the vault, click **"Delete"** on any link
2. Confirm the deletion
3. ✅ The link should disappear
4. ✅ Statistics should update

### Test 8: Keyboard Shortcuts ⏱️ 30 seconds

1. Visit any website
2. Press `Ctrl+Shift+S` (or `Cmd+Shift+S` on Mac)
3. ✅ The popup should open
4. Add a title and tags
5. Press `Ctrl+Enter` (or `Cmd+Enter`)
6. ✅ The link should be saved

---

## Expected Behavior Checklist

After completing the tests, verify:

- [ ] Extension icon appears in toolbar
- [ ] Popup opens when clicking icon
- [ ] Page title and URL auto-populate
- [ ] Can add custom tags
- [ ] Links save successfully
- [ ] Vault displays all saved links
- [ ] Search filters work in real-time
- [ ] Clicking tags filters results
- [ ] Sort changes link order
- [ ] Delete removes links (with confirmation)
- [ ] Statistics update correctly
- [ ] Keyboard shortcuts work
- [ ] No console errors (press F12 to check)

---

## Common First-Time Issues

### Extension Not Loading?
- Make sure you selected the `page-pocket` **folder**, not a file
- Check that `manifest.json` is in the root of the folder
- Look for error messages on the extensions page

### Icon Not Showing?
- Click the puzzle piece icon in Chrome toolbar
- Find "Page Pocket" and click the pin icon

### Can't Save Links?
- Make sure you're on a valid webpage (not chrome:// or about: pages)
- Check the browser console for errors (F12 → Console tab)

### Vault Not Opening?
- Right-click the extension icon
- Look for errors in the extension's service worker console

---

## Performance Check

The extension should be:
- ⚡ **Fast**: Popup opens instantly
- 💾 **Lightweight**: Uses minimal memory
- 🎨 **Smooth**: Animations are fluid
- 📱 **Responsive**: Works at any window size

---

## Next Steps

Once you've verified everything works:

1. ✅ Read the full [README.md](README.md) for all features
2. ✅ Check [USAGE_GUIDE.md](USAGE_GUIDE.md) for advanced tips
3. ✅ Start organizing your bookmarks!
4. ✅ Share feedback or report issues

---

## Development Testing

For developers who want to inspect the code:

### Check Service Worker
```
chrome://extensions/ → Page Pocket → Service Worker (inspect views)
```

### Check Storage
In the service worker console:
```javascript
chrome.storage.local.get('page_pocket_links', console.log)
```

### Clear All Data (for testing)
In the service worker console:
```javascript
chrome.storage.local.clear()
```

### Reload Extension After Code Changes
```
chrome://extensions/ → Page Pocket → Reload icon
```

---

## File Structure Reference

```
page-pocket/
├── manifest.json          # Extension config
├── popup.html/js          # Save interface
├── vault.html/js          # Vault interface
├── service_worker.js      # Background script
├── styles.css             # Shared styles
├── data/
│   ├── storage.js         # Storage operations
│   └── utils.js           # Helper functions
├── icons/                 # Extension icons
└── README.md              # Full documentation
```

---

**Time to completion: ~5 minutes**  
**Difficulty: Easy**  
**Result: Fully functional link saver! 🎉**
