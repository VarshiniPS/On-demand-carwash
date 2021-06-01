const express=require('express');
const server1=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const authRoutes=require('./services/auth');
const carRoutes=require('./services/car');
const serviceRoutes=require('./services/car-wash');
const orderRoutes=require('./services/order');
const washerRoutes=require('./services/washer');

const port=process.env.PORT || 4000;

const dbURI='mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/carwash';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.catch((err)=>{
    console.log("db connection error:" + err);
});



server1.use(bodyparser.urlencoded({
extended:false
}));

server1.use(bodyparser.json());


//for preventing CORS errors
server1.use((req,res,next)=>{
    res.header(
        "Access-Control-Allow-Origin","*"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    if(req.method==="OPTIONS"){
        res.header(
            "Access-Control-Allow-Methods",
            "PUT,POST,PATCH,DELETE,GET");
            return res.status(200).json({});
        
    }
    next();
});

//every request from admin route goes via this url:/admin/

server1.use("/admin/auth",authRoutes);
server1.use("/admin/car-func",carRoutes);
server1.use("/admin/car-services",serviceRoutes);
server1.use("/admin/order",orderRoutes);
server1.use("/admin/washer",washerRoutes);

//handling errors on server side
server1.use((req,res,next)=>{
    const error=new Error("Not found");
    error.status=404;
    next(error);
});

server1.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});

server1.listen(port,()=>{
    console.log(`server1 is listening at : ${port}`);
})

module.exports=server1;