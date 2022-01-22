const {Schema, model} = require("mongoose");

const stateSchema = new Schema({
    name: {type:String, required: true}
});

module.exports = model("state", stateSchema);