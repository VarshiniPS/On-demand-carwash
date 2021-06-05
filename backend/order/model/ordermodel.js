const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: { type: String },
  email:{type:String},
  carType: { type: String },
  serviceplan: { type: String },
  vehiclenumber:{type:String},
  address:{type:String},
  requestedOn: { type: Date, default: Date.now() },
  deliveredOn: { type: Date, default:Date.now() },
  status: {
    type: String,
    default: "PLACED",
  },
});

module.exports = mongoose.model("order", orderSchema);
