# 🧹 Clear the Clutter – File Organizer Script

A simple Node.js script that organizes files inside a folder by moving them into subfolders based on their file extensions.

---

## 📂 Example

Before running the script:

```
test-folder/
├── image.jpg
├── resume.pdf
├── archive.zip
```

After running the script:

```
test-folder/
├── jpg/
│   └── image.jpg
├── pdf/
│   └── resume.pdf
├── zip/
│   └── archive.zip
```

---

## 🚀 How It Works

- Reads all files in `test-folder/`
- Extracts file extensions (e.g., `.jpg`, `.pdf`)
- Creates folders for each extension (e.g., `jpg/`, `pdf/`)
- Moves files into their respective folders

---

## 🛠️ Requirements

- Node.js v14 or later

---

## 📦 Installation

1. Clone the repo or copy the script
2. Run:

```bash
npm install
```

_(If you don’t use any external libraries, you can skip this)_

---

## ▶️ Usage

1. Place your unorganized files inside the `test-folder/` directory.
2. Run the script:

```bash
node script.js
```

That’s it! Your files will be neatly organized by type.

---

## 📁 Project Structure

```
CLEAR-THE-CLUTTER/
├── test-folder/
├── script.js
├── .gitignore
├── package.json
└── README.md
```

---

