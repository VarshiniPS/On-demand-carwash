const express=require('express');
const router=express.Router();
const AuthController=require("../controllers/auth");

router.post('/login',AuthController.login);

router.post('/signup',AuthController.signup);

module.exports=router;