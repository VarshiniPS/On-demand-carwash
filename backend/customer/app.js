const express = require("express");
const server2 = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authRoutes = require("./services/auth");
const accountRoutes = require("./services/account");
const orderRoutes = require("./services/order");


const port=process.env.PORT || 4001;

//Database Connection
const dbURI='mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/Customer?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:true })
.catch((err)=>{
    console.log("db connection error:" + err);
});



server2.use(bodyParser.urlencoded({ extended: false }));

// parse requests of content-type - application/json
server2.use(bodyParser.json());

//For preventing CORS ERRORS  
server2.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
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
      url:"http://localhost:4002",
      description: 'Customer server',
    },
  ],
};


const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./services/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
server2.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



//Every request from customer route goes through this url : /customer
server2.use("/customer/auth", authRoutes);
server2.use("/customer/account", accountRoutes);
server2.use("/customer/order", orderRoutes);

//Server Side Error Handling
server2.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

server2.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

server2.listen(port,()=>{
    console.log(`server2 is listening at : ${port}`);
})
module.exports = server2;
