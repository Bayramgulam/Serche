import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: ".",
  testMatch: "tests.spec.ts",
  workers: 2,
  use: { headless: true, channel: "chrome" },
  reporter: "list",
  timeout: 45000,
});
