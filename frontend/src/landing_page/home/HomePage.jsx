import React from "react";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <Pricing />
      <Education />
      <Awards />
    </>
  );
}

export default HomePage;
