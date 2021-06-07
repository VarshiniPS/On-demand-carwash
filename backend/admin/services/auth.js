const express=require('express');
//router level middleware
const router=express.Router();
const AuthController=require("../controllers/auth");

/**
 * @swagger
 * /admin/auth/login:
 *   post:
 *     summary: AdminLogin
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: email
 *                   example: test@test.com
 *                 password:
 *                   type: string
 *                   description: password
 *     responses:
 *       "200":
 *         description: Authentication Successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *                 usedId:
 *                   type:string
 *                 name:  
 *                   type:string
 *                 email:
 *                   type:string
 *                 role:  
 *                   type:string
 *                 token:
 *                   type:string
 */

router.post('/login',AuthController.login);
/**
 * @swagger
 * /admin/auth/signup:
 *   post:
 *     summary: Member Signup
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: name
 *                 email:
 *                   type: string
 *                   description: email
 *                   example: test@test.com
 *                 password:
 *                   type: string
 *                   description: password
 *                 mobile:
 *                   type: string
 *                   description: number
 *                 role:
 *                   type: string
 *                 status:
 *                   type: string
 *     responses:
 *       "200":
 *         description: REgistration Successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *                 usedId:
 *                   type:string
 *                 name:  
 *                   type:string
 *                 email:
 *                   type:string
 *                 role:  
 *                   type:string
 *                 token:
 *                   type:string
 */

router.post('/signup',AuthController.signup);


module.exports=router;