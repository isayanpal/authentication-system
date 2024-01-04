const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

// const { protect } = require("../middlewares/authMiddleware");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/register").get(getUser);

module.exports = router;
