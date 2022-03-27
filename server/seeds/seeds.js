const mongoose = require("mongoose");
const strategySeeds = require("./strategies");

const Strategy = require("../models/Strategy.js");

mongoose.connect("mongodb://localhost/valorant_random_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
