# 🔧 Installation Guide - Page Pocket Chrome Extension

## Prerequisites

- **Google Chrome Browser** (version 88 or higher)
- **Chrome DevTools knowledge** (optional, for debugging)

---

## Method 1: Load Unpacked Extension (Recommended for Testing)

### Step 1: Access Chrome Extensions Page

**Option A - Via URL:**
1. Open Google Chrome
2. Type in the address bar: `chrome://extensions/`
3. Press Enter

**Option B - Via Menu:**
1. Open Google Chrome
2. Click the three-dot menu (⋮) in the top-right
3. Navigate to: **More Tools** → **Extensions**

### Step 2: Enable Developer Mode

1. Look for the **"Developer mode"** toggle in the top-right corner
2. Click to enable it (the toggle should turn blue/on)
3. You'll see new buttons appear: "Load unpacked", "Pack extension", etc.

### Step 3: Load the Extension

1. Click the **"Load unpacked"** button
2. A file browser window will open
3. Navigate to the location where you have this repository
4. Select the **`page-pocket`** folder (not any file inside it)
5. Click **"Select Folder"** or **"Open"**

### Step 4: Verify Installation

You should now see a card for "Page Pocket" on the extensions page with:
- ✅ Extension name: **Page Pocket**
- ✅ Version: **1.0.0**
- ✅ Description: "Save and organize web pages with tags..."
- ✅ Status: **Enabled** (toggle should be on)

### Step 5: Pin to Toolbar (Optional but Recommended)

1. Look for the puzzle piece icon (🧩) in your Chrome toolbar
2. Click it to open the extensions menu
3. Find "Page Pocket" in the list
4. Click the **pin icon** (📌) next to it
5. The Page Pocket icon will now appear in your toolbar

---

## Method 2: Install from Chrome Web Store (Coming Soon)

Once published to the Chrome Web Store:

1. Visit the Chrome Web Store
2. Search for "Page Pocket"
3. Click "Add to Chrome"
4. Confirm installation

**Note:** This method is not yet available. Use Method 1 for now.

---

## Verification Steps

After installation, verify everything works:

### 1. Check Extension Icon
- Look for the purple Page Pocket icon in your toolbar
- If you don't see it, click the puzzle piece icon and pin it

### 2. Test Popup
1. Click the Page Pocket icon
2. You should see the save page popup
3. Check that:
   - Title field is present
   - URL field is present
   - Tags field is present
   - Save and View Vault buttons are visible

### 3. Test Keyboard Shortcut
1. Press `Ctrl+Shift+S` (Windows/Linux) or `Cmd+Shift+S` (Mac)
2. The popup should open

### 4. Open Vault
1. Click the Page Pocket icon
2. Click "View Vault" button
3. A new tab should open showing the vault interface
4. You should see:
   - "My Page Vault" header
   - Statistics (showing 0 links)
   - Empty state message

---

## Common Installation Issues

### Issue: "Cannot load extension"

**Symptoms:** Error message when trying to load unpacked extension

**Solutions:**
- Make sure you're selecting the `page-pocket` **folder**, not a file
- Verify that `manifest.json` is directly inside the folder
- Check that all required files are present
- Try restarting Chrome

### Issue: Extension icon not showing

**Symptoms:** Extension loads but no icon appears in toolbar

**Solutions:**
- Click the puzzle piece icon (🧩) in Chrome toolbar
- Find "Page Pocket" and click the pin icon
- Refresh the extensions page (`chrome://extensions/`)
- Make sure the extension is enabled (toggle is on)

### Issue: "Manifest file is missing or unreadable"

**Symptoms:** Error about manifest.json

**Solutions:**
- Verify `manifest.json` exists in the `page-pocket` folder
- Check that the file is valid JSON (not corrupted)
- Make sure you have read permissions for the folder
- Try re-downloading the extension files

### Issue: "Service worker registration failed"

**Symptoms:** Error about service worker

