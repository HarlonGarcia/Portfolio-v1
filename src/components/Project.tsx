import { AiOutlineDeploymentUnit, AiFillCode } from "react-icons/ai";

interface Links {
  repository: string;
  deploy: string;
}

interface ProjectProps {
  title: string;
  image: string;
  techs: string[];
  links?: Links;
}

const Project = ({ title, image, techs, links }: ProjectProps) => {
  return (
    <div className="group bg-black text-white flex flex-col items-center justify-between max-w-[20rem] text-center p-4 dark:bg-black-100 sm:max-w-none sm:w-[48%] sm:min-w-[15rem] lg:w-[31%] xl:min-w-min xl:w-[23%]">
      <div>
        <div className="w-full mb-4 overflow-hidden 2xl:mb-6">
          <a href={links?.deploy} target="_blank" rel="noreferrer">
            <img
              src={image}
              alt={title}
              className="transition-transform duration-500 group-hover:grayscale group-hover:scale-125"
            />
          </a>
        </div>
        <h2
          className="text-lg font-semibold mb-4 lg:text-xl 2xl:text-2xl 2xl:mb-6"
          translate="no"
        >
          {title}
        </h2>
        <p className="px-2 mb-6 lg:text-lg 2xl:text-xl" translate="no">
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
          <button>
            <a href={links.repository} target="_blank" rel="noreferrer">
              <AiFillCode className="w-7 h-7 m-2 cursor-pointer 2xl:w-10 2xl:h-10 hover:text-yellow" />
            </a>
          </button>
        )}
        {links?.deploy && (
          <button>
            <a href={links.deploy} target="_blank" rel="noreferrer">
              <AiOutlineDeploymentUnit className="w-7 h-7 m-2 cursor-pointer 2xl:w-10 2xl:h-10 hover:text-yellow" />
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Project;
