const express = require("express");
const router = express.Router();
//const checkAuth = require("../middlewares/check-auth");
const OrderController = require("../controllers/orders");

router.post('/addorder', OrderController.addorder);
router.get("/findOrders", OrderController.findOrders);

module.exports = router;