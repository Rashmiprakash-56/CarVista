import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';


function SignUp() {
 
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    setFormData({username: '', email: '', password: ''});
  };


  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
          Sign Up
        </h2>
        <span className="text-sm text-gray-600 ">
          Don't have an account? Sign Up
        </span>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-200 text-sm md:text-base focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="Email Address"
               required
              className="w-full px-3 py-2 rounded-lg bg-gray-200 text-sm md:text-base focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-200 text-sm md:text-base focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
