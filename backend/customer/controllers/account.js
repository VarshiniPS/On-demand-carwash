const Customer = require("../models/customermodel");

//updating profile
exports.updateProfile = (req, res) => {
  const id=req.params.custId;
  Customer.findByIdAndUpdate({ _id:id },req.body)
    .exec()
    .then(() => {
      Customer.findOne({_id:req.params.id}).then(function(customer){
        res.send(customer);
        console.log("successfully updated");
    });
  })
    .catch((err) => {
      console.log("Profile Update error: " + err);
      res.status(500).json({ "Profile Update error ": err });
    });
};


//delete profile
exports.deleteProfile = (req, res) => {
  Customer.deleteOne({ _id: req.params.custId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Account deleted Successfully",
      });
    })
    .catch((err) => {
      console.log("Delete Customer: " + err);
      res.status(500).json({
        error: err,
      });
    });
};
