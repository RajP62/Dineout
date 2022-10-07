const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const razorpay = require("../configs/razorpay");
router.post("", async (req, res)=>{
    const payment_capture = 1;
    const amount = 499;
    const currency = 'INR';

    const options = {
        amount: amount*100,
        currency,
        receipt: shortid.generate(),
        payment_capture
    }

    try{
        console.log("entered line 1");
        const response = await razorpay.orders.create(options);
        console.log('entered line 2');
        const {id, currency, amount} = response;
        return res.json({
            id,
            currency,
            amount
        });
    }
    catch(error){
        return res.send({error:true, message: "Something went wrong"});
    }
});

module.exports = router;