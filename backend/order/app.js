const express = require("express");
const server4 = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const cors = require("cors");
//const dbConfig = require("./config/dbConfig");
const orderRoutes = require("./services/orderservice");
const port=4003;

/*
Via Express routes, HTTP request that matches a route will be checked by 
CORS Middleware before coming to Security layer
*/
/*var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));*/

//Database Connection
const dbURI='mongodb+srv://varshinips:qwerty170@cluster0.i2q1n.mongodb.net/Order';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.catch((err)=>{
    console.log("db connection error:" + err);
});

//To check Database Connection is open or not
/*db.once("open", function () {
  console.log("Connected to MongoDb Database");
});*/

server4.use(bodyParser.urlencoded({ extended: false }));

// parse requests of content-type - application/json
server4.use(bodyParser.json());

//For preventing CORS ERRORS  (Postman is just a testing tool)
server4.use((req, res, next) => {
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

server4.use("/order", orderRoutes);

//Server Side Error Handling
server4.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

server4.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

server4.listen(()=>{
    console.log(`server 4 running on ${port}`);
})

module.exports = server4;
