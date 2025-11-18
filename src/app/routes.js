import React from "react";
import { Route, Routes} from "react-router-dom";
import { Home } from "../pages/home";
import { Socialicons } from "../components/socialicons";

const AnimatedRoutes = () => (
  <Routes>
    <Route path="*" element={<Home />} />
  </Routes>
);

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
