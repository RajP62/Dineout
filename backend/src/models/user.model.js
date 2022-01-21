const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    firstName: {type:String, required: true},
    lastName: {type:String},
    email: {type:String, required: true},
    password: {type:String, required: true},
});

module.exports = model("user", userSchema);