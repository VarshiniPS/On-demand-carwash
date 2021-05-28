const express = require("express");
const router = express.Router();

const AccountController = require("../controllers/account");

router.post("/login",
AccountController.login
);

router.post("/signup",
 AccountController.signup
);

router.put("/updateProfile/:washerId",AccountController.updateProfile);

router.delete("/deleteProfile/:washerId",AccountController.deleteProfile);

module.exports = router