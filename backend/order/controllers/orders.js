const Ordermodel = require("../model/orderModel");

//TO place an Order
exports.addorder = (req, res) => {
          const order=new Ordermodel({
              customerName:req.body.customerName,
              customeremailid:req.body.customeremailid,
              cartype:req.body.cartype,
              servicePlan:req.body.servicePlan,
              VehicleNumber:req.body.VehicleNumber,
              Customeraddress:req.body.Customeraddress,
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
                          customername:response.customerName,
                          customeremailid:response.customeremailid,
                          cartype:response.cartype,
                          servicePlan:response.servicePlan,
                          VehicleNumber:response.VehicleNumber,
                          Customeraddress:response.Customeraddress,
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
exports.findCompltedOrders = (req, res) => {
  Order.find({ status: "COMPLETED" })
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

// "Request Placed",
//           "Request Cancel",
//           "Request in Process",
//           "Request Accepted",
//           "Request Rejected",
//           "Request Completed",
