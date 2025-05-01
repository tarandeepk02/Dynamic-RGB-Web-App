# Dynamic RGB Web App

A responsive and interactive web application for exploring and generating RGB color combinations using HTML5, Bootstrap (SOLAR theme), and modern JavaScript (ES6). Users can select RGB values, view color representations, and explore predefined color sets.

## 🌈 Features

- RGB dropdowns populated with values from 0 to 255
- Displays selected color in:
  - Integer RGB format `(r, g, b)`
  - Floating-point RGB format `(r, g, b)` with 2 decimals
  - Hexadecimal format `#rrggbb`
- View:
  - Basic RGB colors
  - Gray RGB colors
  - User-selected colors
- Clear color display table with a single click
- Dynamic year update in footer

## 🛠 Technologies Used

- **HTML5** – Markup for content structure
- **Bootstrap (SOLAR Theme)** – UI and responsive layout
- **JavaScript ES6** – Logic and interactivity

## 🚀 How to Use

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Navigate to the RGB page to begin exploring color combinations.
4. Use buttons to show basic, gray, or selected colors.

## 📌 JavaScript Functions

- `setRGBValues()` – Populates dropdowns with 0-255
- `formatRGB()` – Formats color as `(r, g, b)`
- `computeFloatingPointRGB()` – Converts to decimal format
- `computeHexadecimalRGB()` – Converts to hex code
- `displayColorInformation()` – Displays color and info
- `clearTable()` – Clears displayed colors
- `displayBasicColors()`, `displayGrayColors()`, `displaySelectedColors()` – Load color sets


