
import React from "react";
// import Test from "./Test"
import {BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Navbar from"./components/Navbar"
import Mange from "./pages/Mange";
import Notification from "./pages/Notification";
import Monitoring from "./pages/Monitoring";
import Emergency from "./pages/Emergency";
import Reporting from "./pages/Reporting";
import Welcome from "./pages/Welcome";


function App() {
  return (
 
    <Router>
      <Navbar /> 
      <Routes> 
       <Route exact path='/Mange' element={<Mange/>} />
       <Route exact path='/Notification' element={<Notification/>} />
       <Route exact path='/Monitoring' element={<Monitoring/>} /> 
       <Route exact path='/Emergency' element={<Emergency/>} /> 
       <Route exact path='/Reporting' element={<Reporting/>} /> 
       <Route exact path='/Welcome' element={<Welcome/>} /> 
      </Routes>
   </Router>
  );
}

export default App;
