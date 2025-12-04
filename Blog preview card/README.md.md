# Frontend Mentor | Blog Preview Card

![Design preview for the Blog preview card coding challenge](./design/desktop-design.jpg)

## 🔗 Links

- **Live Site:** [https://frontend-mentor-challenges-henna-two.vercel.app/](https://frontend-mentor-challenges-henna-two.vercel.app/)
- **Solution:** [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/your-solution-url)
- **Repository:** [GitHub](https://github.com/omofon/Personal-Projects/tree/2930d4a1e760f00784a0ad81c143134dd68d543d/Frontend%20Mentor/Blog%20preview%20card)

## 📋 Challenge

Create a responsive blog preview card component with hover states and clean typography. The focus is on achieving pixel-perfect spacing, implementing smooth interactive states, and maintaining visual consistency across different screen sizes.

## 🎯 What I Built

A clean, accessible blog card component that demonstrates attention to detail in spacing, typography, and interactive design. This challenge was about mastering the fundamentals—proper semantic HTML structure, precise CSS implementation, and polished hover states that feel native and responsive.

## 🖼️ Screenshot

| Desktop View | Active State |
|:---:|:---:|
| ![Desktop](./design/desktop-design.jpg) | ![Active](./design/active-states.jpg) |

## 🛠️ Built With

- Semantic HTML5 (`<article>`, `<time>`, `<h2>`)
- CSS custom properties for consistent theming
- CSS Flexbox for card layout and content alignment
- Mobile-first responsive design approach
- CSS transitions for smooth hover effects
- Google Fonts (Figtree) for typography

## 💡 Key Technical Decisions

### Semantic HTML Structure

Used proper semantic elements to improve accessibility and SEO:

```html
<article class="blog-card">
    <time datetime="2023-12-21">21 Dec 2023</time>
    <h2>HTML & CSS foundations</h2>
    <p>These languages are the backbone of every website...</p>
    <div class="author">
        <img src="..." alt="Greg Hooper">
        <span>Greg Hooper</span>
    </div>
</article>
```

**Why this matters:** Screen readers and search engines understand the content structure. Using `<article>` signals this is standalone content, `<time>` with `datetime` provides machine-readable dates, and proper heading hierarchy improves accessibility.

### CSS Custom Properties for Maintainability

Established a design system using CSS variables:

```css
:root {
    --color-yellow: hsl(47, 88%, 63%);
    --color-grey-950: hsl(0, 0%, 7%);
    --color-grey-500: hsl(0, 0%, 42%);
    --font-size-base: 1rem;
    --spacing-unit: 1.5rem;
    --border-radius: 0.75rem;
}
```

**Benefit:** Single source of truth for colors and spacing. If the design changes, update one variable instead of hunting through the entire stylesheet. This is professional-level CSS architecture, not beginner "just make it work" code.

### Box Shadow Technique

Implemented the card's distinctive shadow using CSS layering:

```css
.blog-card {
    box-shadow: 8px 8px 0 0 var(--color-grey-950);
    border: 1px solid var(--color-grey-950);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.blog-card:hover {
    box-shadow: 16px 16px 0 0 var(--color-yellow);
    transform: translateY(-2px);
}
```

**Design choice:** Hard shadows (not blurred) give a bold, modern aesthetic. The hover state shifts the shadow to the accent color while slightly lifting the card—creates depth and draws attention without being jarring.

## 📈 What I Learned

1. **Spacing is harder than it looks.** Achieving the exact spacing from the design required understanding margin collapse, padding vs margin contexts, and when to use `gap` in flexbox. The difference between "close enough" and "pixel-perfect" is in the details.

2. **Hover states are part of the UX, not decoration.** The transition timing (`0.3s ease`) matters—too fast feels jarring, too slow feels sluggish. I tested multiple durations to find the sweet spot that feels responsive but not abrupt.

3. **Color contrast is non-negotiable.** The yellow badge on white background initially had poor contrast. Used browser dev tools to verify WCAG AA compliance (4.5:1 ratio minimum) for the text, ensuring readability for users with visual impairments.

## 🚀 Future Improvements

- **Responsive typography:** Implement `clamp()` for fluid font sizing across viewport widths
- **Dark mode support:** Add `prefers-color-scheme` media query with alternative color palette
- **Micro-interactions:** Add subtle scale animation on the category badge hover
- **Focus states:** Add visible focus rings for keyboard navigation (currently relies on browser defaults)

## 🏗️ Project Structure

```
blog-preview-card/
├── design/              # Reference designs
│   ├── active-states.jpg
│   ├── desktop-design.jpg
│   └── mobile-design.jpg
├── fonts/              # Figtree font files
├── images/             # Card image assets
├── index.html         # Semantic markup
├── style.css          # Component styles
└── style-guide.md     # Design specifications
```

## 👤 Author

- Frontend Mentor: [@omofon](https://www.frontendmentor.io/profile/omofon)
- GitHub: [@omofon](https://github.com/omofon)

---

**Challenge completed:** This demonstrates proficiency in fundamental web development—semantic HTML, CSS layout systems, and attention to design details. No frameworks needed when the fundamentals are solid.