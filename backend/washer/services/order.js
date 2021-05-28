const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const OrderController = require("../controllers/order");

router.patch(
  "/updateOrder/:orderId",
  [checkAuth.verifyToken, checkAuth.isWasher],
  OrderController.updateOrder
);

router.get(
  "/findInProcessOrders/:washerd",
  [checkAuth.verifyToken, checkAuth.isWasher],
  OrderController.findInProcessOrders
);

router.get(
  "/findMyOrders/:washerId",
  [checkAuth.verifyToken, checkAuth.isWasher],
  OrderController.findMyOrders
);

module.exports = router;
