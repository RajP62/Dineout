const Razorpay = require("razorpay");
require("dotenv").config();
const razorpay = new Razorpay({
    key_id: process.env.RZP_KEY,
    key_secret: process.env.RZP_SECRET
});

module.exports = razorpay;