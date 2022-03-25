const mongoose = require("mongoose");

const { Schema } = mongoose;

const HistorySchema = new Schema({
  agentsGenerated: Number,
  weaponsGenerated: Number,
  strategiesGenerated: Number,
  lastTenAgents: {
    type: [String],
    validate: [
      arrayLimit,
      "array will exceed 10, just fyi this should never happen if front end logic is working properly.",
    ],
  },
});

function arrayLimit(val) {
  return val.length <= 10;
}
const History = mongoose.model("History", HistorySchema);

module.exports = History;
