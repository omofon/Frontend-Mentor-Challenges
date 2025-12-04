# Frontend Mentor - Testimonials Grid Section Solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Experience a fully responsive grid layout that adapts from mobile to tablet to desktop

### Screenshot

![Desktop Design](./design/desktop-design.jpg)
![Mobile Design](./design/mobile-design.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/omofon/Personal-Projects/tree/ada96409b32d6ad18fa3b176f7413282eec140d0/Frontend%20Mentor/testimonials-grid-section-main)
- Live Site URL: [Vercel Deployment](https://testimonial-grid-kohl.vercel.app/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow
- Responsive design principles

### What I Learned

This project reinforced several key concepts in modern CSS:

**CSS Grid Layout**: I implemented a complex grid system that adapts across three breakpoints. The desktop layout uses a 4-column grid with items spanning multiple columns and rows:

```css
.testimonials {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: 2rem;
}
```

**CSS Custom Properties**: I organized all colors and typography using CSS variables for better maintainability:

```css
:root {
  --color-purple-500: hsl(263, 55%, 52%);
  --font-family: "Barlow Semi Condensed", sans-serif;
  --font-weight-600: 600;
}
```

**Responsive Design with Mobile-First Approach**: Starting with a single-column mobile layout and progressively enhancing for larger screens:

```css
/* Mobile: 1 column */
.testimonials {
  grid-template-columns: 1fr;
}

/* Tablet: 3 columns */
@media (min-width: 768px) {
  .testimonials {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktop: 4 columns with precise positioning */
@media (min-width: 1024px) {
  .testimonials {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

**Positioning Decorative Elements**: The quotation mark SVG appears only on larger screens and is absolutely positioned:

```css
.card-purple .quote-svg {
  position: absolute;
  top: 0;
  right: 6rem;
  opacity: 0.8;
  z-index: 0;
}
```

### Continued Development

Areas I want to continue focusing on:

- **Advanced Grid Techniques**: Exploring CSS Grid areas and more complex layouts
- **Accessibility**: Improving semantic HTML and ARIA attributes
- **Performance**: Optimizing images and implementing lazy loading
- **CSS Architecture**: Exploring methodologies like BEM or CUBE CSS for better scalability

## Author

- Website - [Omofon](https://github.com/omofon)
- Frontend Mentor - [@omofon](https://www.frontendmentor.io/profile/omofon)
- GitHub - [@omofon](https://github.com/omofon)

---

## Project Structure

```
testimonials-grid-section-main/
├── design/
│   ├── desktop-design.jpg
│   └── mobile-design.jpg
├── images/
│   ├── bg-pattern-quotation.svg
│   ├── favicon-32x32.png
│   ├── image-daniel.jpg
│   ├── image-jeanette.jpg
│   ├── image-jonathan.jpg
│   ├── image-kira.jpg
│   └── image-patrick.jpg
├── index.html
├── style.css
├── preview.jpg
└── README.md
```

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and to the community for inspiration and feedback.