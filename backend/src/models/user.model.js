const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    firstName: {type:String, required: true},
    lastName: {type:String},
    email: {type:String, required: true, unique:true},
    password: {type:String, required: true},
    role: {type:String, required:true, enum:['restaurant', 'user', 'admin']}
});

module.exports = model("user", userSchema);