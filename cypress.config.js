// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter:'cypress-mochawesome-reporter',
reporterOptions:{
  mochaFile:'results/my-test-output.xml',
  reportPageTitle:'Cypress Intuji-Challenge-Report',
  toConsole:true,
  charts:true,
  overwrite:false,
  embeddedScreenshots:true
},
  //
  e2e: {
    
    testIsolation:false,
    watchForFileChanges:false,
    chromeWebSecurity:false,
    viewportWidth:1000,
    viewportHeight:600,
    waitForAnimations:true,
    animationDistanceThreshold:30,
    defaultCommandTimeout:6000,
    execTimeout:60000,
    pageLoadTimeout:60000,
    requestTimeout:15000,
    responseTimeout:15000,
    video:true,
    failOnStatusCode:false,
    

    setupNodeEvents(on,config) {
      // implement the test run pattern
// config.specPattern={
//   'cypress/e2e/tests/RegisterTest.cy.js':
//   'cypress/e2e/tests/LoginTest.cy.js',
//   'cypress/e2e/tests/ProductTest.cy.js':
//   'cypress/e2e/tests/AddToCartTest.cy.js',
//   'cypress/e2e/tests/CheckoutTest.cy.js':
// }
// return config
     // addMatchImageSnapshotPlugin(on,config);
      //require('@simonsmith/cypress-image-snapshot/plugin')(on);
      //return getCompareSnapshotsPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
     
    },
  },
});
