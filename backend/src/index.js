const express = require("express");
const app = express();
app.use(express.json());

const restaurantCont = require("./controllers/restaurant.controller");
const cuisinecont = require("./controllers/cuisine.controller");
const facilityCont = require("./controllers/facility.controller");
const quickFilterCont = require("./controllers/quickfilter.controller");
const reviewCont = require("./controllers/review.controller");
const stateCont = require("./controllers/state.controller");
const typeCont = require("./controllers/type.controller");
const userCont = require("./controllers/user.controller");

app.use("/restaurants", restaurantCont);

app.use("/cuisine", cuisinecont);


module.exports = app;