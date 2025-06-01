# Business Name Generator

## Overview
This simple JavaScript program generates random business names by combining words from three separate lists: adjectives, shop names, and another descriptive word. Each generated name consists of one word from each list, forming a unique and catchy business name.

## Features
- Uses three predefined arrays:
  - **Adjectives:** Describes the business (e.g., Crazy, Amazing, Fire)
  - **Shop Names:** Types of shops or business categories (e.g., Engine, Foods, Garments)
  - **Another Word:** Additional descriptor or suffix (e.g., Bros, Limited, Hub)
- Randomly picks one word from each array.
- Combines the selected words to create a full business name.
- Prints the generated business name to the console.

## How It Works
- The `randomWordPicker(list)` function takes an array as input and returns a random element from that array.
- The program calls this function three times: once for each list.
- The chosen words are concatenated with spaces to form a business name.
- The generated business name is logged to the console.


