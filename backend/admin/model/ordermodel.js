const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    customerId:{
        type:String
    },
    customerName:{
        type:String
    },
    carName:{
        type:String
    },
    carNumber:{
        type:String,
        max:25
    },
    custAddress:{
        type:String,
        max:50
    },
    serviceName:{
        type:String
    },
    servicePrice:{
        type:Number
    },
    washerId:{
        type:String
    },
    requestedOn:{
        type:Date,default:Date.now()
    },
    deliveredOn:{
        type:Date
    },
        status:{
            type:String,
        },
    
});

module.exports=mongoose.model("order",orderSchema);