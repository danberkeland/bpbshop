import React from "react";

import { AnimatePresence } from "framer-motion";
import { useSettingsStore } from "../Contexts/SettingsZustand";

import { NavSide } from "./Nav";
import Cart from "../Pages/Cart";
import OrderForm from "../Pages/OrderForm";

function AnimatedRoutes({ Routes, Route, useLocation }) {
  const authClass = useSettingsStore((state) => state.authClass);
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/OrderForm" element={<OrderForm />} />

        <Route path="/" element={<NavSide />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
