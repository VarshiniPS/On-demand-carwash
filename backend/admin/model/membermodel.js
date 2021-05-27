const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String
    },
    role:{
        type:String,
        default:"WASHER"
    },
    status:{
        type:String,
        default:"AVAILABLE"
    }
});

module.exports=mongoose.model("member",userSchema);