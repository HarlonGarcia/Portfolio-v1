import React from "react";
import About from "../components/About";
import Contact from "../components/Contact/Contact";
import Social from "../components/Social";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <div>
      <About />
      <Technologies />
      <Contact />
      <Social />
    </div>
  );
};

export default Home;
