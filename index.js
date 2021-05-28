const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Chefkart" });
});

require("./app/routes/chefs.js")(app);
require("./app/routes/customer.js")(app);
require("./app/routes/requirement.js")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});