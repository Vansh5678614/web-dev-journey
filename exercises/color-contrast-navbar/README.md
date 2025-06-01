# Navigation Bar with CSS Variables for Color Contrast

## Description

This mini project demonstrates how to create a simple horizontal navigation bar using HTML and CSS, with colors controlled via CSS variables.

### Features:
- The navbar background color is defined using a CSS variable (`--background-color`).
- Text color in the navbar uses another CSS variable (`--text-color`).
- The links are styled as inline-block elements with padding and bold font.
- The navigation bar items are horizontally aligned.
- The first link points to an external website (Google) as an example.

---

## How to Use

- Open `index.html` in a browser to see the styled navigation bar.
- You can change the colors by updating the CSS variables inside the `:root` selector in `style.css`.
  For example:
  ```css
  :root {
      --text-color: black;
      --background-color: yellow;
  }
