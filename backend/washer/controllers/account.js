const washer=require('../models/washermodel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const mongoose=require('mongoose');
const authConfig=require('../Config/authConfig');


exports.login=(req,res,next)=>{
    washer.findOne({
        email:req.body.email
    })
    .exec()
    .then(user=>{
        if(!user){
            return res.status(401).json({
                message:"auth failed"
            });
        }else{
            bcrypt.compare(req.body.password,user.password,(err,response)=>{
                if(err){
                    return res.status(401).json({
                        message:"auth failed"
                    });
                }else if (response){
                    const token=jwt.sign({
                        userId:user._id
                    },
                    authConfig.secretKey,
                    {
                        expiresIn:"1h"
                    });
                    return res.status(200).json({
                        message:"auth successful",
                        userId:user._id,
                        name:user.name,
                        email:user.email,
                        token:token
                    });
                }else{
                    return res.status(401).json({
                        message:"auth failed"
                    });
                }
            });
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
}


exports.signup=(req,res,next)=>{
    if(!req.body.name || !req.body.email || !req.body.password){
        return res.status(400).json({
            message:"name,email and password fields are mandatory"
        })
    }

  washer.find({email:req.body.email})
        .exec()
        .then(user=>{
        if(user.length>=1){
            return res.status(409).json({
                message:"washer already exists"
            });
        }else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err){
                    return res.status(500).json({
                        error:err
                    });
                }else{
                    const Washer=new washer({
                        _id:new mongoose.Types.ObjectId(),
                        name:req.body.name,
                        email:req.body.email,
                        password:hash,
                        mobile:req.body.mobile,
                        role:req.body.role,
                        status:req.body.status
                    });
                    Washer.save()
                    .then(result=>{
                        console.log(result);
                        res.status(201).json({
                            message:"login successful",
                            user:result
                        });
                    })
                    .catch(err=>{
                        console.log(err);
                        res.status(500).json({
                            reg_error:err
                        });
                    });
                }
            });
        }
    });
}

//update profile
exports.updateProfile = (req, res) => {
  const id=req.params.washerId;
  washer.findByIdAndUpdate({ _id:id },req.body)
    .exec()
    .then(() => {
      washer.findOne({_id:req.params.id}).then(function(washer){
        res.send(washer);
        console.log("successfully updated");
    });
  })
    .catch((err) => {
      console.log("Profile Update error: " + err);
      res.status(500).json({ "Profile Update error ": err });
    });
};


//delete profile
exports.deleteProfile = (req, res) => {
  washer.deleteOne({ _id: req.params.washerId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Account deleted Successfully",
      });
    })
    .catch((err) => {
      console.log("Delete washer: " + err);
      res.status(500).json({
        error: err,
      });
    });
};
