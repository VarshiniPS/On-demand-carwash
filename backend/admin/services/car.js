const express = require("express");
const router = express.Router();
//const checkAuth = require("../middlewares/check-auth");
const CarController = require("../controllers/car");

//Add Car
router.post(
  "/addCar",
  //[checkAuth.verifyToken, checkAuth.isAdmin],
  CarController.addCar
);

//find all cars
router.get("/findAllCars", CarController.findAllCars);

//Update Car Details
router.put(
  "/updateCar/:id",
  //[checkAuth.verifyToken, checkAuth.isAdmin],
  CarController.updateCar
);

router.delete(
  "/deleteCar/:carId",
  //[checkAuth.verifyToken, checkAuth.isAdmin],
  CarController.deleteCar
);
module.exports = router;
