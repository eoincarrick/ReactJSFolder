import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </Router>,
  root
);
