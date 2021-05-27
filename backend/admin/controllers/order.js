const ordermodel=require('../model/ordermodel');
const membermodel=require('../model/membermodel');
const customermodel=require('../model/customermodel');

//finding placed order
exports.findPlacedOrders=(req,res)=>{
    ordermodel.find({
        status:"PLACED"
    })
    .exec()
    .then((response)=>{
        if(response.length==0){
            res.status(200).json({
                message:"no orders are available"
            });
        }else {
            res.status(200).json({
                orders:response
            });
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err,
        });
    });
}

//send order to washer
exports.updateOrder=(req,res)=>{
    const orderId=req.params.orderId;
    ordermodel.updateOne(
        {
            _id:orderId
        },
        {
            $ser:{
                status:"IN-PROGRESS",
                mechanicId:req.body.mechanicId
            }
        }
    )
    .exec()
    .then((response)=>{
        res.status(200).json({
            message:"order assigned to washer successfully"
        });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}