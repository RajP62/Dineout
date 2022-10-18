require('dotenv').config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const crypto = require("node:crypto");  
const authenticate = require("../middlewares/authenticate");
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

        res.cookie('access', access_jwt, {sameSite:"none", secure:true, expires: new Date(Date.now() + 600000+864000000)});
        res.cookie('refresh', refresh_jwt, {sameSite:"none", secure:true, expires: new Date(Date.now()+ 3600000+864000000)});

        return res.send({error: false, message: {role}});
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

router.get("", authenticate,  async(req,res)=>{
    try{
        const access = req.cookies?.access;
        if(!access){
            return res.send({error: true, message: "User is not authenticated"});
        }
        let data = await new Promise((resolve, reject)=>{
            jwt.verify(access, process.env.JWT_KEY, function(err, decodedV){
                if(err){
                    reject(err.message);
                }
                resolve(decodedV);
            });
        });
        return res.send({error: false, data});
    }
    catch(e){
        return res.status(500).json({message: e});
    }
});


module.exports = router;