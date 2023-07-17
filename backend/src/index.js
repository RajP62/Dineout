const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileParser = require("express-fileupload");
app.use(express.json());
app.use(cookieParser());
app.use(fileParser());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://dineout-clone-two.vercel.app/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
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