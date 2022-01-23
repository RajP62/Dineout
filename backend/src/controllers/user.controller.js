const express = require("express");

const router = express.Router();

const User = require("../models/user.model");


router.post("/add", async(req,res)=>{
    try{
        const addUser = await User.create(req.body);
        return res.status(200).send(addUser);
    }
    catch(e){
        res.status(500).json({message: e.message});
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
})


module.exports = router;