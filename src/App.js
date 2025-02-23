import React from "react";
import Users from "./pages/users";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <div className="App" style={{ padding: "2%" }}>
      <h1>SPS TEST</h1>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} /> 
          {isAuthenticated ? <Route path="/users" element={<Users />} />  : <Route path="/*" element={<Login />} />}
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
