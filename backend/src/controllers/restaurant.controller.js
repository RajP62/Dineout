const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurant.model");
const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorization");
const quickfilterModel = require("../models/quickfilter.model");

router.get("", authenticate, authorise(['user', 'admin']), async(req,res)=>{
    try{
        const page = req.query?.page || 1;
        const quick_filters = req.query?.quick_filters || '';
        const cuisines = req.query?.cuisines || '';
        const tags = req.query?.tags || '';
        const features = req.query?.features || '';
        const dineout_passport = req.query.dineout_passport || '';
        const _sort = req.query?._sort || '';

        
        let data = await Restaurants.find().populate("reviews").populate({path:"about.cuisine", model:"cuisine"}).populate({path:"about.type",model:"type"}).populate({path:"about.quickFilters", model:"quickfilter"}).populate({path:"about.facilities", model:"facility"}).lean().exec();
        res.status(200).json({data});      
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
