const service=require('../models/servicemodel');


//servicechosen
exports.servicechosen = (req, res,next) => {
const Service=new service({
    _id:mongoose.Types.ObjectId(),
    serviceName:req.body.serviceName,
    servicePrice:req.body.servicePrice,
    timeRequired:req.body.timeRequired,
    customer:req.body.customerId
});
Service.save()
        .then((result)=>{
        console.log(result);
        res.status(201).json({
        message:"service chosen added",
    });
    })
        .catch((err)=>{
        console.log(err);
        res.status(500).json({
        error:err
    });
})
}



