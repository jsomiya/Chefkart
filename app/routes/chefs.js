module.exports = app => {
    const chef = require("../controllers/chef.controller.js");

    app.post("/chef", chef.create);

    app.get("/chef", chef.findAll);
  
    app.get("/chef/:chefId", chef.findOne);
  
  };