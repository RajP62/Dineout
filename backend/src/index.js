const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileParser = require("express-fileupload");
app.use(express.json());
app.use(cookieParser());
app.use(fileParser());

// var corsOptions = {
//     origin: 'https://singular-wisp-16a48c.netlify.app/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://singular-wisp-16a48c.netlify.app/');
    res.header("Access-Control-Allow-Private-Network", true);
    res.header("InsecurePrivateNetworkRequestsAllowed", true);
    next();
  });

const restaurantCont = require("./controllers/restaurant.controller");
const userCont = require("./controllers/user.controller");
app.use("/restaurants", restaurantCont);

app.use("/users", userCont);


module.exports = app;