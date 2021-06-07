const express=require('express');
const server1=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authRoutes=require('./services/auth');
const carRoutes=require('./services/car');
const serviceRoutes=require('./services/car-wash');
const orderRoutes=require('./services/order');
const washerRoutes=require('./services/washer');

const port=process.env.PORT || 4000;


//connection to database
const dbURI='mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/carwash';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.catch((err)=>{
    console.log("db connection error:" + err);
});





//thirpart middleware
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

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Car_Wash API with Swagger',
      version: '1.0.0',
    },
    description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
    servers: [
      {
        url:"http://localhost:4000",
        description: 'Admin server',
      },
    ],
  };
  
  
  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./services/*.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  server1.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  

//every request from admin route goes via this url:/admin/

server1.use("/admin/auth",authRoutes);
server1.use("/admin/car-func",carRoutes);
server1.use("/admin/car-services",serviceRoutes);
server1.use("/admin/order",orderRoutes);
server1.use("/admin/washer",washerRoutes);

//handling errors on server side,application level middleware
server1.use((req,res,next)=>{
    const error=new Error("Not found");
    error.status=404;
    next(error);
});

//error-handling middleware
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