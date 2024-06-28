import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";

function AddCar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    modelYear: "",
    photo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addNewCar = async () => {
    try {
      const res = await axios.post("/api/cars", formData);
      navigate("/sell");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCar();
    setFormData({
      name: "",
      price: "",
      modelYear: "",
      photo: "",
    });
  };

  return (
    <div className="w-screen h-auto p-8 flex flex-col justify-center items-center">
      <div className="flex justify-start mb-4 w-full">
        <button
          onClick={() => navigate("/sell")}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
        >
          Back
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center bg-slate-100 w-8/12 h-auto p-4 rounded-lg shadow-md"
      >
        <div className="w-full mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Car Model
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Car model"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
            placeholder="Enter your price"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700"
          >
            Year of Model
          </label>
          <input
            type="number"
            name="modelYear"
            id="modelYear"
            value={formData.modelYear}
            onChange={handleChange}
            placeholder="Enter Year"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Photo url
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            onChange={handleChange}
            value={formData.photo}
            placeholder="Enter Photo url"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCar;
