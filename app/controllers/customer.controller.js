const Customer = require("../models/customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const customer = new Customer({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        gender: req.body.gender,
        duration: req.body.duration,
        worktiming: req.body.worktiming,
        foodpreference:req.body.foodpreference,
      });

  
      Customer.create(customer, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Customer."
          });
        else res.send(data);
      });
    };

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      Customer.updateById(
        req.params.customerId,
        new Customer(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Customer with id ${req.params.customerId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Customer with id " + req.params.customerId
              });
            }
          } else res.send(data);
        }
      );
    };
