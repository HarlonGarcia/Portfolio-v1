import { VscGithub } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="text-black mb-14 font-raleway dark:text-white"
    >
      <h2 className="font-semibold md:text-lg lg:text-xl lg:mb-2">
        Hey, my name is
      </h2>
      <h1
        className="text-blue text-4xl font-roboto font-black mb-2 sm:text-5xl md:text-6xl md:text-7xl"
        translate="no"
      >
        Harlon Garcia
      </h1>
      <p className="mb-6 md:text-md lg:text-lg">
        I'm a design-minded software developer based in{" "}
        <span className="hover:text-green">Brazil</span>
        💚 and my goal is to increase the percentage of dark and accessible
        websites. I worked as Graphic Designer for about 2 years, so I decided
        to enjoy my developer journey.
      </p>
      <button className="bg-blue p-2 px-4 animate-bounce hover:shadow-lg hover:shadow-blue/10 text-white">
        <a
          href="https://github.com/HarlonGarcia"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <span className="mr-2">See my github!</span>
          <VscGithub className="w-5 h-5" />
        </a>
      </button>
    </div>
  );
};

export default About;
