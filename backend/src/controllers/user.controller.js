require('dotenv').config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const crypto = require("node:crypto");  

router.post("/add", async(req,res)=>{
    try{
        const {firstName, lastName, email, password, role="user"} = req.body;
        const token = crypto.pbkdf2Sync(password, process.env.CRYPTO_SALT, 60, 60, "sha256").toString("hex");
        const user = new User({firstName, lastName, email, password:token, role});
        user.save().then(()=>{
            return res.send({success: true, message:"User registration successfull"});
        })
        .catch(e=>{
            return res.send({error:true, message: e.message});
        });
       
    }
    catch(e){
        return res.status(500).json({message: e.message});
    }
});

router.post("/login", async(req, res)=>{
    try{
        const {email, password} = req.body;
        const hash = crypto.pbkdf2Sync(password, process.env.CRYPTO_SALT, 60, 60, "sha256").toString("hex");
        let user = await User.find({email});
        if(user.length===0){
            return res.status(401).send({error: true, message: "User doesn't exist with such email"});
        }
      
        let {firstName, lastName, email:mail, role} = user[0];
     
        if(user[0].password!==hash){
            return res.status(401).send({error: true, message:"Invalid password"});
        }

        const access_jwt = jwt.sign({firstName, lastName, email:mail, role}, process.env.JWT_KEY, {expiresIn:"10m"});

        const refresh_jwt = jwt.sign({firstName,lastName, email:mail, role}, process.env.REFRESH_KEY, {expiresIn:"7d"});

        res.cookie('access', access_jwt, { maxAge:600000});
        res.cookie('refresh', refresh_jwt, { maxAge: 604800000});

        res.send({error: false, message: "User successfully logged in"});
    }
    catch(e){
        return res.send({error:true, message: e.message});
    }
});

router.get("/refresh", async(req, res)=>{
    try{
        const token = req.cookies?.refresh;
        if(!token){
            return res.send({error: true, message: "Refresh token doesn't exist"});
        }
        let decoded;
        try{
            jwt.verify(token, process.env.REFRESH_KEY, function(err, resp){
                if(err) return res.send({error: true, message: "Invalid refresh token"});
                decoded=resp;
            });
        }
        catch(e){
            return res.send({error: true, message: `error is ${e.message}`});
        }
        const {firstName, lastName, email, role} = decoded;

        const access_jwt = jwt.sign({firstName, lastName, email, role}, process.env.JWT_KEY, {expiresIn: "10m"});
        res.cookie("access", access_jwt, { maxAge: 600000});
        return res.send({error: false, message: "Access token sent successfully"});
    }
    catch(e){
        return res.send({error: true, message: e.message});
    }
});

router.get("", async(req,res)=>{
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send({data:users});
    }
    catch(e){
        res.status(500).json({message: e.message});
    }
});


module.exports = router;