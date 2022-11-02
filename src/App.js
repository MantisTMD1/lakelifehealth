import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Routes
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutTanae";
import Contactform from "./Pages/Contactform";
import Services from "./Pages/Services";
import Home from './Pages/Home';

const App = () => {
  return (

    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Contactform" element={<Contactform />} />
        <Route path="Services" element={<Services />} />
      </Routes>
    </div>


  );
}
export default App;
