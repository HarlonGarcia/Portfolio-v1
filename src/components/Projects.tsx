import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../utils/projects";
import Project from "./Project";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="mb-14 text-black font-raleway dark:text-white"
    >
      <h2 className="font-roboto text-xl mb-4 lg:text-2xl 2xl:mb-6 2xl:text-4xl">
        {t("projectsTitlePart1")}
        <span className="border-b-2 border-yellow">
          {t("projectsTitlePart2")}
        </span>
      </h2>
      <div className="flex flex-col gap-5 mb-4 sm:mb-6 sm:flex-row sm:flex-wrap">
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
      <button>
        <a
          href="https://github.com/HarlonGarcia?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="flex items-center w-fit sm:text-md group"
        >
          <span className="mr-2 lg:text-xl 2xl:text-2xl">{t("seeMore")}</span>
          <BsArrowRight className="w-4 h-4 transition-all group-hover:translate-x-[3px] sm:w-5 sm:h-5" />
        </a>
      </button>
    </div>
  );
};

export default Projects;
