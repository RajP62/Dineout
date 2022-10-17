require('dotenv').config();
const jwt = require("jsonwebtoken");
const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, process.env.JWT_KEY, function(err, token){
            if(err) return reject(err);
            return resolve(token);
        });
    });
}

module.exports = async (req, res, next)=>{
   
    const bearerToken = req.cookies?.access;
    console.log("cookie is",bearerToken)
    let user;
    try{
        user= await verifyToken(bearerToken);
    }
    catch(e){
        return res.status(400).send({error:true, message: "Authentication failed due to invalid token"});
    }

    if(!user){
        return res.status(400).send({status:"failed", message: "Please provide a valid token"});
    }

    req.user = user;

    return next();
}