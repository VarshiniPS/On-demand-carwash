const mongoose=require('mongoose');

const customerSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        min:4,
        max:20
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        default:"CUSTOMER",
    },
});

module.exports=mongoose.model("customer",customerSchema);