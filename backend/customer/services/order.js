const express = require("express");
const router = express.Router();
//const checkAuth = require("../middlewares/check-auth");
const OrderController = require("../controllers/order");




router.get(
  "/findOrders/:custId",
  OrderController.findMyOrders
);

module.exports = router;
