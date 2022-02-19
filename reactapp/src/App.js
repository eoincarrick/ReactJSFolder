import { firstName, lastName } from "./components/index.js";
import { useState } from "react";
import "./css/App.css";
const App = () => {
  const [dick, setDick] = useState([
    {
      id: Math.round(Math.random * 10),
      name: "Eoin Carrick",
      school: "Maritime University",
      certificate: true,
    },
    {
      id: Math.round(Math.random * 10),
      name: "Rocky Essel",
      school: "U University",
      certificate: false,
    },
    {
      id: Math.round(Math.random * 10),
      name: "Weddey Akison",
      school: "A University",
      certificate: true,
    },
    {
      id: Math.round(Math.random * 10),
      name: "Saint John",
      school: "X University",
      certificate: true,
    },
    {
      id: Math.round(Math.random * 10),
      name: "John Doe",
      school: "C University",
      certificate: false,
    },
    {
      id: Math.round(Math.random * 10),
      name: "Kofi Tetteh",
      school: "F University",
      certificate: true,
    },
  ]);
  return <div className="App">
    <p>Hello Wolds</p>
  </div>;
};

export default App;
