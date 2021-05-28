const sql = require("./db.js");

const Chef = function(chef){
  this.name = chef.name;
  this.age = chef.age;
  this.gender = chef.gender;
  this.yoe = chef.yoe;
  this.worktiming = chef.worktiming;
  this.food_preference = chef.food_preference;
  this.expertise=chef.expertise;
};

Chef.create = (newChef, result) => {
  sql.query("INSERT INTO chef SET ?", newChef, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created chef: ", { id: res.insertId, ...newChef });
    result(null, { id: res.insertId, ...newChef });
  });
};

Chef.findById = (chefId, result) => {
    sql.query(`SELECT * FROM chef WHERE id = ${chefId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found chef: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    });
  };
  
Chef.getAll = result => {
    sql.query("SELECT * FROM chef", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("chefs: ", res);
      result(null, res);
    });
  };

  module.exports = Chef;