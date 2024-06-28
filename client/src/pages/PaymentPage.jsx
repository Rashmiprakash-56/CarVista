import axios from '../api/api';
import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from "../assets/Logo.svg"

function PaymentPage() {
   const location = useLocation();
   const navigate = useNavigate();
   const { _id, name, price, modelYear, photo } = location.state;
   const key_id = import.meta.env.VITE_RAZORPAY_ID;

   const paymentHandler = async (e) =>{
    try {
      const order = await axios.post('/api/payment', {
        amount : price,
        currency: "INR",
        receipt: "qwsaq1"
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      console.log(order.data);

      var options = {
        "key": key_id,
        "amount": price, 
        "currency": "INR",
        "name": "CarVista", 
        "description": "Test Transaction",
        "image": {Logo},
        "order_id": order.id, 
    
        "prefill": { 
          "name": "", //customer's name
          "email": "gaurav.kumar@example.com", 
          "contact": "9000090000"  
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });

    rzp1.open();
    e.preventDefault();

    } catch (error) {
      console.error("Error making payment:", error);
    }
  }

  return (
    <div className="w-screen h-auto flex flex-col items-center justify-center p-4 md:p-8">
      <div className="flex justify-start w-full mb-4 md:mb-8">
        <button
          onClick={() => navigate("/buy")}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
        >
          Back
        </button>
      </div>
  
      <div className="flex flex-col justify-between items-center bg-slate-100 m-4 p-4 shadow-md w-full md:w-3/4 lg:w-1/2 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <img
            src={photo}
            alt="car"
            className="object-cover rounded-t-lg w-full h-48 md:h-64 flex-grow"
          />
          <span className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold text-center">{name}</span>
          <span className="mt-1 text-lg md:text-xl lg:text-2xl text-gray-600">{modelYear}</span>
        </div>
        <div className="mt-4">
          <button
            onClick={paymentHandler}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            PAY {price} Rs
          </button>
        </div>
      </div>
    </div>
  );
}  

export default PaymentPage