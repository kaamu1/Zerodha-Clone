import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Education from "./Education";
import Stats from "./Stats";
import Navbar from "../Navbar";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
