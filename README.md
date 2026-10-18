# Accessibility Testing

This project focuses on evaluating and improving web accessibility across common user experience barriers, including keyboard navigation, screen reader compatibility, colour contrast, and compliance with WCAG guidelines.

The goal is to help teams build inclusive digital experiences that are usable by people with different abilities and assistive technologies.

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

### Example keyboard test scenarios

- Navigate through a page using only the keyboard
- Confirm the focus lands on the expected element after each action
- Verify all validation errors are announced and focus is managed correctly
- Test modal dialog behaviour to ensure focus remains within the dialog until it closes

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

### Example screen reader checks

- Verify that page regions are announced correctly
- Confirm form labels are read accurately
- Ensure status updates such as validation or success messages are announced
- Test page navigation using headings and landmarks

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

Examples:
- Provide text alternatives for non-text content
- Use sufficient contrast for text and visual elements
- Ensure content can be presented in different ways without loss of information

### Operable

Users must be able to operate interface components and navigation.

Examples:
- Support keyboard-only interaction
- Avoid content that can trigger seizures or distractions
- Provide enough time and controls for users to complete actions

### Understandable

Information and operation of the interface must be understandable.

Examples:
- Make text readable and understandable
- Ensure predictable interaction behaviour
- Provide helpful error guidance and form instructions

### Robust

Content must be robust enough to work with current and future assistive technologies.

Examples:
- Use valid, semantic HTML
- Ensure compatibility with assistive technologies
- Maintain accessibility as the interface evolves

## WCAG Conformance Levels

WCAG defines conformance levels as follows:

- A: basic accessibility requirements
- AA: commonly required level for many organisations and regulations
- AAA: highest level of accessibility, not always required for all content

Many accessibility initiatives aim for WCAG 2.1 or 2.2 AA compliance as a strong baseline.

## Recommended Testing Approach

A good accessibility testing strategy combines automated and manual review:

- Use automated tools such as axe, Lighthouse, and Playwright accessibility checks
- Test keyboard-only flows manually
- Validate with screen readers in real-use conditions
- Check contrast ratios with design and browser tools
- Review page structure and semantics in the browser accessibility tree
- Perform testing across desktop and mobile layouts

## Best Practices

- Build semantic HTML before adding custom widgets
- Keep focus states visible and consistent
- Use plain language and clear labels
- Do not rely on colour alone to convey meaning
- Test accessibility early in the development cycle
- Include accessibility checks in CI/CD pipelines

## Example Accessibility Checklist

- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus order is logical and visible
- [ ] Screen reader labels and announcements are correct
- [ ] Images and icons have appropriate alt text or accessible alternatives
- [ ] Colour contrast meets WCAG thresholds
- [ ] Forms are labelled and error messages are understandable
- [ ] Page structure uses semantic headings and landmarks
- [ ] Dynamic content is announced correctly
- [ ] No accessibility violations are reported by automated tooling

## Tools and Technologies

This project is designed to support automated and practical accessibility testing using modern web testing tools, including:

- Playwright
- axe-core
- Browser developer tools
- Accessibility inspection tools
- Screen readers for manual validation

## Conclusion

Accessibility testing is not a one-time task; it is an ongoing part of quality assurance and user experience design. By validating keyboard support, screen reader compatibility, colour contrast, and WCAG compliance, teams can build more inclusive and usable digital products.

This repository serves as a practical foundation for conducting accessibility-focused test coverage and raising awareness of inclusive design principles.

## License

This project is intended for accessibility testing and educational use in evaluating web application quality and inclusivity.

