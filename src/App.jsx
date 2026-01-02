import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";

import "./index.css";
import AboutPage from "./components/about/AboutPage";
import ResumePage from "./components/ResumePage";
import ServicePage from "./components/ServicePage";
import ContactPage from "./components/ContactPage";
import PortfolioPage from "./components/PortfolioPage";
import Root from "./components/Root";
import HomePage from "./components/home/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
