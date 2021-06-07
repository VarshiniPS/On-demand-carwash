const Ordermodel = require("../model/orderModel");

//TO place an Order
exports.addorder = (req, res) => {
          const order=new Ordermodel({
              name:req.body.name,
              email:req.body.email,
              carType:req.body.carType,
              serviceplan:req.body.serviceplan,
              vehiclenumber:req.body.vehiclenumber,
              address:req.body.address,
              requestedOn:req.body.requestedOn,
              deliveredOn:req.body.deliveredOn,
              status:req.body.status
              });
          order.save()
              .then(response=>{
                  console.log("placed order");
                  res.status(201).json({
                      message:"placed order successfully",
                      order:{
                          _id:response._id,
                          name:response.name,
                          email:response.email,
                          carType:response.carType,
                          serviceplan:response.serviceplan,
                          vehiclenumber:response.vehiclenumber,
                          address:response.address,
                          requestedOn:response.requestedOn,
                          deliveredOn:response.deliveredOn,
                          status:response.status

                      }
                  });
              })
  .catch((err)=>{
      console.log(err);
      res.status(500).json({
          error:err
      });
  });
}



//Find Completed Orders
exports.findOrders = (req, res) => {
  Ordermodel.find({ status: "PLACED" })
    .exec()
    .then((response) => {
      if (response.length == 0) {
        res.status(200).json({
          message: "No Orders are available",
        });
      } else {
        res.status(200).json({
          orders: response,
        });
      }
    })
    .catch((err) => {
      console.log("Find All Completed Orders Error: " + err);
      res.status(500).json({
        error: err,
      });
    });
};

