import React ,{useState,useEffect}from "react";
import BuyCarCard from "../components/BuyCarCard";
import axios from "../api/api.js"
import { useSelector } from "react-redux";

function BuyingPage() {
    const [carList,setCarList] = useState([]);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    useEffect(()=>{
      if(isLoggedIn)
         fetchCarforSell();
      
      else 
         fetchAllCars();
    },[isLoggedIn]);

    const fetchCarforSell = async()=>{
      try{
        const response = await axios.get('/api/cars/buy');
        setCarList(response.data)
      } catch(err){
        console.error('Error fetching cars:', err);
      }
    }
    const fetchAllCars = async()=>{
      try{
        const response = await axios.get('/api/cars');
        setCarList(response.data)
      } catch(err){
        console.error('Error fetching cars:', err);
      }
    }

  return (
    <div className="w-screen h-auto min-h-screen p-8">
      <div className="grid grid-cols-1 pr-6 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       
        {carList.map((car)=>(
          <BuyCarCard key={car.date} {...car}/>
        ))}
      </div>
    </div>
  );
}

export default BuyingPage;
