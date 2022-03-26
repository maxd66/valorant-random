const User = require("../models/User");
const History = require("../models/History");
const { signToken } = require("../utils/auth");

const userController = {
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .populate("userHistory")
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  getSingleUser(req, res) {
    User.findById(req.params.userId)
      .populate("userHistory")
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ msg: "user not found" });
        }
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  createUser: async function (req, res) {
    const userHistory = await History.create({});
    User.create({ ...req.body, userHistory: userHistory._id })
      .then((userData) => {
        const token = signToken(userData);
        res.json({ userData, token });
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  login: async function (req, res) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ msg: "user not found" });
    }
    const correctPassword = user.isCorrectPassword(req.body.password);
    if (correctPassword) {
      const token = signToken(user);
      res.json({ user, token });
    } else {
      res.status(401).json({ msg: "login information incorrect" });
    }
  },
  updateUser(req, res) {},
  deleteUser(req, res) {},
};

module.exports = userController;
