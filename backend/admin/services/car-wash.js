const express=require('express');
const router=express.Router();
const checkAuth=require('../middlewares/check-auth')
const ServiceController=require('../controllers/service');

/**
 * @swagger
 *  /admin/car-services/addService:
 *    post:
 *      summary: Add Services
 *      requestBody:
 *        required: true 
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties: 
 *                serviceType:
 *                  type: string
 *                name:
 *                  type: string
 *                price: 
 *                  type: number
 *                description:
 *                  type: String
 *                timeRequired:
 *                  type: String
 *                where:
 *                  type: String 
 *      responses:
 *        "200":
 *          description: Service Added Successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type:string
 */

router.post('/addService',[checkAuth.verifyToken,checkAuth.isAdmin],
    ServiceController.addService
    );

/**
 * @swagger
 * /admin/car-services/findAll:
 *   get:
 *     summary: All the avaliable services are displayed
 *     description: Retrive all the services with details
 *     responses:
 *       "200":
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *  
 */
router.get('/findAll',ServiceController.findAll);

//router.get('/findById/:serviceId',ServiceController.findByServiceId);

/**
 * @swagger
 * /admin/car-services/updateService/:serviceId:
 *   put:
 *     summary: update the service
 *     description: update avaliable services with details
 *     requestBody: 
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               id: 
 *                 type: string
 *               serviceType:
 *                 type: string
 *               name:
 *                 type: string
 *               price: 
 *                 type: number
 *               description:
 *                 type: String
 *               timeRequired:
 *                 type: String
 *               where:
 *                 type: String 
 *     responses:
 *       "200":
 *         description: Service Added Successfully
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type:string
 * 
 */

router.put('/updateService/:serviceId',[checkAuth.verifyToken,checkAuth.isAdmin],
ServiceController.updateService
);
/**
 * @swagger
 * /admin/car-services/deleteService/:serviceId:
 *   delete:
 *     summary: update the service
 *     description: update avaliable services with details
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
 *         description: Service deleted Successfully
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type:string 
 *  
 */

router.delete('/deleteService/:serviceId',[checkAuth.verifyToken,checkAuth.isAdmin],
ServiceController.deleteService);

module.exports=router;