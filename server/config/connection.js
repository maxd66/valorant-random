const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/valorant_random_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
