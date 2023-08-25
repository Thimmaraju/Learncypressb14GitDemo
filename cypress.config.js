const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "specPattern": "**/*.feature",
    "projectId": "b9dxge",
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    "defaultCommandTimeout":20000,
    "pageLoadTimeout": 120000, 
    //"viewportWidth": 820,
    //"viewportHeight": 1180,
    "retries" : {"runMode":1},
    //specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    //excludeSpecPattern:"cypress/e2e/regressiontests/actions.cy.js",

    env: {

        "url2": "www.xyz.com",
        "username": "Admin",
        "password": "admin123"

    },
    "video":true,
    //"videosFolder":"cypress/Raju",


    setupNodeEvents(on, config) {

      return require('./cypress/plugins/index.js')(on, config)
      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      // allureWriter(on, config);
      //       return config;
            
    },
  },
});
