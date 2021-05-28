const express = require("express");
const server3 = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const accountRoutes = require("./services/account");
const orderRoutes = require("./services/order");
const port=process.env.PORT || 4003

mongoose
  .connect(
    `mongodb+srv://root:${dbConfig.PASSWORD}@learnmongodb.tuuzo.mongodb.net/${dbConfig.DBNAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .catch((err) => {
    console.log("Database Connection Error: " + err);
  });
let db = mongoose.connection;



server3.use(bodyParser.urlencoded({ extended: false }));
server3.use(bodyParser.json());



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
