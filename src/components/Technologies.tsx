import React, { useEffect, useRef } from "react";
import { techIcons } from "../utils/techs";
import Technology from "./Technology";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Technologies = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    AOS.init();

    const typed = new Typed(el.current || "", {
      strings: [
        "Spring",
        "PostgreeSQL",
        "MySQL",
        "Angular",
        "AngularJS",
        "HTML5",
        "CSS3",
        "Styled Components",
        "Bootstrap",
        "Figma",
        "Photoshop",
        "Netlify",
        "Git",
        "Linux",
      ],
      typeSpeed: 140,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="text-black font-raleway mb-14 dark:text-white"
    >
      <h2 className="font-roboto text-xl mb-4 lg:text-2xl">
        My favorite <span className="border-b-2 border-red">technologies</span>
      </h2>
      <div className="flex flex-wrap gap-3 mb-4">
        {techIcons.map(({ icon, title }, index) => (
          <Technology
            icon={icon}
            title={title}
            delay={200 * index}
            key={title + index}
          />
        ))}
      </div>
      <p data-aos="fade-up" className="sm:text-md lg:text-lg" id="projects">
        Others frameworks, libraries and tools that I use in my personal
        projects:{" "}
        <span
          ref={el}
          className="font-bold hover:text-red"
          translate="no"
        ></span>
      </p>
    </div>
  );
};

export default Technologies;
