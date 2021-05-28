const sql = require("./db.js");

const Requirement = function(requirement){
  this.gender = requirement.gender;
  this.duration = requirement.duration;
  this.worktiming = requirement.worktiming;
  this.food_preference = requirement.food_preference;
  this.expertise = requirement.expertise;
};

Requirement.create = (newRequirement, result) => {
  sql.query("INSERT INTO requirement SET ?", newRequirement, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created requirement ", { id: res.insertId, ...newRequirement });
    result(null, { id: res.insertId, ...newRequirement });
  });
};

module.exports = Requirement;