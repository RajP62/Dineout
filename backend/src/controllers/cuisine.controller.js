const express = require("express");

const router = express.Router();

const Cuisine = require("../models/cuisine.model");

router.get("", async(req,res)=>{
    try{
        let data = await Cuisine.find().lean().exec();
        res.status(200).json({data});
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
})

module.exports = router