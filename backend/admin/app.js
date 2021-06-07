const express=require('express');
const server1=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
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

const swaggerJsdoc=require("swagger-jsdoc");
const swaggerUi=require("swagger-ui-express");
//swagger

const options = {
    definition:{
  openapi: '3.0.0',
  info: {
    title: 'ON DEMAND CAR WASH ADMIN API',
    version: '1.0.0',
},

 servers:[
     {
         url:"http://localhost:4000",
     }
 ],
},
 apis:["app.js"],
};


const specs = swaggerJsdoc(options);
server1.use(
    "/api-doc",
    swaggerUi.serve,
    swaggerUi.setup(specs,{
        explorer:true
    })
);

//schema
/**
 * @swagger
 * components:
 * schemas:
 *      member:
 *      type:object
 *      required:
 *      - name
 *      - email
 *      - password
 *      - mobile
 *      - role
 *      - status
 *  properties:
 *      id:
 *          type:string
 *          description: The auto-generated id of the member
 *      name:
 *          type:string
 *          description:The name of the member
 *      email:
 *          type:string
 *          description:email of the member
 *      password:
 *           type:string
 *           description:password of the member
 *      mobile:
 *            type:string
 *            description:mobile number of the member
 *      role:
 *             type:string
 *             description:role of the member
 *      status:
 *              type:string
 *              decription:status of the member
 * 
 *      example:
 *          id:167890yuhiii
 *          name:ps
 *          email:ps@test.com
 *          password:1233yg
 *          mobile:9000000009
 *          role:ADMIN
 *          status:AVAILABLE
 * 
 */


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