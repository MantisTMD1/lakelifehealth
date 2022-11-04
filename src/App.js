import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Routes
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/abouttanae";
import Contactform from "./pages/contactform";
import Services from "./pages/services";
import Home from './pages/home';

const App = () => {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Contactform" element={<Contactform />} />
        <Route path="Services" element={<Services />} />
      </Routes>
    </div>


  );
}
export default App;
