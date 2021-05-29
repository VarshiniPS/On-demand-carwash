const express=require('express');
const router=express.Router();

exports.findMyServices = (req, res,next) => {
let jsonResponse={
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

res.json(jsonResponse);
}

module.exports=router;
