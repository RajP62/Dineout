const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const razorpay = require("../configs/razorpay");
const Booking = require("../models/booking.model");
router.post("", async (req, res)=>{
    const payment_capture = 1;
    const amount = req.body?.price;
    const currency = 'INR';
    const {date, time} = req.body;
    const access = req.cookies?.access;
    const options = {
        amount: amount*100,
        currency,
        receipt: shortid.generate(),
        payment_capture
    }
    let data = await new Promise((resolve, reject)=>{
        jwt.verify(access, process.env.JWT_KEY, function(err, decodedV){
            if(err){
                reject(err.message);
            }
            resolve(decodedV);
        });
    });
    const booking = new Booking({date, time, user: data.id});
    await new Promise((resolve, reject)=>{
        booking.save().then(()=>{
            resolve("Booking added successfully");
        }).catch(e=>{
            reject("Something went wrong");
        })
    });
    try{
        const response = await razorpay.orders.create(options);
        console.log(response);
        const {id, currency, amount} = response;
        return res.json({
            id,
            currency,
            amount
        });
    }
    catch(error){
        return res.send({error:true, message: error});
    }
});

router.post("/result", async(req,res)=>{
    try {
        return res.redirect("http://localhost:3000/success");
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = router;