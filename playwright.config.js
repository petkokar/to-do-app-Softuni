const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Adjust to your tests directory
  timeout: 10000, // Default timeout of 10 seconds
  reporter: [['list']], // Minimal reporter, doesn't create test-results folder
  use: {
    headless: true,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 10000,
  },
});