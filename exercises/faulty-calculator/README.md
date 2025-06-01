# 🔢 Faulty Calculator

This is a simple web-based calculator built with **HTML** and **JavaScript**. It performs basic arithmetic operations—but with a twist! There’s a **10% chance** that it will return a **deliberately wrong answer** to simulate a *faulty* calculator.

---

## 📁 Project Structure

```
faulty-calculator/
│
├── index.html      # Main HTML file
├── script.js       # JavaScript logic for the calculator
```

---

## ⚙️ Features

* Prompts user for two numbers and an operator.
* Performs addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
* **Random Fault**: Has a 10% chance to return an incorrect result.
* All interactions happen through prompts and alerts.

---

## 🚀 How to Use

1. Open `index.html` in a web browser.
2. Enter the two numbers and choose an operation when prompted.
3. Check the console (DevTools → Console) for the result.
4. Be aware: 1 in 10 times, the result may be wrong!

---

## 📌 Example of Faulty Behavior

| Operation | Expected | Faulty Output |
| --------- | -------- | ------------- |
| `3 + 4`   | `7`      | `-1`          |
| `10 - 2`  | `8`      | `5`           |
| `6 * 3`   | `18`     | `9`           |
| `8 / 2`   | `4`      | `64` (8^2)    |

---

## 🛠️ Technologies Used

* HTML
* JavaScript (Vanilla)

---

## 🧪 Fun Use Case

Use this project as:

* A prank calculator 💏
* A fun exercise for learning `Math.random()`, `prompt`, and `switch-case` in JS.
* A debugging or testing challenge for learners.
