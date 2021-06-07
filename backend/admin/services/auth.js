const express=require('express');
const router=express.Router();
const AuthController=require("../controllers/auth");

/**
 * @swagger
 * /login:
 *   post:
 *     summary:login for admin
 *     description:login admin with token returned as response
 *     requestBody:
 *      required:true
 *      content:application/json
 *         schema:
 *          $ref:'#/components/schemas/member'
 *        responses:
 *          200:
 *              description:auth successful 
 *          content:application/json:
 *                
 *         
 *
*/

router.post('/login',AuthController.login);

router.post('/signup',AuthController.signup);

module.exports=router;