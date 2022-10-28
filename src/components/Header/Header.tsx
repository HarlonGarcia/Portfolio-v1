import React, { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const el = document.getElementById("menu-items");

    if (!el) return;
    if (el.classList.contains("active")) {
      setIsActive(false);
      el.classList.remove("active");
    } else {
      setIsActive(true);
      el.classList.add("active");
    }
  };

  return (
    <header className="font-raleway w-full mb-14 mx-auto h-16 dark:text-white flex justify-center">
      <nav className="fixed w-full top-0 z-40 flex h-16 px-4 pt-2 items-center justify-between bg-beige border-b-2 border-black dark:bg-black dark:border-black-100 sm:w-4/5 ">
        <h1
          className="text-lg font-semibold font-roboto tracking-widest"
          translate="no"
        >
          Harlon<span className="animate-oscillator">_</span>
        </h1>
        <div
          id="menu-items"
          className="fixed z-40 flex flex-col justify-between items-center p-4 text-white bg-black-100 h-[calc(100%_-_4rem)] top-16 right-0 transition-all duration-300 translate-x-[calc(100%_+_1rem)] min-w-[33%] sm:dark:text-white sm:text-black sm:bg-[transparent] sm:flex-row sm:relative sm:top-0 sm:translate-x-0"
        >
          <div className="flex flex-col items-center sm:flex-row sm:mr-8">
            <a
              href="#about"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="m-2 duration-500 cursor-pointer pt-0.5 after:transition-transform after:duration-300 after:border-b-2 after:block after:border-red after:scale-x-0 after:content-[''] hover:after:scale-x-110 sm:m-0 sm:mx-4"
            >
              About
            </a>
            <a
              href="#projects"
              className="m-2 duration-500 cursor-pointer pt-0.5 after:transition-transform after:duration-300 after:border-b-2 after:block after:border-yellow after:scale-x-0 after:content-[''] hover:after:scale-x-110 sm:m-0 sm:mx-4"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="m-2 duration-500 cursor-pointer pt-0.5 after:transition-transform after:duration-300 after:border-b-2 after:block after:border-green after:scale-x-0 after:content-[''] hover:after:scale-x-110 sm:m-0 sm:mx-4"
            >
              Contact
            </a>
          </div>
          {theme === "light" ? (
            <MdDarkMode
              className="w-6 h-6 cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <MdLightMode
              className="w-6 h-6 cursor-pointer"
              onClick={() => setTheme("light")}
            />
          )}
        </div>

        <div
          id="abc"
          className="cursor-pointer sm:hidden"
          onClick={handleClick}
        >
          <div
            className={`transition-all duration-300 w-8 h-0.5 bg-black my-2 dark:bg-white ${
              isActive ? "line1" : ""
            }`}
          ></div>
          <div
            className={`transition-all duration-300 w-8 h-0.5 bg-black my-2 dark:bg-white ${
              isActive ? "line2" : ""
            }`}
          ></div>
          <div
            className={`transition-all duration-300 w-8 h-0.5 bg-black my-2 dark:bg-white ${
              isActive ? "line3" : ""
            }`}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
