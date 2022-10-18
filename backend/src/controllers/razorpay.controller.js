const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const razorpay = require("../configs/razorpay");
router.post("", async (req, res)=>{
    const payment_capture = 1;
    const amount = req.body?.price;
    const currency = 'INR';

    const options = {
        amount: amount*100,
        currency,
        receipt: shortid.generate(),
        payment_capture
    }

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
        return res.redirect("https://dineoutclone-gamma.vercel.app/success");
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = router;