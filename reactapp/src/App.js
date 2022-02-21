import "./css/App.css";
import React from "react";
import Home from "./components/pages/js/Home";
import Demo from "./components/pages/js/Demo";
import KeyFeatures from "./components/pages/js/KeyFeatures";
import Pricing from "./components/pages/js/Pricing";
import Testimonials from "./components/pages/js/Testimonials";
import Navbar from "./components/components/Navbar/js/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/features" element={<KeyFeatures />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
};

export default App;
