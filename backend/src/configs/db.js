const {connect} = require('mongoose');
require("dotenv").config();

const connection = ()=>{
    return connect(process.env.MONGO_ATLAS_CONNECT);
}

module.exports = connection;