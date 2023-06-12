import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Profile from './Pages/Profile';
import Profile2 from './Pages/Profile2';
import CompanyProfile from "./Pages/CompanyProfile";
import UploadTask from "./Pages/UploadTask";
import Tasks from "./Pages/Tasks";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Test from "./Pages/test"


//Components
import { Navbar } from './Components/Navbar'


function App() {
  return (
    
    <Router>
      <div className="app-container">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
          <Route path="/UploadTask" element={<UploadTask />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About/>} />


        </Routes>
        </div>
    </Router>
    
  );
}

export default App;
