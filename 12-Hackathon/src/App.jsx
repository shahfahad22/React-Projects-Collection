import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
     <>
     
      <Toaster position="top-right" reverseOrder={false} />
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/cart" element={isLoggedIn ? <Cart /> : <Login />} />
        <Route path="/checkout" element={isLoggedIn ? <Checkout /> : <Login />} />
      </Routes>
    </Router>
     </>
  );
}

export default App;
