# Frontend Mentor | Newsletter Sign-up Form with Success Message

![Design preview for the Newsletter sign-up form with success message coding challenge](./design/desktop-preview.jpg)

## 🔗 Links

- **Live Site:** [Live Site](https://newsletter-signup-mauve.vercel.app/)
- **Repository:** [GitHub](https://github.com/omofon/Personal-Projects/tree/7d935e9c994b299caaad11fb938f2398e14bf2c3/Frontend%20Mentor)

## 📋 Challenge

Build a newsletter signup form with client-side email validation and a success state. The form must validate email format in real-time, display appropriate error messages, and transition to a success view that displays the submitted email address.

## 🎯 What I Built

A production-ready newsletter form with robust JavaScript validation and state management. This project demonstrates handling form validation, DOM manipulation, view transitions, and user feedback—core skills for any interactive web application.

## 🖼️ Screenshots

|              Desktop Form               |             Mobile Success              |
| :-------------------------------------: | :-------------------------------------: |
| ![Desktop](./design/desktop-design.jpg) | ![Success](./design/mobile-success.jpg) |

## 🛠️ Built With

- Semantic HTML5 (`<form>`, `<article>`)
- CSS custom properties for theming
- CSS Flexbox for responsive layouts
- Vanilla JavaScript for form validation
- Regular expressions for email validation
- Mobile-first responsive workflow
- CSS transitions for view states

## 💡 Key Technical Decisions

### Email Validation Strategy

Implemented real-time validation with regex pattern matching:

```javascript
const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function toggleErrorState(isValid) {
  if (isValid) {
    emailInput.classList.remove("invalid");
    emailError.textContent = "";
  } else {
    emailInput.classList.add("invalid");
    emailError.textContent = errorMessage;
  }
}
```

**Why this approach:** The regex validates basic email structure (local@domain.tld) without over-engineering. While not RFC-compliant, it catches 99% of user errors. Server-side validation would handle edge cases in production.

**Real-time feedback:** Validation runs on submit AND on input after initial error. This prevents annoying red errors while typing but provides immediate feedback once the user corrects their mistake.

### State Management Without Framework

Managed view transitions using class toggling:

```javascript
function transitionToSuccess(email) {
  userEmailDisplay.textContent = email;

  signupView.classList.add("hidden");
  successView.classList.remove("hidden");
}

function handleDismiss() {
  emailInput.value = "";
  userEmailDisplay.textContent = "";

  successView.classList.add("hidden");
  signupView.classList.remove("hidden");
}
```

**Design decision:** Used CSS `.hidden { display: none !important; }` instead of JavaScript-controlled inline styles. Keeps styling logic in CSS where it belongs. The `!important` ensures the class always wins over specificity issues.

### Error State Styling

Implemented visual error feedback with CSS:

```css
.signup-form input.invalid {
  background-color: var(--color-red-light);
  border: 1px solid var(--color-red);
  color: var(--color-red);
}

.email-error {
  color: var(--color-red);
  font-weight: var(--font-weight-bold);
  font-size: 0.75rem;
}
```

**UX consideration:** Error states use multiple visual cues—border color, background tint, text color, AND error message. Redundant feedback ensures users understand something's wrong regardless of color perception abilities.

### Responsive Image Art Direction

Used `<picture>` element with multiple sources:

```html
<picture>
  <source
    media="(min-width: 1024px)"
    srcset="illustration-sign-up-desktop.svg"
  />
  <source media="(min-width: 768px)" srcset="illustration-sign-up-tablet.svg" />
  <img src="illustration-sign-up-mobile.svg" alt="..." />
</picture>
```

**Performance benefit:** Serves appropriately sized images per viewport. Mobile users don't download unnecessary desktop assets.

## 📈 What I Learned

1. **Form validation requires defensive programming.** Can't trust user input—validate on blur, on submit, and provide clear error recovery paths. The `.trim()` method prevents sneaky whitespace-only submissions.

2. **Event listeners need cleanup consideration.** Used `addEventListener` instead of inline `onclick`. In a SPA, I'd remove these listeners on component unmount to prevent memory leaks, but for a single-page static site, this pattern is fine.

3. **Regex is powerful but not perfect for email validation.** The regex catches most errors but allows technically invalid emails like `a@b.c`. Production apps need server-side verification anyway—client-side is just UX enhancement.

4. **State management doesn't always need a framework.** For simple view transitions, class toggling is cleaner than React state. Know when complexity justifies tooling.

## 🚀 Future Improvements

- **Accessibility enhancements:** Add ARIA live regions to announce validation errors to screen readers
- **Loading states:** Show spinner during "submission" to simulate API call
- **Animation polish:** Add slide/fade transitions between form and success views
- **Email confirmation:** Store email in sessionStorage to persist if user refreshes on success page
- **More robust validation:** Check for disposable email domains, validate TLDs against known list

## 🏗️ Project Structure

```
newsletter-signup-form/
├── assets/
│   └── images/              # Illustrations and icons
├── design/                  # Reference designs
├── styles/
│   └── index.css           # Component styles
├── index.html              # Form markup
├── index.js                # Validation logic
└── style-guide.md          # Design specifications
```

## 👤 Author

- Frontend Mentor: [@omofon](https://www.frontendmentor.io/profile/omofon)
- GitHub: [@omofon](https://github.com/omofon)

---

**Technical highlight:** Demonstrates form validation patterns, state management, and progressive enhancement—submits would work server-side if JavaScript failed, then JS enhances with client-side validation.
