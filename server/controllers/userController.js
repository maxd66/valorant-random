const { User } = require("../models");

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
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
};

module.exports = userController;
