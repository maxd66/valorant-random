const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    min: [6, "username too short"],
    max: [24, "username too long"],
  },
  password: {
    type: String,
    trim: true,
    min: [8, "password too short"],
    max: [64, "password too long"],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
