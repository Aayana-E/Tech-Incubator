import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Home
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Profile from './Pages/Profile';

import Test from "./Pages/test"



function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </div>
    </Router>
    
  );
}

export default App;
