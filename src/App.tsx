// import { useState } from "react";
import Home from "./Pages/Home";
import PricingPage from "../src/Sections/PricingPage";
import ContactPage from "../src/Sections/ContactPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-3xl ">
      {/* <Navbar /> */}
      <Routes>
        {/*Landing page */}
        <Route path="/" element={<Home />} />

        {/* Other routes can be added here */}
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
