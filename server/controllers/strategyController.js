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
    Strategy.findById(req.body.strategyId)
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
};

module.exports = strategyController;
