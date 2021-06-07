const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/account");

/**
 * @swagger
 * /customer/account/updateProfile/:custId:
 *   put:
 *     summary: update the profile
 *     description: update customer details
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
router.put(
  "/updateProfile/:custId",
  AccountController.updateProfile
);

/**
 * @swagger
 * /customer/account/deleteAccount/:custId:
 *   delete:
 *     summary: delete the customer profile
 *     description: delete teh customer profile
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

router.delete(
  "/deleteAccount/:custId",
  AccountController.deleteProfile
);

module.exports = router;
