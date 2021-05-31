const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  serviceName: { type: String },
  servicePrice: { type: Number },
  timeRequired:{ type: String},
  customer:{
    type:mongoose.Schema.Types.ObjectId,ref:"customer"
  }

});

var conn=mongoose.connection.useDb('Customer');
module.exports = mongoose.model("service", serviceSchema);