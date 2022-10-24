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
      data-aos-duration="700"
      className="text-black font-raleway dark:text-white"
    >
      <h2 className="font-roboto text-xl mb-4 lg:text-2xl">
        My favorite <span className="border-b-2 border-red">technologies</span>
      </h2>
      <div className="flex flex-wrap gap-3">
        {techIcons.map(({ icon, title }, index) => (
          <Technology
            icon={icon}
            title={title}
            delay={200 * index}
            key={title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
