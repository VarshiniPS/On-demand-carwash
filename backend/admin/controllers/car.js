const Carmodel=require('../model/carmodel');

//adding car
exports.addCar=(req,res)=>{
    Carmodel.findOne({name:req.body.name})
            .exec()
            .then((response)=>{
                if(response){
                    return res.status(409).json({
                        message:"carname already exists"
                    });
                }else{
                    const car=new Carmodel({
                        name:req.body.name,
                        });
                    car.save()
                        .then((response)=>{
                            console.log("car added");
                            res.status(201).json({
                                message:"car added successfully",
                                car:{
                                    name:response.name,
                                    _id:response._id
                                }
                            });
                        });
                }
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });
}

//find all cars
exports.findAllCars=(req,res)=>{
    Carmodel.find()
    .distinct("name")
    .exec()
    .then((response)=>{
        if(response.length==0){
            res.status(200).json({
                message:"no cars available"
            });
        }else{
            res.send(response);
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

//find all brands
/*exports.findAllBrands = (req, res) => {
    Carmodel.find()
      .distinct("brand")
      .exec()
      .then((response) => {
        if (response.length == 0) {
          res.status(200).json({
            message: "No Brands Available",
          });
        } else {
          res.send(response);
        }
      })
      .catch((err) => {
        console.log("Find All Brand Method Error: " + err);
        res.status(500).json({
          error: err,
        });
      });
  };
  
  //Find All Cars By Brands
  exports.findByBrand = (req, res) => {
    Carmodel.find({ brand: req.body.brand })
      .select("name")
      .exec()
      .then((response) => {
        if (response.length < 1) {
          return res.status(404).json({
            message: "This Brand is Not available",
          });
        } else {
          return res.status(200).json({
            cars: response.map((car) => {
              return { name: car.name, _id: car._id };
            }),
          });
        }
      })
      .catch((err) => {
        console.log("Find By Brand Error: " + err);
        res.status(500).json({
          error: err,
        });
      });
  };
  
  //FInd Car By Name
  exports.findByCarId = (req, res) => {
    Carmodel.findOne({ _id: req.params.carId })
      .exec()
      .then((response) => {
        if (response == null) {
          return res.status(404).json({
            message: "This Car is Not available",
          });
        } else {
          return res.status(200).json({
            response,
          });
        }
      })
      .catch((err) => {
        console.log("Find By Car Error: " + err);
        res.status(500).json({
          error: err,
        });
      });
  };*/
  
  //Update Car Details
  exports.updateCar = (req, res) => {
    let obj = req.body;
    const id = req.params.id;
    Carmodel.updateOne({ _id: id }, { $set: obj })
      .exec()
      .then((response) => {
        console.log("Updated Successfully");
        res.status(200).json({
          message: "Car Updated Successfully",
        });
      })
      .catch((err) => {
        console.log("Update Car Error: " + err);
        res.status(500).json({
          error: err,
        });
      });
  };
  
  exports.deleteCar = (req, res) => {
    Carmodel.deleteOne({ _id: req.params.carId })
      .exec()
      .then((result) => {
        res.status(200).json({
          message: "Car deleted Successfully",
        });
      })
      .catch((err) => {
        console.log("Delete Car: " + err);
        res.status(500).json({
          error: err,
        });
      });
  };
  