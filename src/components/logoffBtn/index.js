import React from "react";
import { useNavigate } from "react-router-dom";

const LogoffButton = () => {
  const navigate = useNavigate();

  const logoff = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <button 
      onClick={logoff} 
      className="btn btn-warning ml-auto" 
      style={{ display: "block" }} 
    >
      Logoff
    </button>
  );
};

export default LogoffButton;
