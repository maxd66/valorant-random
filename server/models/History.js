const mongoose = require("mongoose");

const { Schema } = mongoose;

const HistorySchema = new Schema({
  agentsGenerated: {
    type: Number,
    default: 0,
  },
  weaponsGenerated: {
    type: Number,
    default: 0,
  },
  strategiesGenerated: {
    type: Number,
    default: 0,
  },
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
