const express = require("express");
const router = express.Router();
//const checkAuth = require("../middlewares/check-auth");
const OrderController = require("../controllers/order");


//it should be get request to find orders of that cust it should be connected to orderdb n order should be ref yotube video acadeind

router.get(
  "/findOrders/:email",
  OrderController.findMyOrders
);

module.exports = router;
