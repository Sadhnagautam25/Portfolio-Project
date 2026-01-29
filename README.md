<<<<<<< HEAD

=======
# Window OS

A macOS-inspired desktop application built with React, featuring draggable windows and integrated web apps. Access your GitHub, Resume, Spotify, social media, calendar, notes, and terminal all in one sleek interface.

## 🎯 Features

- **Draggable Windows**: Move and interact with multiple windows simultaneously using `react-rnd`
- **Multiple Integrated Apps**:
  - 📱 **GitHub**: View your GitHub profile and repositories
  - 📄 **Resume**: Display your professional resume
  - 🎵 **Spotify**: Embedded Spotify player
  - 📷 **Instagram**: Social media integration
  - 💼 **LinkedIn**: Professional networking feed
  - 📅 **Calendar**: Calendar interface
  - 📝 **Notes**: Take and manage notes
  - 💻 **Terminal**: Built-in command line emulator
- **macOS-Style UI**: Modern dock-inspired footer with window management
- **Responsive Design**: Works seamlessly across different screen sizes
- **State Management**: Redux-powered window state management
- **Smooth Animations**: Framer Motion for fluid transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd window-OS

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **Redux Toolkit** | State management |
| **Vite** | Build tool and dev server |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animation library |
| **react-rnd** | Draggable and resizable windows |
| **Lucide React** | Icon library |
| **react-icons** | Additional icons |
| **react-console-emulator** | Terminal emulation |
| **react-markdown** | Markdown rendering |

## 📁 Project Structure

```
src/
├── components/
│   ├── footer comp/         # Footer with dock icons
│   │   ├── DockIcon.jsx
│   │   ├── Footer.jsx
│   │   ├── FooterCenter.jsx
│   │   ├── FooterLeft.jsx
│   │   └── FooterRight.jsx
│   ├── nav comp/            # Navigation components
│   │   └── Searhbar.jsx     # Search functionality
│   └── window tabs/         # Individual application windows
│       ├── CalenderTab.jsx
│       ├── GithubTab.jsx
│       ├── InstagramTab.jsx
│       ├── LinkedinTab.jsx
│       ├── NoteTab.jsx
│       ├── ResumeTab.jsx
│       ├── SpotifyTab.jsx
│       └── TerminalTab.jsx
├── redux/                   # Redux store setup
│   ├── store.js
│   └── features/
│       └── tabSlice.js      # Window state management
├── window/
│   └── MacWindow.jsx        # Main window wrapper component
├── assets/                  # Images and static files
├── App.jsx                  # Main application component
├── main.jsx                 # React entry point
└── index.css                # Global styles
```

## 🎮 How to Use

1. **Open Applications**: Click on the dock icons at the bottom to open different application windows
2. **Move Windows**: Click and drag window title bars to reposition them
3. **Close Windows**: Click the close button on window controls
4. **Interact**: Each window contains functional content (embedded apps, forms, etc.)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build

## 🎨 Customization

### Adding New Windows

1. Create a new component in `src/components/window tabs/`
2. Add the window state to `src/redux/features/tabSlice.js`
3. Import and render the component in `src/App.jsx`
4. Add a dock icon in the Footer component

### Styling

The project uses Tailwind CSS for styling. Modify `tailwindcss` configuration in `package.json` and create custom styles in `src/index.css`

## 📝 Notes

- The wallpaper image should be placed in `src/assets/` directory
- Check `public/note.txt` for any additional project notes
- Redux slice manages which windows are open/closed

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

Created with ❤️ for a unique desktop experience

---

**Happy coding!** 🚀


>>>>>>> dfda3ee (add readme life)


