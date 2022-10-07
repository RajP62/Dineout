const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurant.model");
const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorization");

router.get("", authenticate, authorise(['user', 'admin']), async(req,res)=>{
    try{
        const page = req.query?.page || 1;
        const limit = req.query?.limit || 10;
        let quick_filters = req.query?.quick_filters || "";
        let cuisines = req.query?.cuisines || "";
        let tags = req.query?.tags || "";
        let features = req.query?.features || "";
        let dineout_passport = req.query.dineout_passport || "";
        let sort = req.query?.sort || "";
        let facilities = req.query?.facilities || "";
        let bestSelling = req.query?.bestselling || "";
        const skip = (page-1) * limit;
        quick_filters = quick_filters? quick_filters.split("&") : [];
        cuisines = cuisines? cuisines.split("&") : [];
        tags = tags? tags.split("&") : [];
        features = features? features.split("&") : [];
        dineout_passport = dineout_passport? dineout_passport.split("&") : [];
        facilities = facilities? facilities.split("&") : [];
        bestSelling = bestSelling? bestSelling.split("&") : [];
        sort = sort? sort==='price_asc'? {'avgcost' : 1} : sort==='price_desc'? {'avgcost': -1} : {sort : 1} : {sort : 1};


        let data = await Restaurants.aggregate([{ $lookup: { from: "cuisines", localField: "cuisine", foreignField: "ID", as: "about.cuisine" } }, { $lookup: { from: "types", localField: "type", foreignField: "ID", as: "about.type" } }, { $lookup: { from: "quickfilters", localField: "quickFilters", foreignField: "ID", as: "about.quickFilters" } }, { $lookup: { from: "facilities", localField: "facilities", foreignField: "ID", as: "about.facilities" } }, { $unset: ["about.facilities._id", "about.quickFilters._id", "about.type._id", "about.cuisine._id"] }, { $project: { "_id": 1, "imagePrimary": 1, "altImages": 1, "title": 1, "state": 1, "district": 1, "place": 1, "featured": 1, "contact": 1, "fssai": 1, "avgcost": 1, "about.cuisine": "$about.cuisine.name", "about.type": "$about.type.name", "about.quickFilters": "$about.quickFilters.name", "about.facilities": "$about.facilities.facilityName", "about.bestselling":1}}, {$match:{$and: [{$expr:{$setIsSubset:[bestSelling, "$about.bestselling"]}}, {$expr:{$setIsSubset:[facilities, "$about.facilities"]}}, {$expr:{$setIsSubset:[quick_filters, "$about.quickFilters"]}}, {$expr:{$setIsSubset:[['Andaz Delhi', '5 Star'], "$about.type"]}}, {$expr:{$setIsSubset:[cuisines, "$about.cuisine"]}}]}}, {$sort : sort}]).skip(skip).limit(limit);
        // without sorting 
        const totalPages = Math.ceil(data/limit);

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

router.post("/add", authenticate, authorise(['restaurant', 'admin']), async(req, res)=>{
    try{
        const restaurant = req.body;
        const saveRest = new Restaurants(restaurant);
        saveRest.save().then(()=>{
            return res.send({acknowledged: true, message: "Restaurant added successfully"});
        })
        .catch(e=>{
            return res.send({error: true, message: e.message});
        })
    }
    catch(e){
        return re.send({error: true, message: "Something went wrong"});
    }
});
module.exports = router;
