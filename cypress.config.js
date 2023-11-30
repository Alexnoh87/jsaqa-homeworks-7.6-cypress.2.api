const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9akpth",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
  },
});
