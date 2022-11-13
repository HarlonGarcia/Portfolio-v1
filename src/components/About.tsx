import { VscGithub } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="text-black mb-14 font-raleway dark:text-white"
    >
      <h2 className="font-semibold sm:mb-2 md:text-lg lg:text-xl 2xl:text-3xl">
        {t("presentation")}
      </h2>
      <h1
        className="text-blue text-4xl font-roboto font-black mb-2 sm:text-5xl sm:mb-6 md:text-6xl md:text-8xl 2xl:text-9xl"
        translate="no"
      >
        Harlon Garcia
      </h1>
      <p className="mb-6 sm:text-md sm:mb-8 md:text-lg lg:mb-10 lg:text-lg xl:text-xl 2xl:text-2xl">
        {t("about")}
      </p>
      <button className="bg-blue p-2 px-4 animate-bounce hover:shadow-lg hover:shadow-blue/10 text-white 2xl:text-2xl">
        <a
          href="https://github.com/HarlonGarcia"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <span className="mr-2 md:text-lg">{t("githubButton")}</span>
          <VscGithub className="w-5 h-5" />
        </a>
      </button>
    </div>
  );
};

export default About;
