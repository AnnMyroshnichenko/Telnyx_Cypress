const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "afzvme",

  e2e: {
    baseUrl: "https://telnyx.com/",
    defaultCommandTimeout: 10000,
    video: false,
    screenshotOnRunFailure: true,
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
