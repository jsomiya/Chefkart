module.exports = app => {
    const requirement = require("../controllers/requirement.controller.js");

    app.post("/customers/requirement", requirement.create);
  
  };
