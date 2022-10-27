import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Tech {
  icon: JSX.Element;
  title: string;
  delay: number;
}

const Technology = ({ icon, title, delay }: Tech) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="flip-up"
      data-aos-delay={delay}
      className="flex flex-col items-center justify-center text-center p-4 bg-black text-white dark:text-black dark:bg-beige w-28 hover:text-beige/50 dark:hover:text-red sm:w-36 sm:p-8 md:w-40"
    >
      <span className="mb-2">{icon}</span>
      <h3 className="font-semibold" translate="no">
        {title}
      </h3>
    </div>
  );
};

export default Technology;
