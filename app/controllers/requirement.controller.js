const Requirement = require("../models/requirement.model.js");

exports.create = (req, res) => {
  if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const requirement = new Requirement({
      gender: req.body.gender,
      duration: req.body.duration,
      worktiming:req.body.worktiming,
      food_preference:req.body.food_preference,
      expertise:req.body.expertise
    });


    Requirement.create(requirement, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Requirement."
        });
      else res.send(data);
    });
  };
