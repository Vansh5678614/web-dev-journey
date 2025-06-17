# Spotify Clone Web Player

A simple web-based music player inspired by Spotify, built with vanilla HTML, CSS, and JavaScript. Browse albums, play songs, control playback, and adjust volume—all within a clean interface.

---  
 
## 🚀 Features

- **Album Display**: Dynamically loads album covers and metadata from JSON files.
- **Song List**: Fetches and displays song lists for each album.
- **Playback Controls**: Play, pause, next, and previous track functionality.
- **Custom Seek Bar**: Manually implemented clickable and draggable progress knob.
- **Volume Control**: Mute/unmute toggle and slider to adjust volume.
- **Hover & Active States**: Interactive hover animations on cards and buttons.

---

## 📂 Project Structure

spotify-clone/
├── assets/             # Media and fonts
│   ├── favicons/       # Browser icons
│   ├── fonts/          # Spotify custom fonts
│   ├── songs/          # Track folders with cover.jpg & info.json
│   └── svg/            # UI icons (play, pause, volume, etc.)
├── CSS/                # Stylesheets
│   ├── main.css        # Global styles & utilities
│   ├── navbar.css      # Navigation bar styles
│   ├── playbar.css     # Playback controls styling
│   └── utility.css     # Flex, grid, spacing utilities
├── index.html          # Main HTML file
├── script.js           # Core JavaScript logic
└── README.md           # Project documentation

---
## 📖 Usage

1. **Browse Albums**: Click on album cards to load songs.
2. **Play/Pause**: Click the play icon or song title to toggle playback.
3. **Next/Previous**: Use the next and previous buttons to navigate tracks.
4. **Seek**: Click or drag on the custom progress knob.
5. **Volume**: Use the slider or click the speaker icon to mute/unmute.

---

## ⚙️ Configuration

- Ensure the `assets/songs/` directory contains subfolders for each album, each with:

  - `cover.jpg` (album artwork)
  - `info.json` (title and description)
  - `.mp3` files for each track
 
- `info.json` format:

```json
{
  "title": "Album Title",
  "description": "Artist Name"
}
```

---

## 🧑‍💻 Technologies

- **HTML5**
- **CSS3** (Flexbox, custom fonts, scrollbar styling)
- **JavaScript (ES6+)**
- **Fetch API** for dynamic file loading

---