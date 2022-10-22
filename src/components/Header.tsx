import React from "react";
import { useTheme } from "../hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between font-raleway w-4/5 py-2 pt-4 h-16 mx-auto border-b-2 border-black dark:border-black-100 dark:text-white">
      <h1 className="font-semibold text-lg tracking-[.175em]">harlon_</h1>
      <div className="flex">
        <h2 className="mx-2 duration-500 cursor-pointer hover:text-red">
          About
        </h2>
        <h2 className="mx-2 duration-500 cursor-pointer hover:text-yellow">
          Projects
        </h2>
        <h2 className="mx-2 duration-500 cursor-pointer hover:text-green">
          Contact
        </h2>
      </div>
      {theme === "light" ? (
        <MdDarkMode
          className="w-7 h-7 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <MdLightMode
          className="w-7 h-7 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      )}
    </header>
  );
};

export default Header;
