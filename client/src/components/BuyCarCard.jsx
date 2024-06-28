import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BuyCarCard(props) {
   const navigate = useNavigate();
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
   const {
      name,
      price,
      modelYear,
      photo
   } = props;

   const handleBuy = ()=>{
     if(isLoggedIn){
      navigate("/buy/payment" ,{state : props})
     }
     else {
      navigate("/login")
     }
   }

  return (
    <div className="flex flex-col border bg-white border-gray-300 rounded-lg w-full m-4 p-4 shadow-md">
      <img
        src={photo}
        alt="car"
        className="w-full h-32 object-cover rounded-t-lg flex-grow"
      />
      <div className="flex flex-col justify-between mt-3">
        <div>
          <span className="font-semibold text-lg">{name}</span>
          <span className="text-sm text-gray-600 block">{modelYear}</span>
          <span className="text-sm block">{price}</span>
        </div>
        <button
        onClick={handleBuy}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 self-start">
          Buy
        </button>
      </div>
    </div>
  );
}

export default BuyCarCard;
