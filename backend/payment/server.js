var express=require('express');
var stripe=require('stripe') ('sk_test_51Iyk3ESHHhnGOdvy1d940eWQgdJ5Abg6D1fEk5ffLuq6rNg5MDiQg6APjFXCcDqgTUpRTuaTg7ltkji162G38GWU002WKlceoD');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var cors=require('cors');
var originWhite;ist=[
    'http://localhost:4200'
];
var corsOptions={
    origin:function(origin,callback){
        var isWhitelisted=originsWhitelist.indexOf(origin)!==-1;
        callback(null,isWhitelisted);
    },
    credentials:true
}
app.use(cors(corsOptions));
app.post('/paynow',(req,res)=>{
    console.log('The body is',req.body);
    var charge=stripe.charges.create({
        amount:5000,
        currency:'INR',
        source:req.body.token
    },(err,charge)=>{
        if(err){
            throw err;
        }
        res.json({
            success:true,
            message:"Payment done"
        })
    });
})

app.listen(3000,()=>{
    console.log('server starts at port 3000');
});