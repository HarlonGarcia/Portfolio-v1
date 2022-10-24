import React from "react";
import ScrollReveal from "./ScrollReveal";
import { VscGithub } from "react-icons/vsc";

const About = () => {
  return (
    <ScrollReveal classes="text-black font-raleway dark:text-white">
      <>
        <h2>Hey, my name is</h2>
        <h1 className="text-blue text-4xl font-roboto font-black mb-2">
          Harlon Garcia
        </h1>
        <p className="mb-6">
          I'm a design-minded software developer focused in increase the
          percentage of dark and accessible websites.
        </p>
        <button className="bg-blue p-2 px-4 animate-bounce hover:shadow-lg hover:shadow-blue/10 text-beige">
          <a
            href="https://github.com/HarlonGarcia"
            target="_blank"
            rel="noopener"
            className="flex items-center"
          >
            <span className="mr-2">See my github!</span>
            <VscGithub className="w-5 h-5" />
          </a>
        </button>
      </>
    </ScrollReveal>
  );
};

export default About;
