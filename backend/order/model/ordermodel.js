const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  customerName: { type: String },
  customeremailid:{type:String},
  cartype: { type: String },
  servicePlan: { type: String },
  VehicleNumber:{type:String},
  Customeraddress:{type:String},
  requestedOn: { type: Date, default: Date.now() },
  deliveredOn: { type: Date },
  status: {
    type: String,
    default: "PLACED",
  },
});

module.exports = mongoose.model("order", orderSchema);
