const mongoose = require("mongoose");

const { Schema } = mongoose;

const StrategySchema = new Schema({
  side: {
    type: String,
    enum: ["attack", "defend", "na"],
    default: "na",
  },
  class: {
    type: String,
    enum: ["funny", "tactical"],
    default: "funny",
  },
  recommendedMinimumPlayers: {
    type: Number,
    default: 1,
  },
  title: String,
  description: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const Strategy = mongoose.model("Strategy", StrategySchema);

module.exports = Strategy;
