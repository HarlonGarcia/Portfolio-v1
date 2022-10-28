import React, { useEffect } from "react";
import { techIcons } from "../utils/techs";
import Technology from "./Technology";
import AOS from "aos";
import "aos/dist/aos.css";

const Technologies = () => {
  useEffect(() => {
    AOS.init();
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
      <p data-aos="fade-up">
        Others frameworks, libraries and tools that I use in my personal
        projects:{" "}
        <span className="hover:text-red dark:hover:text-yellow font-semibold">
          Spring
        </span>
        ,{" "}
        <span className="hover:text-red dark:hover:text-yellow font-semibold">
          Angular
        </span>
        ,{" "}
        <span className="hover:text-red dark:hover:text-yellow font-semibold">
          Styled Components
        </span>
        ,{" "}
        <span className="hover:text-red dark:hover:text-yellow font-semibold">
          Postgres
        </span>
        ,{" "}
        <span className="hover:text-red dark:hover:text-yellow font-semibold">
          Netlify
        </span>
        ,{" "}
        <span className="hover:text-red dark:hover:text-yellow font-semibold">
          Figma
        </span>
        ,{" "}
        <span className="hover:text-red dark:hover:text-yellow font-semibold">
          Photoshop
        </span>
        , etc.
      </p>
    </div>
  );
};

export default Technologies;
