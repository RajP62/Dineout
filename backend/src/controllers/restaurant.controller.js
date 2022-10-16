const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurant.model");
const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorization");
const path= require("path");
const splitByComma = (str)=>{
    let arr =  str.trim().split(",");
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].trim();
    }
    return arr;
}

router.get("", async(req,res)=>{
    try{
        const page = +req.query?.page || 1;
        const limit= +req.query?.limit || 10;
        let dishes = req.query?.dishes || "";
        let cuisines = req.query?.cuisines || "";
        let tags = req.query?.tags || "";
        let features = req.query?.features || "";
        let dineout_passport = req.query.dineout_passport || "";
        let sort = req.query?.sort || "";
        let facilities = req.query?.facilities || "";
        let bestSelling = req.query?.bestselling || "";
        const skip = (page-1) * limit;
        dishes = dishes? dishes.split("&") : [];
        cuisines = cuisines? cuisines.split("&") : [];
        tags = tags? tags.split("&") : [];
        features = features? features.split("&") : [];
        dineout_passport = dineout_passport? dineout_passport.split("&") : [];
        facilities = facilities? facilities.split("&") : [];
        bestSelling = bestSelling? bestSelling.split("&") : [];
        sort = sort? sort==='price_asc'? {'avgcost' : 1} : sort==='price_desc'? {'avgcost': -1} : sort==='popularity'? {"featured": -1} : {sort : 1} : {sort : 1};

        let data = await Restaurants.aggregate([{$match:{$and: [{$expr:{$setIsSubset:[bestSelling, "$about.bestselling"]}}, {$expr:{$setIsSubset:[facilities, "$about.facilities"]}}, {$expr:{$setIsSubset:[dishes, "$about.quickFilters"]}}, {$expr:{$setIsSubset:[tags, "$about.type"]}}, {$expr:{$setIsSubset:[cuisines, "$about.cuisine"]}}]}}, {$sort:sort}]).skip(skip).limit(limit);
        
        const totalPages = Math.ceil(data.length/limit);

        return res.status(200).json({data, totalPages});
    }
    catch(e){
        return res.status(500).json({status:"failed",message:e.message});
    }
});

router.get("/filter", authenticate, authorise(['user', 'admin']), async(req,res)=>{
    try{
        let data = await Restaurants.find({}).populate("reviews").populate({path:"about.cuisine", model:"cuisine"}).populate("about.type").populate({path:"about.quickFilters", model:"quickfilter"}).populate({path:"about.facilities", model:"facility"}).lean().exec();
        data = data.filter(el=>el.state.name===req.query.state);
        res.status(200).json({data});
    }
    catch(e){
        return res.status(500).json({error:e.message});
    }
});

router.get('/id/:id', authenticate, authorise(['user', 'admin']), async(req,res)=>{
    try{
        let data = await Restaurants.findById(req.params.id).populate("reviews").populate({path:"about.cuisine", model:"cuisine"}).populate({path:"about.type",model:"type"}).populate({path:"about.quickFilters", model:"quickfilter"}).populate({path:"about.facilities", model:"facility"}).lean().exec();
        return res.status(200).json({data})
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
}); 

router.get("/featured", authenticate, authorise(['user', 'admin']), async(req,res)=>{
    try{
        const data = await Restaurants.find({featured: true}).lean().exec();
        return res.status(200).json({data});
    }
    catch(e){
        return res.status(500).json({error: e.message});
    }
});

router.post("/add", authenticate, authorise(['user']), async(req, res)=>{
    try{
        if(!req.files.imagePrimary || !req.files.altImages){
            return res.send({error: true, message:"Please send the valid image"});
        }
        const imagePrimary= req.files?.imagePrimary;
        const altImages = req.files?.altImages;
        const imagePrimaryPath = path.join(__dirname, "../..", "files", imagePrimary.name);
        const altImgPath = path.join(__dirname, `../..`, "files", altImages.name);
        imagePrimary.mv(imagePrimaryPath, function(err){
            if(err){
                console.log("error in image primary", err.message);
                return res.send({error: true, message: err.message});
            }
        });
        altImages.mv(altImgPath, function(err){
            if(err){
                console.log("error in alt Image", err.message);
                return res.send({error: true, message: err.message});
            }
        });
        let {title, state, district, place, featured, contact, fssai, avgcost,cuisine, type, bestselling, facilities, quickFilters, openAt, closeAt} = req.body;
        cuisine = splitByComma(cuisine);
        type = splitByComma(type);
        bestselling = splitByComma(bestselling);
        facilities = splitByComma(facilities);
        quickFilters = splitByComma(quickFilters);
        openAt = +openAt;
        closeAt = +closeAt;
        const finalBody = {imagePrimary: imagePrimaryPath, altImages:[altImgPath], title, state, district, place, featured, contact, fssai, avgcost, about:{cuisine, type, bestselling, facilities, quickFilters, openAt, closeAt}};
        console.log("finalBody", finalBody);
        const restaurant = new Restaurants(finalBody);
        restaurant.save().then(()=>{
            return res.send({error: false, message: "Restaurant Added Successfully"});
        }).catch(e=>{
            return res.send({error: true, message: e.message});
        });
    }
    catch(e){
        return res.send({error: true, message: e.message});
    }
});
module.exports = router;
