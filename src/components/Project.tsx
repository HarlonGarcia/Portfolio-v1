import React from "react";
import { AiOutlineDeploymentUnit, AiFillCode } from "react-icons/ai";

interface Links {
  repository: string;
  deploy: string;
}

interface Proj {
  title: string;
  image: string;
  techs: string[];
  links?: Links;
}

const Project = ({ title, image, techs, links }: Proj) => {
  return (
    <div className="group bg-black text-white flex flex-col items-center justify-between text-center p-4 dark:bg-black-100 sm:w-[48%] sm:min-w-[15rem] lg:w-[31%] xl:min-w-min xl:w-[23%]">
      <div>
        <div className="w-full mb-4 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="transition-transform duration-500 group-hover:grayscale group-hover:scale-125"
          />
        </div>
        <h2 className="text-lg font-semibold mb-4" translate="no">
          {title}
        </h2>
        <p className="px-2 mb-6" translate="no">
          {techs.map((tech, index) => {
            let current = tech;
            if (index !== techs.length - 1) {
              current = tech + ", ";
            }
            return current;
          })}
        </p>
      </div>
      <div className="flex">
        {links?.repository && (
          <a href={links.repository} target="_blank" rel="noreferrer">
            <AiFillCode className="w-7 h-7 m-2 cursor-pointer" />
          </a>
        )}
        {links?.deploy && (
          <a href={links.deploy} target="_blank" rel="noreferrer">
            <AiOutlineDeploymentUnit className="w-7 h-7 m-2 cursor-pointer" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
