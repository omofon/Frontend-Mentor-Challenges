# Time Tracking Dashboard

A responsive time tracking dashboard built with vanilla JavaScript and Tailwind CSS v4. Users can view their activity hours across daily, weekly, and monthly timeframes.

![Time Tracking Dashboard Preview](./design/desktop-design.jpg)

## Live Demo

**[View Live Site](https://time-dashboard-weld.vercel.app/)**

## Features

- **Dynamic Time Period Switching** - Toggle between Daily, Weekly, and Monthly views
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Async Data Handling** - Fetches activity data from JSON with proper error handling
- **Interactive UI** - Hover states and smooth transitions
- **Clean Architecture** - BEM naming convention and modular JavaScript

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS v4** - Custom utility classes with CSS variables
- **Vanilla JavaScript** - ES6+ with async/await
- **JSON** - Local data source
- **Vercel** - Deployment

## What I Learned

This project taught me how to:

1. **Coordinate async/sync operations** - Managing data fetching with DOM manipulation
2. **Handle Tailwind v4 migration** - Moving from config-based (v3) to CSS-first approach (v4)
3. **Structure async code properly** - Using a pipeline pattern to ensure data loads before event listeners attach
4. **Work with custom CSS variables in Tailwind** - Defining utilities explicitly in `@layer utilities`

### The Async Challenge

The hardest part was ensuring fetched data was available to event listeners. I solved this by:

- Storing data in a module-scoped variable
- Creating an initialization pipeline that coordinates async fetch with sync DOM updates
- Using `DOMContentLoaded` to ensure DOM is ready before script execution

```javascript
const initializePipeline = async () => {
  const data = await fetchData("/data.json");
  
  if (data) {
    actualData = data;
    renderData(actualData, "weekly");
    attachEventListeners();
  }
};
```

### The Tailwind v4 Migration

Migrating to Tailwind v4 required understanding that:

- Custom CSS variables don't automatically generate utility classes
- Utilities must be explicitly defined in `@layer utilities`
- The config file approach from v3 doesn't work in v4

Example of custom utilities:

```css
@layer utilities {
  .bg-navy-900 {
    background-color: var(--navy-900);
  }
}
```

## Project Structure

```
time-tracking-dashboard-main/
├── index.html              # Main HTML structure
├── styles/
│   ├── index.css          # Tailwind source (custom utilities & components)
│   └── output.css         # Generated Tailwind output
├── scripts/
│   └── index.js           # JavaScript logic (async data handling)
├── images/                # Activity icons and profile image
├── data.json             # Activity timeframe data
└── design/               # Design reference files
```

## Key JavaScript Functions

### `fetchData(dataSource)`
Fetches JSON data with error handling

### `getPeriodData(data, period)`
Transforms raw JSON into UI-ready format for a specific timeframe

### `renderData(data, period)`
Updates DOM with current/previous hours for selected period

### `attachEventListeners()`
Handles button clicks and active state management

### `initializePipeline()`
Coordinates async data fetch with synchronous DOM operations

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/omofon/Personal-Projects.git

# Navigate to project
cd "Frontend Mentor/time-tracking-dashboard-main"

# Install dependencies
npm install

# Run Tailwind in watch mode
npm run watch

# Open index.html in browser
```

## Build Commands

```json
{
  "build": "tailwindcss -i ./styles/index.css -o ./styles/output.css",
  "watch": "tailwindcss -i ./styles/index.css -o ./styles/output.css --watch"
}
```

## Design Specifications

- **Font**: [Rubik](https://fonts.google.com/specimen/Rubik) (300, 400, 500)
- **Mobile**: 375px
- **Desktop**: 1440px
- **Colors**: Custom HSL values defined as CSS variables

## Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Event listeners firing before data loaded | Created initialization pipeline with async/await |
| Tailwind v4 not recognizing custom colors | Explicitly defined utilities in `@layer utilities` |
| Period label text changing with timeframe | Used conditional logic to map period to label text |
| Matching activity titles to CSS classes | Converted titles to lowercase kebab-case for class matching |

## Future Improvements

- Add loading states while fetching data
- Implement error UI instead of just console logs
- Extract magic strings to constants
- Add unit tests for data transformation functions
- Create utility function for button active state toggling

## Acknowledgments

- Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw)
- Coded by [Omofon](https://github.com/omofon)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**[View Live Demo](https://time-dashboard-weld.vercel.app/)** | **[Report Bug](https://github.com/omofon/Personal-Projects/issues)** | **[Frontend Mentor Profile](https://www.frontendmentor.io/profile/omofon)**
