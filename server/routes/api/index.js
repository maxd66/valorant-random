const router = require("express").Router();

router.get("/test", (req, res) => {
  res.json({ msg: "hey this works" });
});

module.exports = router;
