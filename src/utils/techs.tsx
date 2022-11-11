import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiJava,
  SiTypescript,
} from "react-icons/si";
import { IoLogoSass } from "react-icons/io";

export const techIcons: { icon: JSX.Element; title: string }[] = [
  {
    icon: <SiReact className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "ReactJS",
  },
  {
    icon: <SiJavascript className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "Javascript",
  },
  {
    icon: <SiTypescript className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "Typescript",
  },
  {
    icon: <SiTailwindcss className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "TailwindCSS",
  },
  {
    icon: <IoLogoSass className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "Sass",
  },
  {
    icon: <SiJava className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "Java",
  },
];
