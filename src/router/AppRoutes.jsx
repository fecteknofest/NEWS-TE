import React from "react";
import { Routes, Route } from "react-router-dom"; 
import MainPage from "../pages/main/MainPage";

function AppRoutes() {
  return (
    <Routes>
      <Route  path="/" element={<MainPage />} />
      {/* Uncomment the following lines after creating the respective components */}
      {/* <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default AppRoutes;
