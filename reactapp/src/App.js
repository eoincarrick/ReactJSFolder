import "./css/App.css";
import React from "react";
import Home from "./components/pages/Home";
import Demo from "./components/pages/Demo";
import KeyFeatures from "./components/pages/KeyFeatures";
import Pricing from "./components/pages/Pricing";
import Testimonials from "./components/pages/Testimonials";
import Navbar from "./components/Navbar/Navbar";
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
