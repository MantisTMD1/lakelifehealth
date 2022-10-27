import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutTanae";
import Contactform from "./Pages/Contactform";
import Services from "./Pages/Services";

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
