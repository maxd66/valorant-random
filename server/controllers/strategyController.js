const Strategy = require("../models/Strategy");

const strategyController = {
  getStrategies(req, res) {
    Strategy.find({})
      .then((strategies) => {
        res.json(strategies);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  specificClassStrategies(req, res) {
    Strategy.find({ class: req.params.class })
      .then((classStrategies) => {
        res.json(classStrategies);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  specificSideStrategies(req, res) {
    Strategy.find({ $or: [{ side: req.params.side }, { side: "na" }] })
      .then((sideStrategies) => {
        res.json(sideStrategies);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  specificClassAndSideStrategies(req, res) {
    Strategy.find({
      class: req.params.class,
      $or: [{ side: req.params.side }, { side: "na" }],
    })
      .then((sideStrategies) => {
        res.json(sideStrategies);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  getOneStrategy(req, res) {
    Strategy.findById(req.params.strategyId)
      .then((strategy) => {
        if (!strategy) {
          res.status(404).json({ msg: "no strategy with that id found" });
          return;
        }
        res.json(strategy);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  addWinOrLoss(req, res) {
    let wolObj = {};
    if (req.params.wol === "wins") {
      wolObj.wins = 1;
    } else {
      wolObj.losses = 1;
    }
    Strategy.findByIdAndUpdate(
      req.params.strategyId,
      { $inc: wolObj },
      { new: true }
    )
      .then((dbResponse) => {
        res.json({
          msg: `Success! ${req.params.wol} increased by 1`,
          response: dbResponse,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
};

module.exports = strategyController;
