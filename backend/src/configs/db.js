require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async()=>{
    return await mongoose.connect("mongodb+srv://dineout:ARSSV@cluster0.kk5ca.mongodb.net/ProjectDineout?retryWrites=true&w=majority")
}