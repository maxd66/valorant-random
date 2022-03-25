const mongoose = require("mongoose");

const { Schema } = mongoose;

const StrategySchema = new Schema({
  side: {
    type: String,
    enum: ["attack", "defend", "both"],
    default: "both",
  },
  class: {
    type: String,
    enum: ["funny", "tactical"],
    default: "funny",
  },
  requiredPlayers: {
    type: Number,
    default: 1,
  },
  title: String,
  description: String,
  wins: Number,
  losses: Number,
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const Strategy = mongoose.model("Strategy", StrategySchema);

module.exports = Strategy;
