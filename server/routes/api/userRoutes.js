const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  login,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put().delete();

router.post("/login", login);

router.put("/history/:userId/:operation/:field", () => {});

module.exports = router;
