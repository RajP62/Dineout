const express = require("express");
const app = express();
app.use(express.json());

const restaurantCont = require("./src/controllers/restaurant.controller");
const cuisinecont = require("./src/controllers/cuisine.controller");
const facilityCont = require("./src/controllers/facility.controller");
const quickFilterCont = require("./src/controllers/quickfilter.controller");
const reviewCont = require("./src/controllers/review.controller");
const stateCont = require("./src/controllers/state.controller");
const typeCont = require("./src/controllers/type.controller");
const userCont = require("./src/controllers/user.controller");

app.use("/restaurants", restaurantCont);

app.use("/cuisine", cuisinecont);

app.use("/users", userCont);
app.listen(5010,function(){
    console.log("server is running on port 5010");
 });

module.exports = app;