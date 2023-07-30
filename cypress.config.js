const { defineConfig } = require("cypress");


module.exports = defineConfig({
  env: {
    url: "https://admin-demo.nopcommerce.com/login",
    reg_url:"demo.automation testing.in/register.html",
    userName: "admin@yourstore.com",
    password: "admin",
  },
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
