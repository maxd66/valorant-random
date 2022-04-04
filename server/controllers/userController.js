const User = require("../models/User");
const History = require("../models/History");
const { signToken } = require("../utils/auth");
const { find } = require("../models/User");

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
    if (req.params.userId === req.user?._id) {
      User.findById(req.params.userId)
        .populate("userHistory")
        .then((userData) => {
          if (!userData) {
            res.status(404).json({ msg: "user not found" });
            return;
          }
          res.json(userData);
        })
        .catch((err) => {
          console.log(err);
          res.json(err);
        });
    }
  },
  checkUsername: async function (req, res) {
    const userInfo = await User.find({ username: req.params.un });
    if (userInfo[0]) {
      res.json({ result: true });
    } else {
      res.json({ result: false });
    }
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
  updateUser(req, res) {
    if (req.params.userId === req.user._id) {
      User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        .then((userData) => {
          const newToken = signToken(userData);
          res.json({ userData, token: newToken });
        })
        .catch((err) => {
          console.log(err);
          res.json(err);
        });
    } else {
      res.json({ msg: "you can only update your own account info." });
    }
  },
  deleteUser(req, res) {
    if (req.params.userId === req.user._id) {
      User.findByIdAndDelete(req.params.userId)
        .then((dbResponse) => {
          res.json(dbResponse);
        })
        .catch((err) => {
          console.log(err);
          res.json(err);
        });
    } else {
      res.json({ msg: "you can only delete your own account." });
    }
  },
  updateHistory: async function (req, res) {
    if (req.params.userId === req.user._id) {
      const user = await User.findById(req.params.userId);
      const historyId = user.userHistory;
      switch (req.params.field) {
        case "agent":
          const userHistory = await History.findById(historyId);
          if (userHistory.lastTenAgents.length < 10) {
            History.findByIdAndUpdate(
              historyId,
              {
                $inc: { agentsGenerated: 1 },
                $push: {
                  lastTenAgents: {
                    $each: [req.body.agentId],
                    $position: 0,
                  },
                },
              },
              { new: true }
            )
              .then((dbResponse) => {
                res.json({
                  response: dbResponse,
                });
              })
              .catch((err) => {
                console.log(err);
                res.json(err);
              });
          } else {
            const agentArr = [...userHistory.lastTenAgents];
            agentArr.pop();
            agentArr.unshift(req.body.agentId);
            History.findByIdAndUpdate(
              historyId,
              {
                $inc: { agentsGenerated: 1 },
                lastTenAgents: agentArr,
              },
              { new: true }
            )
              .then((dbResponse) => {
                res.json({
                  response: dbResponse,
                });
              })
              .catch((err) => {
                console.log(err);
                res.json(err);
              });
          }
          break;
        case "weapon":
          History.findByIdAndUpdate(
            historyId,
            {
              $inc: { weaponsGenerated: 1 },
            },
            { new: true }
          )
            .then((dbResponse) => {
              res.json({
                response: dbResponse,
              });
            })
            .catch((err) => {
              console.log(err);
              res.json(err);
            });
          break;
        case "strategy":
          History.findByIdAndUpdate(
            historyId,
            {
              $inc: { strategiesGenerated: 1 },
            },
            { new: true }
          )
            .then((dbResponse) => {
              res.json({
                response: dbResponse,
              });
            })
            .catch((err) => {
              console.log(err);
              res.json(err);
            });
          break;
      }
    } else {
      res.json({ msg: "you can only update the history for your own account" });
    }
  },
};

module.exports = userController;
