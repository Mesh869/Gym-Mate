// import React from "react";
import Hero from "../Sections/Hero";
// import About from "../Sections/About";
// import Services from "../Sections/Services";
import PricingPage from "../Sections/PricingPage";
// import Testimonials from "../Sections/Testimonials";
import ContactPage from "../Sections/ContactPage";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <PricingPage />
      <ContactPage />
      {/* <About />
      <Services />
    
      <Testimonials /> */}

      <Footer />
    </div>
  );
};

export default Home;