**Solutions:**
- Make sure `service_worker.js` exists in the `page-pocket` folder
- Check Chrome version (needs 88+)
- Try removing and re-loading the extension
- Check the service worker console for specific errors

### Issue: Popup doesn't open

**Symptoms:** Clicking icon does nothing

**Solutions:**
- Check that `popup.html` exists
- Right-click the extension icon → "Inspect popup" to see errors
- Make sure JavaScript is enabled in Chrome
- Try disabling other extensions that might conflict

### Issue: Vault page shows error

**Symptoms:** "Unable to load" or blank page when opening vault

**Solutions:**
- Check that `vault.html` and `vault.js` exist
- Press F12 to open DevTools and check for errors
- Make sure all script files are present in the `data/` folder
- Try refreshing the vault page

---

## Uninstalling

If you need to remove the extension:

### Method 1: From Extensions Page
1. Go to `chrome://extensions/`
2. Find "Page Pocket"
3. Click **"Remove"**
4. Confirm removal

### Method 2: From Toolbar
1. Right-click the Page Pocket icon in toolbar
2. Select **"Remove from Chrome..."**
3. Confirm removal

**Note:** Removing the extension will also delete all saved links stored locally.

---

## Updating

When a new version is available:

### For Unpacked Extension:
1. Download the new version files
2. Go to `chrome://extensions/`
3. Find "Page Pocket"
4. Click the refresh icon (🔄)

### For Chrome Web Store (Future):
Updates will be automatic when published.

---

## Permissions Explained

Page Pocket requests the following permissions:

| Permission | Purpose | Why Needed |
|------------|---------|------------|
| `storage` | Save links locally | Required to store your saved links |
| `tabs` | Access tab information | Required to get page title and URL |
| `activeTab` | Access current tab | Required for one-click saving |

**Privacy:** All data stays on your device. No external servers.

---

## File Structure

After installation, the extension uses these files:

```
page-pocket/
├── manifest.json          (Extension configuration)
├── popup.html/js          (Save interface)
├── vault.html/js          (Vault interface)
├── service_worker.js      (Background script)
├── styles.css             (Styling)
├── data/
│   ├── storage.js         (Storage operations)
│   └── utils.js           (Utilities)
└── icons/                 (Extension icons)
```

---

## Development Mode

If you're a developer working on the extension:

### Auto-reload Changes
1. Make code changes
2. Go to `chrome://extensions/`
3. Click the refresh icon on Page Pocket card
4. Test your changes

### Debug Popup
- Right-click extension icon → "Inspect popup"
- Opens DevTools for the popup

### Debug Vault
- Open vault page
- Press F12 for DevTools

### Debug Service Worker
- Go to `chrome://extensions/`
- Find Page Pocket
- Click "Service worker" under "Inspect views"

---

## Getting Help

If you encounter issues:

1. **Check Documentation:**
   - [README.md](README.md) - Overview and features
   - [QUICKSTART.md](QUICKSTART.md) - Quick testing guide
   - [USAGE_GUIDE.md](USAGE_GUIDE.md) - Detailed instructions
   - [FEATURES.md](FEATURES.md) - Complete feature list

2. **Debug:**
   - Open DevTools (F12) to check for errors
   - Check the service worker console
   - Verify all files are present

3. **Reset:**
   - Remove and reload the extension
   - Clear Chrome cache
   - Restart Chrome

---

## System Requirements

- **Browser:** Google Chrome 88 or higher
- **OS:** Windows, macOS, Linux, or ChromeOS
- **Storage:** ~30 KB for extension files
- **Memory:** ~5 MB when running
- **Internet:** Not required (works offline)

---

## Next Steps

After successful installation:

1. 📖 Read the [QUICKSTART.md](QUICKSTART.md) for a 5-minute walkthrough
2. 📚 Check [USAGE_GUIDE.md](USAGE_GUIDE.md) for detailed instructions
3. 🚀 Start saving your favorite web pages!

---

**Installation Complete! Ready to organize your web. 📌✨**
