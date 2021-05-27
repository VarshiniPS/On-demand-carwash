const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
//const cors=require('cors');
const authRoutes=require('./services/auth');
const carRoutes=require('./services/car');
const serviceRoutes=require('./services/car-wash');
const orderRoutes=require('./services/order');
const washerRoutes=require('./services/washer');

const port=process.env.PORT || 4000;

/*var corsOptions={
    origin:"http://localhost:3000",
};

app.use(cors(corsOptions));*/

const dbURI=mongoose.connect('mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/carwash?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.catch((err)=>{
    console.log("db connection error:" + err);
});

//to check db connection
/*dbURI.once("open",()=>{
    console.log("connected to mongodb");
});*/

app.use(bodyparser.urlencoded({
extended:false
}));

app.use(bodyparser.json());


//for preventing CORS errors
app.use((req,res,next)=>{
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

app.use("/admin/auth",authRoutes);
app.use("/admin/car-func",carRoutes);
app.use("/admin/car-services",serviceRoutes);
app.use("/admin/order",orderRoutes);
app.use("/admin/washer",washerRoutes);

//handling errors on server side
app.use((req,res,next)=>{
    const error=new Error("Not found");
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});

app.listen(port,()=>{
    console.log(`server is listening at : ${port}`);
})

module.exports=app;