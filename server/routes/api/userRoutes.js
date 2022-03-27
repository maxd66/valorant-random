const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  login,
  updateUser,
  deleteUser,
  updateHistory,
} = require("../../controllers/userController");
const { authMiddleware } = require("../../utils/auth");

router.route("/").get(getUsers).post(createUser);

router
  .route("/:userId")
  .get(authMiddleware, getSingleUser)
  .put(authMiddleware, updateUser)
  .delete(authMiddleware, deleteUser);

router.post("/login", login);

router.put("/history/:userId/:field", authMiddleware, updateHistory);

module.exports = router;
