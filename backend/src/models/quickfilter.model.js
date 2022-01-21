const {Schema, model} = require("mongoose");

const quickFilterSchema = new Schema({
    name: {type:String, required: true}
});

module.exports = model("quickfilter", quickFilterSchema);