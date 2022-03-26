const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  email: {
    type: String,
    trim: true,
  },
  userHistory: {
    type: Schema.Types.ObjectId,
    ref: "History",
  },
  riotUsername: {
    type: String,
    trim: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
