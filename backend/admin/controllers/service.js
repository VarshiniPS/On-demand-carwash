const { response } = require('express');
const Servicemodel=require('../model/servicemodel');

exports.addService=(req,res)=>{
    Servicemodel.findOne({
        name:req.body.name
    })
    .exec()
    .then((response)=>{
        if(response){
        return res.status(409).json({
            message:"service exists"
        });
    }else{
        const service=new Servicemodel({
            serviceType:req.body.serviceType,
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            timeRequired:req.body.timeRequired,
            where:req.body.where
        });
        service.save().then((response)=>{
            console.log("service added");
            res.status(201).json({
                message:"service added successfully"
            });
        });
    }
})
.catch((err)=>{
    console.log(err);
    res.status(500).json({
        error:err
    });
});
}

exports.findAll=(req,res)=>{
    Servicemodel.find()
    .select("-__v")
    .exec()
    .then((response)=>{
        if(response.length==0){
        res.status(200).json({
            message:"no services available at the moment"
        });
    }else{
        res.status(200).json({
            service:response
        });
    }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

exports.updateService=(req,res)=>{
    const id=req.params.serviceId;
    Servicemodel.updateMany({
        _id:id
    },
    {$set:req.body})
    .exec()
    .then((response)=>{
        console.log("updated service successfully");
        res.status(200).json({
            message:"service update successfully"
        });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            "service update error":err
        });
    });
}

exports.deleteService=(req,res)=>{
    const id=req.params.serviceId;
    Servicemodel.deleteOne({_id:id})
    .exec()
    .then((result)=>{
        res.status(200).json({
            status:"service deleted successfully"
        });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

exports.findByServiceId=(req,res)=>
{
    Servicemodel.findOne({ _id:req.params.serviceId })
    .exec()
    .then((response)=>{
        if(response==null){
            return res.status(404).json({
                message:"this service is not available",
            });
        }else{
           return res.status(200).json({
               response,
           });
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}