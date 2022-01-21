const {Schema, model} = require("mongoose");

const facilitySchema = new Schema({
    facilityImgUrl: {type:String, required:true},
    facilityName: {type:String, required: true}
});

module.exports = model("facility", facilitySchema);