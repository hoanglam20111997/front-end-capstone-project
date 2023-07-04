import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from "./pages/Homepage";
import { ReservationPage } from "./pages/ReservationPage";
import { OrderPage } from "./pages/OrderPage";
import { AboutPage } from "./pages/AboutPage"
import { LoginPage } from "./pages/LoginPage"
import { MenuPage } from "./pages/MenuPage";
import { ConfirmedBooking } from './ConfirmedBooking';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/reservation" element={<ReservationPage/>} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}