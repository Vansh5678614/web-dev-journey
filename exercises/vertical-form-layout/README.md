# Vertical Form Layout (Without `<br>` Tag)

## 📝 Description

This is a simple HTML form that asks users for their:
- Name
- City
- Pincode

The form is **vertically aligned** using `<div>` blocks instead of the `<br>` tag, following best practices for clean and semantic HTML.

---

## 🚀 Features

- Semantic and accessible HTML structure
- Uses `<label>` and `<input>` inside `<div>` elements to vertically align form fields
- Clean separation between each field without using `<br>`
- Placeholder for future CSS styling and form validation

---

## 🔧 How It Works

Each input field (Name, City, and Pincode) is wrapped inside a `<div>` to ensure vertical stacking:

```html
<div>
  <label for="name">Name:</label>
  <input type="text" id="name">
</div>
