module.exports = app => {
    const chef = require("../controllers/chef.controller.js");

    app.post("/chef/register", chef.create);

    app.get("/getchef/all", chef.findAll);
  
    app.get("/getchef/:chefId", chef.findOne);
  
  };