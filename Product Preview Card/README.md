# Frontend Mentor | Product Preview Card Component

![Design preview for the Product preview card component coding challenge](./design/desktop-preview.jpg)

## 🔗 Links

- **Live Site:** [https://product-card-woad-alpha.vercel.app/](https://product-card-woad-alpha.vercel.app/)
- **Solution:** [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/your-solution-url)
- **Repository:** [GitHub](https://github.com/omofon/Personal-Projects/tree/25d1d8ca6e6bbbdc7c86fd481f151ac2d6ad42c4/Frontend%20Mentor/Product%20Preview%20Card)

## 📋 Challenge

Build a responsive e-commerce product card that displays different images based on screen size and includes hover states for interactive elements. The layout shifts from horizontal (desktop) to vertical (mobile) while maintaining visual hierarchy.

## 🎯 What I Built

A production-ready product card component with responsive image handling using the HTML `<picture>` element. The key challenge was implementing proper art direction—serving different image crops optimized for each viewport rather than just scaling a single image.

## 🖼️ Screenshots

| Desktop View | Mobile View |
|:---:|:---:|
| ![Desktop](./design/desktop-design.jpg) | ![Mobile](./design/mobile-design.jpg) |

## 🛠️ Built With

- Semantic HTML5 (`<article>`, `<picture>`)
- CSS Flexbox for card layout
- CSS Grid (if used for content arrangement)
- Responsive images with `<picture>` element
- CSS custom properties
- Mobile-first workflow

## 💡 Key Technical Decisions

### Responsive Image Strategy

Implemented the `<picture>` element for art direction:

```html
<picture>
  <source
    media="(max-width: 600px)"
    srcset="images/image-product-mobile.jpg"
  />
  <img
    src="images/image-product-desktop.jpg"
    alt="Product image of Gabrielle Essence Eau De Parfum"
  />
</picture>
```

**Why this matters:** Using `<picture>` instead of CSS background images or simple `<img>` srcset provides true art direction. The mobile image is cropped differently (vertical orientation) rather than just scaled down. This delivers better performance (smaller file on mobile) and better UX (optimal composition per viewport).

### Semantic E-commerce Markup

Structured the card with proper semantic HTML:

```html
<article class="main-box">
  <h1 class="product-name">Gabrielle Essence Eau De Parfum</h1>
  <div class="product-price">
    <span class="current-price">$149.99</span>
    <span class="old-price">$169.99</span>
  </div>
  <button class="cart-btn">
    <img src="images/icon-cart.svg" alt="" aria-hidden="true" />
    <span>Add to Cart</span>
  </button>
</article>
```

**Accessibility consideration:** The cart icon uses `aria-hidden="true"` because it's decorative—the button text already conveys the action. Screen readers skip the icon and announce "Add to Cart" clearly.

### Price Display Pattern

Implemented a common e-commerce pattern for showing discounts:

```css
.product-price {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.current-price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.old-price {
  text-decoration: line-through;
  color: var(--muted-color);
}
```

**UX principle:** Large, bold current price draws attention. Struck-through original price provides context for the deal without competing visually.

## 📈 What I Learned

1. **`<picture>` vs `srcset` vs CSS backgrounds:** Each has specific use cases. `<picture>` for art direction (different crops), `srcset` for resolution switching (same image, different sizes), CSS backgrounds for decorative images that shouldn't be in the DOM.

2. **Mobile-first prevents desktop assumptions:** Building mobile layout first forced me to think about content priority. The desktop layout is an enhancement, not the baseline.

3. **Button accessibility requires more than just semantic HTML:** Icon-only buttons need aria-labels, but buttons with text should hide decorative icons from screen readers to avoid redundant announcements.

## 🚀 Future Improvements

- **Add to cart interaction:** Implement button loading state and success feedback
- **Image zoom on hover:** Desktop users expect to see product details on hover
- **Quantity selector:** Add input for selecting multiple items
- **Micro-animations:** Subtle transitions on hover states for polish

## 🏗️ Project Structure

```
product-preview-card/
├── design/              # Reference designs
├── images/              # Product images (desktop & mobile)
│   ├── image-product-desktop.jpg
│   ├── image-product-mobile.jpg
│   └── icon-cart.svg
├── index.html          # Semantic markup
└── index.css           # Component styles
```

## 👤 Author

- Frontend Mentor: [@omofon](https://www.frontendmentor.io/profile/omofon)
- GitHub: [@omofon](https://github.com/omofon)
- Dev.to: [@omofon](https://dev.to/omofon)

---

**Technical highlight:** Demonstrates understanding of responsive image techniques beyond simple scaling—proper art direction for optimal UX across devices.