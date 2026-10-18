const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const demoPageUrl = pathToFileURL(
  path.resolve(__dirname, "../../src/pages/accessibility-demo.html"),
).href;

const wcagTags = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
];

function formatViolations(violations) {
  return violations
    .map((violation) => {
      const nodes = violation.nodes
        .map(
          (node) =>
            `  ${node.html}\n  ${node.failureSummary || "No additional details"}`,
        )
        .join("\n");

      return `${violation.id} (${violation.impact}): ${violation.help}\n${nodes}`;
    })
    .join("\n\n");
}

test.beforeEach(async ({ page }) => {
  await page.goto(demoPageUrl);
});

test("Axe reports no WCAG A/AA violations on the complete page", async ({
  page,
}) => {
  const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze();

  expect(
    results.violations,
    formatViolations(results.violations) || "No accessibility violations found.",
  ).toEqual([]);
});

test("Axe reports no WCAG A/AA violations in the contact form", async ({
  page,
}) => {
  const results = await new AxeBuilder({ page })
    .include("#contact")
    .withTags(wcagTags)
    .analyze();

  expect(
    results.violations,
    formatViolations(results.violations) || "No form accessibility violations found.",
  ).toEqual([]);
});

test("Axe reports no colour contrast violations on the page", async ({
  page,
}) => {
  const results = await new AxeBuilder({ page })
    .withRules(["color-contrast"])
    .analyze();

  expect(
    results.violations,
    formatViolations(results.violations) || "No colour contrast violations found.",
  ).toEqual([]);
});
