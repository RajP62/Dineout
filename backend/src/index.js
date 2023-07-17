const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileParser = require("express-fileupload");
const cors = require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(fileParser());
app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json;charset=UTF-8")
  next();
});
// var corsOptions = {
//     origin: 'https://singular-wisp-16a48c.netlify.app/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
  
  const razorpayCont = require("./controllers/razorpay.controller");
const restaurantCont = require("./controllers/restaurant.controller");
const userCont = require("./controllers/user.controller");
app.use("/razorpay", razorpayCont);
app.use("/restaurants", restaurantCont);

app.use("/users", userCont);



module.exports = app;