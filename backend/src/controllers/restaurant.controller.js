const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurant.model");
const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorization");
// authenticate, authorise(['user', 'admin']),
router.get("", async(req,res)=>{
    try{
        const page = +req.query?.page || 1;
        const limit = +req.query?.limit || 10;
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
console.log(page,limit)
        let data = await Restaurants.aggregate([{$match:{$and: [{$expr:{$setIsSubset:[bestSelling, "$about.bestselling"]}}, {$expr:{$setIsSubset:[facilities, "$about.facilities"]}}, {$expr:{$setIsSubset:[dishes, "$about.quickFilters"]}}, {$expr:{$setIsSubset:[tags, "$about.type"]}}, {$expr:{$setIsSubset:[cuisines, "$about.cuisine"]}}]}}, {$sort:sort}]).skip(skip).limit(limit)
      let totalPages= await Restaurants.aggregate([{$match:{$and: [{$expr:{$setIsSubset:[bestSelling, "$about.bestselling"]}}, {$expr:{$setIsSubset:[facilities, "$about.facilities"]}}, {$expr:{$setIsSubset:[dishes, "$about.quickFilters"]}}, {$expr:{$setIsSubset:[tags, "$about.type"]}}, {$expr:{$setIsSubset:[cuisines, "$about.cuisine"]}}]}}, {$sort:sort}])
      
        console.log(data.length,"length",limit)
        // const totalPages = Math.ceil(data.length/limit);

        return res.status(200).json({data, totalPages:totalPages.length});
    }
    catch(e){
        return res.status(500).json({status:"failed",message:e.message})}
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

router.get('/id/:id', async(req,res)=>{
    try{
       
        let data = await Restaurants.findById(req.params.id).lean().exec();
        return res.status(200).json({data})
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
}); 

router.get("/featured", async(req,res)=>{
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
