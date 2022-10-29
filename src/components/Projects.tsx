import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../utils/projects";
import Project from "./Project";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="mb-14 text-black font-raleway dark:text-white"
    >
      <h2 className="font-roboto text-xl mb-4 lg:text-2xl">
        Some things <span className="border-b-2 border-yellow">I've built</span>
      </h2>
      <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap">
        {projects.map(({ title, image, techs, links }, index) => {
          return (
            <Project
              key={index + title}
              title={title}
              image={image}
              techs={techs}
              links={links}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
