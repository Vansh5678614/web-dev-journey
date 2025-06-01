# Basic Sticky Navbar Layout

## Overview

This project demonstrates a basic website layout with the following features:

- A **sticky navigation bar** at the top of the page using `position: sticky`.
- Navigation links aligned horizontally.
- Multiple content sections (`section` and `article`) arranged with CSS positioning.
- Fixed-position image/article to the right side of the viewport.
- Usage of semantic HTML5 elements (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Basic styling for typography and layout.
- Comments explaining some CSS properties and troubleshooting tips.

---

## Features

- **Sticky Header**: The header remains visible at the top when scrolling.
- **Fixed Article**: An article with an image is fixed to the right side for better visibility.
- **Side-by-side Sections**: Two sections (`section1` and `section2`) displayed side-by-side with absolute positioning.
- **Footer**: Positioned near the bottom with content.
- **Responsive Meta Tag** included, but layout is not fully responsive yet.
- Demonstrates `position: sticky`, `position: fixed`, and `position: absolute`.

---

## Known Issues

- Sticky positioning may not work if the parent container has overflow properties like `overflow: hidden` or if the stacking context prevents it.
- Absolute and fixed positioning used extensively, which can cause layout challenges on different screen sizes.
- No responsive design implemented yet.
- Some overlapping may occur depending on screen size and scrolling.

---

## How to Use

1. Clone or download the project.
2. Open `index.html` in a modern browser.
3. Scroll the page to see the sticky header and fixed-position article in action.
4. Modify CSS in `style.css` to adjust layout or colors.

---


