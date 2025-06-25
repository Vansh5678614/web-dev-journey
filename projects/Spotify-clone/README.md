# Spotify Clone Web Player

A simple web-based music player inspired by Spotify, built with vanilla HTML, CSS, and JavaScript. Browse albums, play songs, control playback, and adjust volume—all within a clean, responsive interface.

---

## 🚀 Features

- **Album Display**: Dynamically loads album covers and metadata from JSON files.
- **Song List**: Fetches and displays song lists for each album.
- **Playback Controls**: Play, pause, next, and previous track functionality.
- **Custom Seek Bar**: Manually implemented clickable and draggable progress knob.
- **Volume Control**: Mute/unmute toggle and slider to adjust volume.
- **Hover & Active States**: Interactive hover animations on cards and buttons.
- **Responsive Design**: Seamless layout across desktops, tablets, and mobiles using media queries.
- **Hamburger Menu**: Toggleable sidebar navigation for smaller screen sizes.

---

## 📂 Project Structure

spotify-clone/
├── assets/ # Media and font resources
│ ├── favicons/ # Browser tab icons (favicon.ico, .png)
│ ├── fonts/ # Spotify custom web fonts (.woff2)
│ ├── songs/ # Music folders (each with cover.jpg, info.json, and .mp3 files)
│ └── svg/ # All SVG icons (play, pause, next, previous, volume, etc.)
│
├── CSS/ # All CSS stylesheets
│ ├── main.css # Layout styles for albums and library
│ ├── navbar.css # Styles for the navigation bar
│ ├── playbar.css # Styles for the music control bar at the bottom
│ ├── utility.css # Utility classes (flex, gaps, scrollbars, spacing)
│ └── responsive.css # Media queries for responsiveness (iPhone 12 Pro, etc.)
│
├── index.html # Main HTML structure of the Spotify clone
├── script.js # JavaScript functionality (playback, loading albums, etc.)
└── README.md # Project overview, instructions, and setup guide

---

## 📖 Usage

1. **Browse Albums**: Click on album cards to load songs.
2. **Play/Pause**: Click the play icon or song title to toggle playback.
3. **Next/Previous**: Use the next and previous buttons to navigate tracks.
4. **Seek**: Click or drag on the custom progress knob.
5. **Volume**: Use the slider or click the speaker icon to mute/unmute.
6. **Mobile Navigation**: Tap the hamburger icon to show/hide the library panel.

---

## ⚙️ Configuration

Ensure the `assets/songs/` directory contains subfolders for each album, each with:

- `cover.jpg` (album artwork)
- `info.json` (title and description)
- `.mp3` files for each track

Sample `info.json` format:

```json
{
  "title": "Album Title",
  "description": "Artist Name"
}

---

## 📱 Responsive Design

This clone adapts gracefully to different screen sizes using media queries defined in `responsive.css`.

### 📱 Mobile View (≤ 390px)

- The **library panel** becomes a full-height, slide-in sidebar.
- **Albums** are stacked vertically and centered for better readability.
- **Album cards** take up ~90% of the screen width.
- **Playback controls** and **text** are resized for smaller screens.
- The **footer** is hidden to prioritize content space.
- The **playbar** stays fixed at the bottom for consistent access.
- UI elements like buttons and volume sliders are adjusted to fit smaller layouts.

### 💻 Tablet View (< 1279px)

- The **sidebar library** becomes a hidden slide-in panel.
- A **hamburger menu** appears in the navbar to toggle the library.
- **Playlist section** expands to use the full width of the screen.
- Adjustments are made for spacing, navigation, and visibility of sections.

These styles are implemented via `@media` queries in the [`CSS/responsive.css`](CSS/responsive.css) file.

---

## 🧑‍💻 Technologies

- **HTML5**
- **CSS3** (Flexbox, media queries, custom fonts, scrollbar styling)
- **JavaScript (ES6+)**
- **Fetch API** for dynamic file loading

---
```
