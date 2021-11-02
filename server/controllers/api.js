// api routes
const router = require("express").Router();

router.get("/", async (req, res) => {
  const helloFromServer = {
    message: "this is server",
    number: 7,
  };
  return res.json(helloFromServer);
});

module.exports = router;
