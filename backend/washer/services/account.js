const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const AccountController = require("../controllers/account");

router.patch(
  "/update/:washerId",
  [checkAuth.verifyToken],
  AccountController.updateProfile
);

router.delete(
  "/delete/:washerId",
  [checkAuth.verifyToken],
  AccountController.deleteProfile
);

module.exports = router