const express = require("express");
const router = express.Router();
//const checkAuth = require("../middlewares/check-auth");
const ServiceController = require("../controllers/service");

//service chosen by customer
router.post(
  "/servicechosen",
  ServiceController.servicechosen
);



module.exports = router;