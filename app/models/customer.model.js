const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.name = customer.name;
  this.age = customer.age;
  this.email = customer.email;
  this.gender = customer.gender;
  this.duration = customer.duration;
  this.worktiming = customer.worktiming;
  this.foodpreference = customer.foodpreference;
};

Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};


Customer.updateById = (id, customer, result) => {
    sql.query(
      "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
      [customer.email, customer.name, customer.active, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated customer: ", { id: id, ...customer });
        result(null, { id: id, ...customer });
      }
    );
  };

  module.exports = Customer;