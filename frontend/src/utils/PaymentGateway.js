import {useNavigate} from "react-router-dom";

export default async function displayRazorpay(){
    console.log('entered')
    const data = await fetch("http://localhost:4000/razorpay",{
        method: "POST"
    }).then(res=>res.json());
    console.log("datacame is ", data)
   const {currency, amount, id} = data;
    const options = {
        key: process.env.RZP_KEY,
        currency,
        amount,
        description: "Book your dineout",
        image: 'https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png',
        order_id: id,
        handler: function(response){
            alert("Payment Id :", response.razorpay_payment_id);
            alert("Order Id :", response.razorpay_order_id);
            // navigate("/success");
        },
        prefill: {
            name: "Rajesh Paul",
            email: "rajesh4151999@gmail.com",
            contact: '9210812067'
        },
        callback_url:"http://localhost:3000/success"

    }

    const paymentObject = new window.Razorpay(options);

    paymentObject.open();
}