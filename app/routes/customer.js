module.exports = app => {
    const customers = require("../controllers/customer.controller.js");

    app.post("/customers", customers.create);

    app.put("/customers/:customerId", customers.update);
  
  };
