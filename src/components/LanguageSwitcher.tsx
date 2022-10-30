import React, { useRef, useState } from "react";
import pt_br from "../assets/flags/brazil.png";
import en_us from "../assets/flags/united-states.png";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState(en_us);
  const el = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  const handleClick = () => {
    if (el.current?.classList.contains("hidden")) {
      el.current.classList.remove("hidden");
      el.current.classList.add("block");
    } else if (el.current) {
      el.current.classList.remove("block");
      el.current.classList.add("hidden");
    }
  };

  const setLanguage = () => {
    el?.current?.classList.remove("block");
    el?.current?.classList.add("hidden");

    i18n.changeLanguage(currentLang === pt_br ? "en" : "ptBR");
  };

  return (
    <div className="flex flex-col items-center relative mx-4">
      <button
        className="bg-blue rounded-full overflow-hidden sm:block"
        onClick={handleClick}
      >
        <img className="w-6 h-6" src={currentLang} alt="Current language" />
      </button>
      <div
        ref={el}
        className="hidden flex flex-col items-center -top-24 overflow-hidden absolute rounded-full w-9 z-10 bg-black-200 sm:bg-black-100 sm:top-9"
      >
        <img
          className="w-6 h-6 my-2 cursor-pointer"
          src={pt_br}
          alt="Portugûes"
          onClick={() => {
            setCurrentLang(pt_br);
            setLanguage();
          }}
        />
        <img
          className="w-6 h-6 my-2 cursor-pointer"
          src={en_us}
          alt="English"
          onClick={() => {
            setCurrentLang(en_us);
            setLanguage();
          }}
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
