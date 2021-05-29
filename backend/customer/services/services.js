const express = require("express");
const router = express.Router();
//const checkAuth = require("../middlewares/check-auth");
//const OrderController = require("../controllers/services");


//it should be get request to find orders of that cust it should be connected to orderdb n order should be ref yotube video acadeind

router.get('/',function(req, res,next) {
  res.send('hello these are the services')
    /*let jsonResponse={
        "handsetCards":[
            { title: 'Card 1', cols: 2, rows: 1 },
              { title: 'Card 2', cols: 2, rows: 1 },
              { title: 'Card 3', cols: 2, rows: 1 },
              { title: 'Card 4', cols: 2, rows: 1 }
        ],
        "webCards":[
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ]
    };
    
    res.json(jsonResponse);*/
    }
    
   
    
  ///:customerId",
  //[checkAuth.verifyToken, checkAuth.isCustomer],
  //OrderController.findMyServices
);

module.exports = router;