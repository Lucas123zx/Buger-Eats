const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 50000,
    baseUrl : "https://buger-eats.vercel.app/",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    nonGlobalStepDefinitions: false,
    specPattern: "**/*.feature"

  },
});
