const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/auth");

/**
 * @swagger
 * /customer/auth/signup:
 *   post:
 *     summary: customer Signup
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
 *         description: Registration Successful
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
router.post("/signup", UsersController.signup);

/**
 * @swagger
 * /customer/auth/login:
 *   post:
 *     summary: customer Login
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

router.post("/login", UsersController.login);

module.exports = router;
