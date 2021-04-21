import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
    
      <footer>
        Coded by {" "}
      <a href="https://github.com/17thaugust/weather-app-react" target="_blank">Karolina</a>
    </footer>
    </div>
    </div>
  );
}