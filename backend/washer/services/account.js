const express = require("express");
const router = express.Router();

const AccountController = require("../controllers/account");

/**
 * @swagger
 * /washer/account/login:
 *   post:
 *     summary: washer Login
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


router.post("/login",
AccountController.login
);

/**
 * @swagger
 * /washer/account/signup:
 *   post:
 *     summary: washer Signup
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


router.post("/signup",
 AccountController.signup
);


/**
 * @swagger
 * /washer/account/updateProfile/:washId:
 *   put:
 *     summary: update the profile
 *     description: update washer details
 *     requestBody: 
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               id: 
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password: 
 *                 type: number
 *               role:
 *                 type: String 
 *     responses:
 *       "200":
 *         description: profile updated Successfully
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type:string
 * 
 */

router.put("/updateProfile/:washerId",AccountController.updateProfile);

/**
 * @swagger
 * /washer/account/deleteAccount/:washId:
 *   delete:
 *     summary: delete the washer profile
 *     description: delete the washer profile
 *     requestBody: 
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               id: 
 *                 type: string
 *     responses:
 *       "200":
 *         description: Profile deleted Successfully
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type:string 
 *  
 */

router.delete("/deleteProfile/:washerId",AccountController.deleteProfile);

module.exports = router