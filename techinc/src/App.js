import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Home
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Profile from './Pages/Profile';
import Profile2 from './Pages/Profile2';
import CompanyProfile from "./Pages/CompanyProfile";
import UploadTask from "./Pages/UploadTask";
import Tasks from "./Pages/Tasks";
import Dashboard from "./Pages/Dashboard";

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
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
          <Route path="/UploadTask" element={<UploadTask />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/Dashboard" element={<Dashboard />} />


        </Routes>
        </div>
    </Router>
    
  );
}

export default App;
