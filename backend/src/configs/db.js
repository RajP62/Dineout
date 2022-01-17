require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async()=>{
    return await mongoose.connect(process.env.MONGO_ATLAS_CONNECT);
}