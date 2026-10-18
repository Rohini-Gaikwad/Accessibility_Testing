# Accessibility Testing

This project focuses on evaluating and improving web accessibility across keyboard navigation, screen reader compatibility, colour contrast, and WCAG conformance.

## Project structure

```text
Accessibility_Testing/
├─ README.md
├─ package.json
├─ playwright.config.js
├─ .gitignore
├─ src/
│  └─ pages/
│     └─ accessibility-demo.html
├─ tests/
│  └─ accessibility/
│     └─ page-structure.spec.js
├─ playwright-report/
├─ test-results/
├─ allure-results/
└─ node_modules/
```

## Overview

Accessibility testing ensures that applications are usable without a mouse, readable with assistive technology, visually understandable for low-vision users, and aligned with recognised accessibility standards.

This project covers the following core areas:

- Keyboard navigation
- Screen reader compatibility
- Colour contrast
- WCAG conformance
- Focus management and interactive element accessibility

## 1. Keyboard Navigation Testing

Keyboard accessibility is essential for users who cannot use a mouse or touch input. Testing should verify that all core interactions can be completed using only the keyboard.

### Key checks

- All interactive elements are reachable via Tab and Shift+Tab
- Logical focus order matches the visual and reading order
- Focus indicators are clearly visible
- Skip links are provided for repeated content
- Menus, modals, and dialogs trap focus correctly and release it on close
- Keyboard shortcuts do not conflict with browser or assistive technology behaviour
- Enter and Space keys activate buttons and other interactive controls appropriately
- Users can complete forms without a mouse
- Escape closes dialogs or overlays when expected

## 2. Screen Reader Compatibility Testing

Screen readers such as NVDA, JAWS, VoiceOver, and TalkBack are used to interpret content for visually impaired users. A web interface should be understandable and navigable through semantic markup and meaningful labels.

### Key checks

- Elements have accessible names and labels
- Heading structure is logical and sequential
- Landmarks are used correctly (header, main, nav, footer, form regions)
- Images use meaningful alt text or are marked decorative when appropriate
- Form controls are associated with labels
- ARIA is used only when necessary and correctly
- Live regions announce dynamic updates without creating noise
- Links and buttons have clear and descriptive text
- Reading order matches the intended content flow

## 3. Colour Contrast Testing

Colour contrast is critical for users with low vision, colour blindness, or glare issues. Text and essential interface elements must remain readable against their backgrounds.

### Key checks

- Text contrast meets WCAG minimum recommendations
- UI components and state indicators are distinguishable without relying on colour alone
- Link states and focus states are visible
- Disabled or inactive elements are not confused with active states
- Charts, icons, and form states maintain enough contrast for readability

### WCAG contrast guidance

- Normal text: minimum 4.5:1 contrast ratio
- Large text: minimum 3:1 contrast ratio
- UI components and graphical objects: usually 3:1 minimum
- AAA level offers stronger contrast for stricter accessibility standards

## 4. WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a global standard for making digital content more accessible. The guidelines are organised around four principles:

### Perceivable

Users must be able to perceive information presented to them.

### Operable

Users must be able to operate interface components and navigation.

### Understandable

Information and operation of the interface must be understandable.

### Robust

Content must be robust enough to work with current and future assistive technologies.

## WCAG Conformance Levels

WCAG defines conformance levels as follows:

- A: basic accessibility requirements
- AA: commonly required level for many organisations and regulations
- AAA: highest level of accessibility, not always required for all content

## Running tests

```bash
npm install
npm run test:a11y
```

## Best Practices

- Build semantic HTML before adding custom widgets
- Keep focus states visible and consistent
- Use plain language and clear labels
- Do not rely on colour alone to convey meaning
- Test accessibility early in the development cycle
- Include accessibility checks in CI/CD pipelines

## Conclusion

Accessibility testing is a continuous part of quality assurance and user experience design. By validating keyboard support, screen reader compatibility, colour contrast, and WCAG compliance, teams can build more inclusive and usable digital products.

