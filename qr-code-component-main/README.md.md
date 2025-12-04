# Frontend Mentor | QR Code Component

![Design preview for the QR code component coding challenge](./design/desktop-design.jpg)

## 🔗 Links

- **Live Site:** [https://qrcode-omofz.vercel.app/](https://qrcode-omofz.vercel.app/)
- **Solution:** [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/your-solution-url)
- **Repository:** [GitHub](https://github.com/omofon/Personal-Projects/tree/04e20d49c3c47aeae421de5cd5c94061db90d14c/Frontend%20Mentor/qr-code-component-main)

## 📋 Challenge

Build a simple QR code card component that's centered on the page and responsive across devices. This foundational challenge focuses on core CSS layout techniques and clean HTML structure.

## 🛠️ Built With

- Semantic HTML5 markup
- CSS Flexbox for centering
- CSS custom properties
- Google Fonts (Outfit)
- Mobile-first approach

## 💡 Key Implementation

### Centering Technique

Used flexbox on the body to achieve perfect viewport centering:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
```

**Why this works:** Setting `min-height: 100vh` ensures the body takes full viewport height, while flexbox properties center the card both horizontally and vertically. This is the modern, reliable approach that works across all screen sizes.

### Responsive Images

Implemented fluid images that scale with their container:

```css
.qr img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
}
```

**Detail that matters:** `display: block` removes the default inline spacing below images. Without it, there's unwanted whitespace—small detail that separates clean code from sloppy implementations.

## 🏗️ Project Structure

```
qr-code-component/
├── design/              # Reference designs
├── images/              # QR code image and favicon
├── index.html          # Component markup
└── style.css           # Component styles
```

## 👤 Author

- Frontend Mentor: [@omofon](https://www.frontendmentor.io/profile/omofon)
- GitHub: [@omofon](https://github.com/omofon)

---

**Foundation project:** Demonstrates proficiency in CSS fundamentals—centering, spacing, typography, and responsive images.