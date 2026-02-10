# 📌 Page Pocket

> Save and organize your favorite web pages with tags. Your personal link vault.

## 🎯 Overview

**Page Pocket** is a production-ready Chrome Extension that allows you to save web pages with custom tags and access them later through an elegant vault interface. Built with clean architecture principles and designed for the Chrome Web Store.

## ✨ Features

### Core Functionality
- ✅ **One-Click Save**: Save the current page instantly with a single click
- 🏷️ **Tag Management**: Organize links with comma-separated tags
- 📚 **Vault Library**: Beautiful dashboard to view all saved links
- 🔍 **Smart Search**: Filter links by title, URL, or tags in real-time
- 🗂️ **Sorting Options**: Sort by newest or oldest first
- 🗑️ **Easy Delete**: Remove saved links with confirmation
- ⚡ **Offline Storage**: All data stored locally using Chrome Storage API
- ⌨️ **Keyboard Shortcuts**: Quick access with Ctrl+Shift+S (Cmd+Shift+S on Mac)

### User Experience
- 🎨 Clean, minimalist design
- 📱 Responsive layout
- 🌈 Smooth animations and transitions
- ♿ Accessible contrast ratios
- 💨 Fast and lightweight

## 🚀 Installation

### Install as Unpacked Extension (Developer Mode)

1. **Clone or Download** this repository
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** (toggle in top-right corner)
4. **Click "Load unpacked"**
5. **Select** the `page-pocket` folder
6. **Done!** The extension icon will appear in your toolbar

### Install from Chrome Web Store (Coming Soon)
_This extension is being prepared for Chrome Web Store submission_

## 📖 How to Use

### Saving a Page

1. Navigate to any webpage you want to save
2. Click the **Page Pocket** icon in your toolbar (or press `Ctrl+Shift+S`)
3. Edit the page title if needed
4. Add tags separated by commas (e.g., `work, important, reference`)
5. Click **"Save Page"**
6. Success! The page is now in your vault

### Viewing Your Vault

1. Click the **Page Pocket** icon
2. Click **"View Vault"** button
3. Or right-click the extension icon and select "View Vault"

### Searching and Filtering

- Use the search box to filter by title, URL, or tags
- Click any tag to instantly filter by that tag
- Use the sort dropdown to change order (newest/oldest)

### Deleting Links

- Click the **"Delete"** button on any link card
- Confirm the deletion
- The link will be removed permanently

### Keyboard Shortcuts

- `Ctrl+Shift+S` (or `Cmd+Shift+S` on Mac): Open Page Pocket popup
- `Ctrl+Enter` (in popup): Save the current page
- `Escape` (in popup): Close popup
- `Ctrl+F` (in vault): Focus search box
- `Escape` (in vault search): Clear search

## 🏗️ Project Structure

```
page-pocket/
├── manifest.json           # Extension configuration (Manifest V3)
├── popup.html              # Popup interface HTML
├── popup.js                # Popup logic
├── vault.html              # Vault interface HTML
├── vault.js                # Vault logic
├── service_worker.js       # Background service worker
├── styles.css              # Global styles
├── data/
│   ├── storage.js          # Storage layer (CRUD operations)
│   └── utils.js            # Utility functions
├── icons/
│   ├── icon16.png          # 16x16 icon
│   ├── icon48.png          # 48x48 icon
│   └── icon128.png         # 128x128 icon
└── README.md               # This file
```

## 🛠️ Technical Stack

- **Chrome Extension Manifest V3** - Latest extension platform
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JS
- **HTML5** - Semantic markup
- **Modern CSS** - CSS Variables, Flexbox, Grid
- **Chrome Storage API** - Local data persistence
- **Chrome Tabs API** - Tab information access

## 🧪 Testing

### Manual Testing Checklist

1. **Save Functionality**
   - [ ] Save a page with title, URL, and tags
   - [ ] Save a page without tags
   - [ ] Verify data persists after browser restart

2. **Vault Functionality**
   - [ ] View all saved links
   - [ ] Click link opens in new tab
   - [ ] Delete link works correctly
   - [ ] Search filters correctly
   - [ ] Sort changes order
   - [ ] Stats display correct counts

3. **Edge Cases**
   - [ ] Empty state displays when no links
   - [ ] Special characters in title/tags
   - [ ] Very long URLs
   - [ ] Many tags
   - [ ] Rapid saves

4. **UI/UX**
   - [ ] Popup fits within 350px width
   - [ ] Hover effects work
   - [ ] Animations are smooth
   - [ ] Responsive on different viewport sizes

## 🔒 Security & Privacy

- ✅ **No inline scripts** - CSP compliant
- ✅ **Input sanitization** - All user inputs are sanitized
- ✅ **No external requests** - Everything runs locally
- ✅ **Minimal permissions** - Only requests necessary permissions
- ✅ **Local-only storage** - No data sent to external servers
- ✅ **No analytics or tracking** - Your data stays private

## 🎨 Design Philosophy

**Page Pocket** follows these design principles:

- **Minimalism**: Clean, distraction-free interface
- **Efficiency**: Fast operations with minimal clicks
- **Accessibility**: High contrast, keyboard navigation
- **Consistency**: Uniform spacing and styling
- **Delightful**: Smooth animations and polish

## 🗺️ Roadmap

### Version 1.1 (Planned)
- [ ] Export links to JSON/CSV
- [ ] Import links from bookmarks
- [ ] Bulk operations (select multiple, delete multiple)
- [ ] Advanced tag filtering (AND/OR logic)

### Version 1.2 (Planned)
- [ ] Custom color themes (light/dark mode)
- [ ] Link categories/folders
- [ ] Notes field for each link
- [ ] Favicon display

### Version 2.0 (Future)
- [ ] Cloud sync across devices
- [ ] Browser integration (Chrome, Firefox, Edge)
- [ ] Mobile companion app
- [ ] Collaborative vaults (sharing)

## 🤝 Contributing

Contributions are welcome! This project follows clean architecture and production-ready code standards.

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test thoroughly before submitting
- Keep commits atomic and descriptive

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](../LICENSE.txt) file for details.

## 👤 Author

**Page Pocket** is built with ❤️ by developers who love organized bookmarks.

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature request? Please open an issue on GitHub.

## 🙏 Acknowledgments

- Chrome Extension API documentation
- Modern web development best practices
- Clean architecture principles
- Community feedback

---

**Ready to organize your web?** Install Page Pocket and never lose a link again! 📌✨
