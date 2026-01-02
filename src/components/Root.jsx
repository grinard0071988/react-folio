import React, { useState, useEffect } from "react";

import Footer from "../features/Footer";
import Scrollbar from "../features/Scrollbar";
import Header from "../features/Header";
import { Outlet } from "react-router-dom";
import "../index.css";

export default function Root() {
  return (
    <div id="style-body" className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <Header />

      {/* General Section */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <Scrollbar />
    </div>
  );
}
