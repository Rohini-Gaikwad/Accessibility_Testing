const { test, expect } = require("@playwright/test");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const demoPageUrl = pathToFileURL(
  path.resolve(__dirname, "../../src/pages/accessibility-demo.html"),
).href;

test.beforeEach(async ({ page }) => {
  await page.goto(demoPageUrl);
});

test("skip link is first in keyboard order and targets main content", async ({
  page,
}) => {
  const skipLink = page.getByRole("link", { name: "Skip to main content" });

  await page.keyboard.press("Tab");

  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/#main-content$/);
  await expect(page.getByRole("main")).toBeVisible();
});

test("Tab and Shift+Tab follow the expected navigation order", async ({
  page,
}) => {
  const expectedFocusOrder = [
    page.getByRole("link", { name: "Skip to main content" }),
    page.getByRole("link", { name: "Inclusive Web" }),
    page.getByRole("link", { name: "Overview", exact: true }),
    page.getByRole("link", { name: "Guidelines", exact: true }),
    page.getByRole("link", { name: "Checklist", exact: true }),
    page.getByRole("link", { name: "Contact", exact: true }),
  ];

  for (const locator of expectedFocusOrder) {
    await page.keyboard.press("Tab");
    await expect(locator).toBeFocused();
  }

  for (const locator of expectedFocusOrder.slice(0, -1).reverse()) {
    await page.keyboard.press("Shift+Tab");
    await expect(locator).toBeFocused();
  }
});

test("keyboard-focused links have a visible focus indicator", async ({
  page,
}) => {
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });

  await expect(skipLink).toBeFocused();
  await expect(skipLink).toHaveCSS("outline-style", "solid");
  await expect(skipLink).toHaveCSS("outline-width", "3px");
});

test("navigation links activate with Enter", async ({ page }) => {
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");

  const overviewLink = page.getByRole("link", { name: "Overview", exact: true });
  await expect(overviewLink).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/#overview$/);
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
});

test("form controls are keyboard accessible and select options work with arrow keys", async ({
  page,
}) => {
  const controlsInTabOrder = [
    page.getByRole("link", { name: "Skip to main content" }),
    page.getByRole("link", { name: "Inclusive Web" }),
    page.getByRole("link", { name: "Overview", exact: true }),
    page.getByRole("link", { name: "Guidelines", exact: true }),
    page.getByRole("link", { name: "Checklist", exact: true }),
    page.getByRole("link", { name: "Contact", exact: true }),
    page.getByLabel("Full name"),
    page.getByLabel("Email address"),
    page.getByLabel("Topic"),
    page.getByLabel("Message"),
    page.getByRole("button", { name: "Submit request" }),
  ];

  for (const control of controlsInTabOrder) {
    await page.keyboard.press("Tab");
    await expect(control).toBeFocused();
  }

  await page.keyboard.press("Shift+Tab");
  const message = page.getByLabel("Message");
  await expect(message).toBeFocused();

  await page.keyboard.press("Shift+Tab");
  const topic = page.getByLabel("Topic");
  await expect(topic).toBeFocused();
  await page.keyboard.press("ArrowDown");

  await expect(topic).toHaveValue("keyboard");
});
