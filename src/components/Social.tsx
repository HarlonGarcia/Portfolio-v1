import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Social = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mx-auto text-black border-t-2 border-black-100 mb-10 py-4 dark:text-beige dark:border-black-100 ">
      <div className="w-fit flex mx-auto">
        <a
          href="https://www.linkedin.com/in/harlongarcia/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="w-7 h-7 m-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue hover:translate-y-[-3px] focus:translate-y-[-3px]" />
        </a>
        <a
          href="https://github.com/HarlonGarcia"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="w-7 h-7 m-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue hover:translate-y-[-3px] focus:translate-y-[-3px]" />
        </a>
      </div>
      <h4 className="w-fit text-black/20 font-semibold mx-auto dark:text-black-200">
        &copy; 2022 Harlon
      </h4>
    </div>
  );
};

export default Social;
