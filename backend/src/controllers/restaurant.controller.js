const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurant.model");

<<<<<<< HEAD
router.get("", async(req,res)=>{
    try{
        let data = await Restaurants.find().populate("reviews").populate({path:"about.cuisine", model:"cuisine"}).populate({path:"about.type",model:"type"}).populate({path:"about.quickFilters", model:"quickfilter"}).populate({path:"about.facilities", model:"facility"}).lean().exec();
        res.status(200).json({data});      
    }
    catch(e){
        return res.status(500).json({status:"failed",message:e.message});
    }
});

router.get("/filter", async(req,res)=>{
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
        let data = await Restaurants.findById(req.params.id).populate("reviews").populate({path:"about.cuisine", model:"cuisine"}).populate({path:"about.type",model:"type"}).populate({path:"about.quickFilters", model:"quickfilter"}).populate({path:"about.facilities", model:"facility"}).lean().exec();
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
        res.status(500).json({error: e.message});
    }
})
module.exports = router;
=======
router.get("", async (req, res) => {
  try {
    let data = await Restaurants.find()
      .populate("reviews")
      .populate({ path: "about.cuisine", model: "cuisine" })
      .populate("about.type")
      .populate({ path: "about.quickFilters", model: "quickfilter" })
      .populate({ path: "about.facilities", model: "facility" })
      .lean()
      .exec();
    res.status(200).json({ data });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/filter", async (req, res) => {
  try {
    let data = await Restaurants.find({})
      .populate("reviews")
      .populate({ path: "about.cuisine", model: "cuisine" })
      .populate("about.type")
      .populate({ path: "about.quickFilters", model: "quickfilter" })
      .populate({ path: "about.facilities", model: "facility" })
      .lean()
      .exec();
    data = data.filter((el) => el.state.name === req.query.state);
    res.status(200).json({ data });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    let data = await Restaurants.findById(req.params.id)
      .populate("reviews")
      .populate({ path: "about.cuisine", model: "cuisine" })
      .populate("about.type")
      .populate({ path: "about.quickFilters", model: "quickfilter" })
      .populate({ path: "about.facilities", model: "facility" })
      .lean()
      .exec();
    return res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
>>>>>>> 61faa9005aa211b32f918a193418cf0f6c430b3b
