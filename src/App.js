import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// companonants on my home page
import NavbarComponant from "./componants/Navbar";
import HeaderComponant from "./componants/Header";
import SliderComponent from "./componants/Carousel";
import ScheduleComponant from "./componants/Schedule";
import LocationComponant from "./componants/Location";
import FooterComponant from "./componants/Footer";




const App = () => {
  return (
    <div className="App">
      <NavbarComponant />
      <HeaderComponant />
      <SliderComponent/>
      <ScheduleComponant />
      <LocationComponant />
      <FooterComponant />

    </div>


  );
}

export default App;
