const mongoose = require("mongoose");
const strategySeeds = require("./strategies");

const Strategy = require("../models/Strategy.js");

mongoose.connect("mongodb://localhost/valorant_random_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDb = async () => {
  await Strategy.insertMany(strategySeeds);
};

seedDb()
  .then((response) => {
    console.log(response);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
