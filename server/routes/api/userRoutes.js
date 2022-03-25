const router = require("express").Router();

router.route("/").get().post();

router.route("/:userId").get().put().delete();

router.put("/history/:userId/:operation/:field", () => {});

module.exports = router;
