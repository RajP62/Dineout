require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

const restaurantCont = require("./controllers/restaurant.controller");
const cuisinecont = require("./controllers/cuisine.controller");
const facilityCont = require("./controllers/facility.controller");
const quickFilterCont = require("./controllers/quickfilter.controller");
const reviewCont = require("./controllers/review.controller");
const stateCont = require("./controllers/state.controller");
const typeCont = require("./controllers/type.controller");
const userCont = require("./controllers/user.controller");
const rzpCont = require("./controllers/razorpay.controller");

app.use("/razorpay", rzpCont);

app.use("/restaurants", restaurantCont);

app.use("/cuisine", cuisinecont);

app.use("/users", userCont);


module.exports = app;