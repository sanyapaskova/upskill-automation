const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

export default defineConfig({
  e2e: {
    baseUrl: 'https://automatenow.io/sandbox-automation-testing-practice-website/',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    env: {
      login_url: 'https://automatenow.io/sandbox-automation-testing-practice-website/',
      username: '',
      password: ''
    },
    specPattern: ["cypress/e2e/features/*.feature","cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
  },
})
