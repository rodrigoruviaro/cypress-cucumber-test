const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: "cypress/e2e/step_definitions/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
  },
});