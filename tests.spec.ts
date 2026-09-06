import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
for (const width of [360, 390, 768, 1024, 1440]) {
  test(`responsive ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/menu"]) {
      await page.goto("http://localhost:3000" + route);
      await expect(page.locator("h1")).toBeVisible();
      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        )
        .toBe(true);
      await page.screenshot({
        path: `test-results/${route === "/menu" ? "menu" : "home"}-${width}.png`,
        fullPage: true,
      });
    }
  });
}
test("search, categories, deep links, unavailable and empty states", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://localhost:3000/menu?category=qehve");
  await expect(page.locator(".menu-item")).toHaveCount(3);
  const search = page.getByRole("searchbox");
  await search.fill("QEHVE");
  await expect(page.locator(".menu-item")).toHaveCount(2);
  await page.getByRole("button", { name: "Axtarışı təmizlə" }).click();
  await page.getByRole("button", { name: "Hamısı", exact: true }).click();
  await expect(page.locator(".menu-item")).toHaveCount(10);
  await search.fill("SÜD");
  await expect(page.locator(".menu-item")).toHaveCount(2);
  await search.fill("zzzz");
  await expect(page.getByText("Bu dəfə tapılmadı.")).toBeVisible();
  await page.getByRole("button", { name: "Bütün menyunu göstər" }).click();
  for (const name of [
    "Qəhvə",
    "Soyuq içkilər",
    "Səhər yeməyi",
    "Sendviçlər",
    "Salatlar",
    "Pasta",
    "Desertlər",
  ]) {
    await page.getByRole("button", { name, exact: true }).click();
    await expect(page.locator(".menu-section")).toHaveCount(1);
    await expect(page.locator(".menu-section h2")).toHaveText(name);
  }
  await page
    .getByRole("button", { name: "Soyuq içkilər", exact: true })
    .click();
  await expect(page.getByText("Mövcud deyil", { exact: true })).toBeVisible();
  await page.reload();
  await expect(page.locator(".menu-section h2")).toHaveText("Soyuq içkilər");
  expect(errors).toEqual([]);
});
test("mobile keyboard focus and reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("http://localhost:3000");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Məzmuna keç" })).toBeFocused();
  const trigger = page.getByRole("button", { name: "Naviqasiyanı aç" });
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(() => !!document.activeElement?.closest("dialog")),
    ).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});
test("accessibility and missing page", async ({ page }) => {
  for (const route of ["/", "/menu"]) {
    await page.goto("http://localhost:3000" + route);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  }
  const response = await page.goto("http://localhost:3000/missing");
  expect(response?.status()).toBe(404);
  await expect(page.getByText("Sərçə başqa")).toBeVisible();
});
