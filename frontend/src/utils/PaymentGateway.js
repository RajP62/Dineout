import { alignProperty } from "@mui/material/styles/cssUtils";


export default async function DisplayRazorpay(price, name){
    price = +price;
    const data = await fetch("http://localhost:4000/razorpay",{
        method: "POST",
        body: JSON.stringify({price}),
        headers:{
            'Content-Type':"application/json"
        }
    }).then(res=>res.json());
   const {currency, amount, id} = data;
    const options = {
        key: process.env.RZP_KEY,
        currency,
        amount,
        description: "Book your dineout",
        image: 'https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png',
        order_id: id,
        handler: function(response){
            const {razorpay_order_id, razorpay_payment_id} = response;
            alert("Order Id", razorpay_order_id);
        },
        prefill: {
            name:"User",
            email: "test@gmail.com",
            contact: '8867756364'
        },
        callback_url:"http://localhost:4000/razorpay/result",
        redirect: true

    }

    const paymentObject = new window.Razorpay(options);

    paymentObject.open();

}