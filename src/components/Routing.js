import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";
import About from "./pages/About"
import Login from "./pages/Login"
import Menu from "./pages/Menu";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}