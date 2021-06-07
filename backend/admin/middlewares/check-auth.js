const jwt = require("jsonwebtoken");
const authConfig = require("../config/authConfig");
const Member = require("../model/membermodel");

verifyToken = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
    const decoded = jwt.verify(token, authConfig.secretKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "LOGIN REQUIRED",
    });
  }
};

isAdmin = (req, res, next) => {
  Member.findById({ _id: req.userId })
    .exec()
    .then((user) => {
      if (user.role === "ADMIN") {
        next();
        return;
      }
      res.status(403).json({
        message: "Not Authorized",
      });
    })
    .catch((err) => {
      console.log("Authorization Error: " + err);
      res.status(500).json({
        error: err,
      });
    });
};

const checkAuth = {
  verifyToken,
  isAdmin,
};

module.exports = checkAuth;
