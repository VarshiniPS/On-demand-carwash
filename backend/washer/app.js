const express = require("express");
const server3 = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const accountRoutes = require("./services/account");
const orderRoutes = require("./services/order");
const port=process.env.PORT || 4002


const dbURI='mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/Washer';
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .catch((err) => {
    console.log("Database Connection Error: " + err);
  });
let db = mongoose.connection;



server3.use(bodyParser.urlencoded({ extended: false }));
server3.use(bodyParser.json());

server3.use((req, res, next) => {
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
      description: 'Washer server',
    },
  ],
};


const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./services/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
server3.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



//Every request from washer route goes through this url : /washer
server3.use("/washer/account", accountRoutes);
server3.use("/washer/orders", orderRoutes);

//Server Side Error Handling
server3.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

server3.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

server3.listen(port,()=>{
    console.log(`server3 is running at : ${port}`);
})

module.exports = server3;
