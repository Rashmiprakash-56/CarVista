import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-slate-800 gap-4 min-h-screen h-auto p-4">
      <div className="p-4 w-full md:w-auto">
        <Login />
      </div>
  
      <div className="p-4 w-full md:w-auto">
        <Signup />
      </div>
    </div>
  );
  
}

export default LoginPage;
