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