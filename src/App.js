import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
// companonants on my home page
import NavbarComponant from "./componants/Navbar";
import HeaderComponant from "./componants/Header";
import SliderComponent from "./componants/Carousel";
import ScheduleComponant from "./componants/Schedule";
import LocationComponant from "./componants/Location";
import FooterComponant from "./componants/Footer";
// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutTanae";
import Contactform from "./Pages/Contactform";
import Services from "./Pages/Services";


const App = () => {
  return (
    <div className="App">
      <NavbarComponant />
      <HeaderComponant />
      <SliderComponent />
      <ScheduleComponant />
      <LocationComponant />
      <FooterComponant />

    </div>

  );




}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter forceRefresh={true}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="Contactform" element={<Contactform />} />
      <Route path="Services" element={<Services />} />
    </Routes>
  </BrowserRouter>
);




export default App;
