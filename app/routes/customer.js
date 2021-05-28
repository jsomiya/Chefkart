module.exports = app => {
    const customers = require("../controllers/customer.controller.js");

    app.post("/customers/register", customers.create);

    app.put("/getcustomers/:customerId", customers.update);
  
  };
