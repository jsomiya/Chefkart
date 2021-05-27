const Chef = require("../models/chef.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message:"Cannot be empty"
        });
    }
    const chef = new Chef({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    yoe:req.body.yoe,
    worktiming:req.body.worktiming,
    foodpreference:req.body.foodpreference,
    expertise:req.body.expertise,
    });

    Chef.create(chef, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Chef."
          });
        else res.send(data);
      });
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Chef.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving chefs."
          });
        else res.send(data);
      });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    Chef.findById(req.params.chefId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Chef with id ${req.params.chefId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Chef with id " + req.params.chefId
            });
          }
        } else res.send(data);
      });
};