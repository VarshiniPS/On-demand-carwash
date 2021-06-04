const Order = require("../model/orderModel");

//TO place an Order
exports.addOrder = (req, res) => {
    const order = new Order({
    customerName: req.body.customerName,
    customeremailid:req.body.customeremailid,
    cartype: req.body.cartype,
    servicePlan: req.body.servicePlan,
    VehicleNumber:req.body.VehicleNumber,
    Customeraddress:req.body.Customeraddress
  })
  order
    .save()
    .then((result) => {
      console.log("Order Placed: " + result);
      res.status(201).json({
        message: "Thank you for your order.",
        result,
      });
    })
    .catch((err) => {
      console.log("Placing Order Error" + err);
      res.status(500).json({
        error: err,
      });
    });
};

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
