const router = require("express").Router();
const userRoutes = require("./userRoutes");
const strategyRoutes = require("./strategyRoutes");

router.get("/test", (req, res) => {
  res.json({ msg: "hey this works" });
});

router.use("/user", userRoutes);
router.use("/strategy", strategyRoutes);

module.exports = router;
