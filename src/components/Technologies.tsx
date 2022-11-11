import React, { useEffect, useRef } from "react";
import { techIcons } from "../utils/techs";
import Technology from "./Technology";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Technologies = () => {
  const el = useRef<HTMLSpanElement>(null);
  const { t } = useTranslation();

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
      <h2 className="font-roboto text-xl mb-4 lg:text-2xl 2xl:mb-6 2xl:text-4xl">
        {t("techTitlePart1")}
        <span className="border-b-2 border-red">{t("techTitlePart2")}</span>
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
      <p
        data-aos="fade-up"
        className="sm:text-md lg:text-lg 2xl:text-2xl"
        id="projects"
      >
        {t("othersTechs")}
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
