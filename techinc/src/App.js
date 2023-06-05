import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Home
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
    </Router>
    
  );
}

export default App;
