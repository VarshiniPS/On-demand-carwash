const express=require('express');
const router=express.Router();
const checkAuth=require('../middlewares/check-auth');
const washerController=require('../controllers/washer');

//find available washers
router.get('/findAvailable',
[checkAuth.verifyToken,checkAuth.isAdmin],
washerController.findAvailable
);

//find all washers
router.get('/findAll',
[checkAuth.verifyToken,checkAuth.isAdmin],
washerController.findAll
);

module.exports=router;