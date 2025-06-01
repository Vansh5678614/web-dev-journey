# Hacking Simulator

## Overview
This is a fun and simple hacking simulator implemented in JavaScript and HTML/CSS. It mimics a terminal interface with a green background and displays a sequence of hacking-related messages with blinking ellipsis (`...`) to simulate activity. Each message appears after a delay, giving the feel of a real terminal operation.

## Features
- Green terminal-style UI with fixed position at the bottom of the screen.
- A button to start the "hacking" simulation.
- Displays sequential hacking steps:
  - Initializing Hacking...
  - Reading your Files...
  - Password files Detected...
  - Sending all passwords and personal files to server...
  - Cleaning up...
- Each step shows blinking dots after the message to simulate loading.
- Random delays (between 1 to 7 seconds) can be used to create realistic timing effects (prototype uses fixed delays currently).
- Button disables after click to prevent multiple simultaneous runs.

## How It Works
- Each hacking step is an async function that returns a Promise.
- The blinking dots are implemented using `setInterval` that cycles through `.  `, `.. `, and `...`.
- After a fixed timeout (currently 10 seconds), the blinking stops and the message updates to a success confirmation.
- The main `hack()` function runs all steps sequentially using `await`.
- The "Hack!" button triggers the hack process and disables itself once clicked.

## Usage
1. Open `index.html` in a modern browser.
2. Click the "Hack!" button.
3. Watch the messages appear one after another with blinking dots.
4. After completion, all steps show successful completion messages.