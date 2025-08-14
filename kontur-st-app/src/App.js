import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Services";
import KazakhstanMap from "./components/KazakhstanMap"
import Partners from "./components/Partners";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <KazakhstanMap />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
