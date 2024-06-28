import React, { useState, useEffect } from "react";
import SellCarCard from "../components/SellCarCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../api/api.js";

function SellingPage() {
  const [sellList, setSellList] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const naviagte = useNavigate();

  useEffect(() => {
    if (isLoggedIn) fetchUserCars();
  }, [isLoggedIn, sellList]);

  const fetchUserCars = async () => {
    try {
      const response = await axios.get("/api/cars/sell");
      setSellList(response.data);
    } catch (err) {
      console.error("Error fetching cars:", err);
    }
  };

  return ( isLoggedIn ?
    <div className="w-screen h-auto min-h-screen p-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => naviagte("/sell/addcar")}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
        >
          Add Car
        </button>
      </div>
      <div className="flex justify-start">
        <span className="text-lg font-semibold text-gray-800">
          Your Listed Cars
        </span>
      </div>

      <div className="grid grid-cols-1 pr-6 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sellList.map((car) => (
          <SellCarCard key={car.date} {...car} />
        ))}
      </div>
    </div> :

      <div className="w-full min-h-screen flex flex-col justify-center items-center gap-3">
        <span className="text-3xl m-3">Login to see your Listed Cars </span>
        
        <button
        onClick= {()=>naviagte("/login")}
         className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >Login</button>
      </div>
  );
}

export default SellingPage;
