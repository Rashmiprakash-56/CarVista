import React from "react";
import axios from "../api/api";
import { useNavigate } from "react-router-dom";

function SellCarCard(props) {
  const { _id, name, price, modelYear,photo } = props;
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/cars/${_id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = ()=>{
     navigate("/sell/editcar",{state: props})
  }

  return (
    <div className="flex flex-col border border-gray-300 rounded-lg w-full m-4 p-4 shadow-md">
      <img
        src={photo}
        alt="car"
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="flex flex-col justify-between mt-3">
        <div>
          <span className="font-semibold text-lg">{name}</span>
          <span className="text-sm text-gray-600 block">{modelYear}</span>
          <span className="text-sm block">{price}</span>
        </div>

        <div className="flex justify-between ">
          <button
          onClick={handleEdit}
          className="mt-3 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 self-start">
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="mt-3 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 self-start"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellCarCard;
