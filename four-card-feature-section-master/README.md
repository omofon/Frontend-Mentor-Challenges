# Frontend Mentor | Four Card Feature Section

![Design preview for the Four card feature section coding challenge](./design/desktop-preview.jpg)

## 🔗 Links

- **Live Site:** [https://feature-cards-eight.vercel.app/](https://feature-cards-eight.vercel.app/)
- **Repository:** [GitHub](https://github.com/omofon/Personal-Projects/tree/03df7c907846dc59ca714a1a8893382745cd6e5d/Frontend%20Mentor/four-card-feature-section-master)

## 📋 Challenge

Build a responsive feature section with four cards arranged in an asymmetric grid layout. The design requires cards to be positioned in a distinctive diamond-like pattern on desktop, then stack vertically on mobile—all while maintaining visual balance and hierarchy.

## 🎯 What I Built

A feature showcase component that demonstrates advanced CSS Grid mastery. The real challenge wasn't creating four cards, it was achieving the asymmetric layout where the middle two cards align vertically while the outer cards center themselves horizontally. This required understanding grid row spanning, alignment properties, and when to break from traditional symmetric layouts.

## 🖼️ Screenshots

| Desktop Layout | Mobile Layout |
|:---:|:---:|
| ![Desktop](./design/desktop-design.jpg) | ![Mobile](./design/mobile-design.jpg) |

## 🛠️ Built With

- Semantic HTML5 markup (`<section>`, `<article>`)
- CSS Grid for asymmetric layout positioning
- CSS custom properties for color theming
- Flexbox for card internal layout
- Mobile-first responsive workflow
- SVG icons with proper accessibility

## 💡 Key Technical Decisions

### The Grid Layout Challenge

The asymmetric layout pattern required precise grid control:

**Desktop Layout Requirements:**
- Left card (Supervisor): Centers vertically, spans 2 rows
- Middle cards (Team Builder, Karma): Stack normally
- Right card (Calculator): Centers vertically, spans 2 rows

**Solution:** CSS Grid with explicit row spanning and alignment

```css
.cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
}

.card:nth-child(1) {
    grid-row: 1 / 3; /* Supervisor spans both rows */
    align-self: center;
}

.card:nth-child(2) {
    grid-row: 1 / 2; /* Team Builder in top middle */
}

.card:nth-child(3) {
    grid-row: 2 / 3; /* Karma in bottom middle */
}

.card:nth-child(4) {
    grid-row: 1 / 3; /* Calculator spans both rows */
    align-self: center;
}
```

**Why this approach:** Many developers would use absolute positioning or negative margins to achieve this layout. That's brittle—breaks on different content lengths and requires magic numbers. Grid with explicit placement is declarative, maintainable, and responsive to content changes.

### Color-Coded Card Borders

Each card features a distinctive top border color matching its icon:

```css
:root {
    --color-cyan: hsl(180, 62%, 55%);
    --color-red: hsl(0, 78%, 62%);
    --color-orange: hsl(34, 97%, 64%);
    --color-blue: hsl(212, 86%, 64%);
}

.card {
    border-top: 4px solid var(--border-color);
}

.card--supervisor { --border-color: var(--color-cyan); }
.card--team-builder { --border-color: var(--color-red); }
.card--karma { --border-color: var(--color-orange); }
.card--calculator { --border-color: var(--color-blue); }
```

**Design rationale:** Using CSS custom properties at the component level creates a scalable system. Adding a fifth card? Just define a new modifier class with a border color—no hunting through stylesheets.

### Responsive Strategy

Mobile layout abandons the grid entirely:

```css
@media (max-width: 768px) {
    .cards-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
    
    .card {
        grid-row: auto; /* Reset all row assignments */
    }
}
```

**Critical insight:** Don't try to force the desktop grid pattern onto mobile. Let grid auto-placement stack the cards naturally. Simplicity wins on small screens.

## 📈 What I Learned

1. **Grid row spanning is powerful for asymmetric layouts.** Before this project, I defaulted to flexbox for everything. Grid's ability to explicitly place items across rows and columns unlocked new layout possibilities without hacky positioning.

2. **`align-self: center` on grid items is different from parent `align-items`.** Understanding the difference between container-level and item-level alignment was crucial for getting the outer cards to center vertically while middle cards stayed at their natural positions.

3. **Design systems start with variables.** Instead of hardcoding `hsl(180, 62%, 55%)` throughout the stylesheet, centralizing colors as custom properties made the code self-documenting and trivial to maintain.

## 🚀 Future Improvements

- **Card animations:** Add subtle stagger animation on page load (cards fade in sequentially)
- **Hover depth:** Implement shadow depth increase on hover to add dimensionality
- **Icon animations:** SVG icons could scale or change color on card hover
- **Responsive grid gap:** Use `clamp()` for gap sizing that scales smoothly between breakpoints
- **Accessibility audit:** Ensure proper heading hierarchy and ARIA labels for screen readers

## 🏗️ Project Structure

```
four-card-feature-section/
├── design/              # Reference designs
│   ├── desktop-design.jpg
│   ├── desktop-preview.jpg
│   └── mobile-design.jpg
├── images/              # SVG icons
│   ├── icon-supervisor.svg
│   ├── icon-team-builder.svg
│   ├── icon-karma.svg
│   └── icon-calculator.svg
├── index.html          # Semantic markup
├── style.css           # Grid layout and styles
└── style-guide.md      # Design specifications
```

## 👤 Author

- Frontend Mentor: [@omofon](https://www.frontendmentor.io/profile/omofon)
- GitHub: [@omofon](https://github.com/omofon)

---

**Technical highlight:** This project showcases CSS Grid mastery beyond basic row/column layouts. The asymmetric pattern demonstrates understanding of grid placement, alignment, and when to use explicit positioning over auto-placement.