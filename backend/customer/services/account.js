const express = require("express");
const router = express.Router();
//const checkAuth = require("../middlewares/check-auth");
const AccountController = require("../controllers/account");

/*router.get(
  "/findAll",
  checkAuth.verifyToken,
  AccountController.getAllCustomers
);

router.get("/findCustById/:custId", AccountController.findCustById);*/

router.put(
  "/updateProfile/:custId",
  //[checkAuth.verifyToken, checkAuth.isCustomer],
  AccountController.updateProfile
);

router.delete(
  "/deleteAccount/:custId",
  //[checkAuth.verifyToken, checkAuth.isCustomer],
  AccountController.deleteProfile
);

module.exports = router;
