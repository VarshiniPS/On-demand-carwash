const Washer=require('../model/membermodel');

//find available washers
exports.findAvailable=(req,res)=>{
    Washer.find({
        role:"WASHER",
        status:"AVAILABLE"
    })
    .exec()
    .then((response)=>{
        if(response.length==0){
            res.status(200).json({
                message:"no washers are available"
            });
        }else {
            res.status(200).json({
                response
            });
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
};

//find all washers
exports.findAll=(req,res)=>{
    Washer.find({role:"WASHER"})
        .select("name email mobile status")
        .exec()
        .then((response)=>{
            if(response.length==0){
                res.status(200).json({
                    message:"add a washer"
                });
            } else {
                res.status(200).json({
                    response
                });
            }
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
};