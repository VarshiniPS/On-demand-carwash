const OrderModel = require("../models/ordermodel");
const MemberModel = require("../models/membermodel");

//Find IN-PROCESS Orders
exports.findInProcessOrders = (req, res) => {
  OrderModel.find({
    $or: [
      { washerId: req.params.washId, status: "IN-PROCESS" },
      { washerId: req.params.washId, status: "ACCEPTED" },
    ],
  })
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
      console.log("Find All Placed Orders Error: " + err);
      res.status(500).json({
        error: err,
      });
    });
};

//Update Status of Order
exports.updateOrder = (req, res) => {
  OrderModel.updateOne(
    { _id: req.params.orderId },
    { $set: { status: req.body.status } }
  )
    .exec()
    .then((response) => {
      OrderModel.findOne({ _id: req.params.orderId })
        .exec()
        .then((obj) => {
          //console.log(obj);
          const washId = obj.washerId;
          console.log("washer Id: " + washId);
          if (req.body.status === "ACCEPTED") {
            MemberModel.updateOne(
              { _id: obj.washerId },
              {
                $set: { status: "NOT AVAILABLE" },
              }
            )
              .then((response) => {
                console.log("Member Status: NOT AVAILABLE");
              })
              .catch((err) => {
                console.log("Member Status Error: " + err);
              });
          } else {
            MemberModel.updateOne(
              { _id: obj.washerId },
              {
                $set: { status: "AVAILABLE" },
              }
            )
              .then((response) => {
                console.log("Member Status: AVAILABLE");
              })
              .catch((err) => {
                console.log("Member Status Error: " + err);
              });
          }
        })
        .catch((err) => {
          console.log("Find Order Error: " + err);
        });
      console.log("Order Updated Successfully");
      res.status(200).json({
        message: "Request Updated Successfully",
      });
    })
    .catch((err) => {
      console.log("Order Update error: " + err);
      res.status(500).json({ "Order Update error ": err });
    });
};

//Find My Orders
exports.findMyOrders = (req, res) => {
  OrderModel.find({ washerId: req.params.washId })
    .exec()
    .then((response) => {
      if (response.length == 0) {
        res.status(200).json({
          message: "No Orders are available",
        });
      } else {
        res.status(200).json({ orders: response });
      }
    })
    .catch((err) => {
      console.log("Find All Orders Error: " + err);
      res.status(500).json({
        error: err,
      });
    });
};
