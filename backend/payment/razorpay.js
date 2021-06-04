let Razorpay=require('razorpay');

const RazorpayConfig={
    key_id='',
    key_secret=''
}

var instance=new Razorpay(RazorpayConfig);

module.exports.config=RazorpayConfig;
module.exports.instance=instance