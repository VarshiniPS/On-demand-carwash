const mongoose=require('mongoose');

const carSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
});

module.exports=mongoose.model("car",carSchema);