import React from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const { isAuthenticated, login, principal, logout } = useAuth();
  const router=useNavigate()
  const handlelogin=()=>{
    router("/find")
  }
  return (
    <>
      {isAuthenticated ? (
        <button
          
          className="border bg-gray-400 p-2 rounded-md"
    
          onClick={handlelogin}
        >
        welcome 
        </button>
      ) : (
        <button onClick={login} className="border bg-gray-400 p-2 rounded-md">
          Login 
        </button>
      )}
    </>
  );
};

export default Login;