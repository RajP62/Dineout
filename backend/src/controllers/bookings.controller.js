const express = require("express");
const Booking = require("../models/booking.model");
const router = express.Router();

router.get("/:id", async(req, res)=>{
    try{
        const data = await Booking.aggregate([{$match: {_id: req.params.id}}]);

        return res.send({error: false, data});
    }
    catch(e){
        return res.send({error: false, message: e.message});
    }
});

router.post("/add", async(req, res)=>{
    try{
        const {user, date, time} = req.body;
        const blog = new Booking({user, date, time});
        Booking.save().then(()=>{
            return res.send({error: false, message: "Blog added successfully"});
        }).catch(e=>{
            return res.send({error: true, message: "Something went wrong"});
        });
    }
    catch(e){
        return res.send({error: true, message: e.message});
    }
    

})
module.exports = router;