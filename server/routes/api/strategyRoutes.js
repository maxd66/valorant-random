const router = require("express").Router();
const {
  getStrategies,
  specificClassStrategies,
  specificSideStrategies,
  specificClassAndSideStrategies,
  getOneStrategy,
  addWinOrLoss,
} = require("../../controllers/strategyController");
const { route } = require("./userRoutes");
//Filters can be passed to this route using a query string, or I could filter
//the results on the front end. Both are options, this might be better for
//load times if there are tons of strategies. However, it makes querying the
//server a little more complicated.
router.get("/", getStrategies);

router.get("/class/side/:class/:side", specificClassAndSideStrategies);

router.get("/class/:class", specificClassStrategies);

router.get("/side/:side", specificSideStrategies);

router.get("/:strategyId", getOneStrategy);

router.put("/:strategyId/:wol", addWinOrLoss);

module.exports = router;
