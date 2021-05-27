const express=require('express');
const router=express.Router();
const checkAuth=require('../middlewares/check-auth');
const orderController=require('../controllers/order');

router.get('/findPlaceOrder',[checkAuth.verifyToken,checkAuth.isAdmin],
orderController.findPlacedOrders
);

router.patch(
    '/updateOrder/:orderId',[
        checkAuth.verifyToken,checkAuth.isAdmin
    ],
    orderController.updateOrder
);

module.exports=router;