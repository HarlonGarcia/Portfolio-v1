import valorant from "../assets/valorant.png";
import empire from "../assets/empire.png";
import marvel from "../assets/marvel.png";
import calculator from "../assets/calculator.png";

const projects = [
  {
    title: "Valorant",
    image: valorant,
    techs: ["ReactJS", "TailwindCSS", "Axios", "HeroIcons"],
    links: {
      repository: "https://github.com/HarlonGarcia/Valorant",
      deploy: "https://vavazinho.netlify.app/",
    },
  },
  {
    title: "Empire Burger",
    image: empire,
    techs: ["ReactJS", "Styled Components", "Axios", "React Icons"],
    links: {
      repository: "https://github.com/HarlonGarcia/EmpireBurger",
      deploy: "https://empire-burger-harlon.netlify.app/",
    },
  },
  {
    title: "Marvel",
    image: marvel,
    techs: ["AngularJS", "Bootstrap", "Gulp"],
    links: {
      repository: "https://github.com/HarlonGarcia/API-Marvel-AngularJS",
      deploy: "https://marvelapi-angularjs.netlify.app/",
    },
  },
  {
    title: "Calculator",
    image: calculator,
    techs: ["ReactJS", "CSS3"],
    links: {
      repository: "https://github.com/HarlonGarcia/Calculadora-ReactJS",
      deploy: "https://calculadora-react-harlon.netlify.app/",
    },
  },
];

export default projects;
