import React from "react";
import About from "../components/About";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects";
import Social from "../components/Social";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <div>
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Social />
    </div>
  );
};

export default Home;
