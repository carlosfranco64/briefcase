// dark:bg-gray-800

import { useAll } from "../../context/AllContext";
import { Header } from "../../ui/components/Header";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa6";
import { SiExpress, SiSequelize } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Skills } from "../components/Skills";

export const Tecnology = () => {
  const { isOpen, isMode } = useAll();

  const skills = [
    {
      title: "React",
      description:
        "Experto en el uso de React para construir interfaces de usuario interactivas y escalables.",
      icon: FaReact,
      styleIcon: "text-blue-400",
    },
    {
      title: "Node.js",
      description:
        "Amplia experiencia en el desarrollo de aplicaciones backend utilizando Node.js y Express.",
      icon: FaNodeJs,
      styleIcon: "text-green-500",
    },
    // {
    //   title: "MongoDB",
    //   description:
    //     "Experto en el uso de MongoDB para el almacenamiento y gestión de datos en aplicaciones web.",
    //   icon: DiMongodb,
    //   styleIcon: "text-green-500 rounded-full bg-green-900 p-1",
    // },
    {
      title: "SQL",
      description:
        "Sólidos conocimientos en el diseño y consulta de bases de datos relacionales utilizando SQL.",
      icon: FaDatabase,
      styleIcon: "text-white",
    },
    {
      title: "Git",
      description:
        "Experto en el uso de Git para el control de versiones y la colaboración en proyectos de desarrollo.",
      icon: FaGitAlt,
      styleIcon: "text-orange-500",
    },
    {
      title: "Git",
      description:
        "Experto en el uso de Git para el control de versiones y la colaboración en proyectos de desarrollo.",
      icon: FaGithub,
      styleIcon: "bg-white text-gray-800 rounded-full",
    },
    {
      title: "Express",
      description:
        "Experto en el uso de Express.js para el desarrollo de APIs y aplicaciones backend.",
      icon: SiExpress,
      styleIcon: "text-gray-100",
    },
    {
      title: "Sequelize",
      description:
        "Experto en el uso de Sequelize para la interacción con bases de datos relacionales en aplicaciones Node.js.",
      icon: SiSequelize,
      styleIcon: "text-blue-900 ",
    },
    {
      title: "Tailwind CSS",
      description:
        "Experto en el uso de Tailwind CSS para el diseño y estilizado de interfaces de usuario.",
      icon: RiTailwindCssFill,
      styleIcon: "text-blue-600",
    },
  ];

  return (
    <section
      className={`w-full  ${
        isMode
          ? "bg-gradient-to-r p from-blue-200 via-indigo-200 to-purple-200"
          : "bg-gray-600"
      } ${isOpen ? "ml-0 sm:ml-52" : "ml-0 sm:ml-16"}`}
    >
      <Header />
      <div className={`container px-4 md:px-6 pt-8 w-full ${isOpen ? "" : "ml-0 md:m-12"} `}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center  mx-auto ">
          <div className="space-y-2 ">
            <h2
              className={`text-3xl font-bold tracking-tighter sm:text-5xl ${
                isMode ? "text-gray-800" : "text-white"
              }  font-bold mb-4`}
            >
              Mis Habilidades
            </h2>
            <p
              className={`max-w-[700px]  md:text-xl leading-relaxed lg:text-base leading-relaxed xl:text-xl leading-relaxed  ${
                isMode ? "text-gray-800" : "text-white"
              }   `}
            >
              Como desarrollador full stack, domino una amplia gama de
              tecnologías que me permiten crear aplicaciones web robustas y
              escalables.
            </p>
          </div>
        </div>
        <div className={`mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 ${isOpen ? "lg:grid-cols-4":"lg:grid-cols-4"}     lg:gap-12`}>
          {skills.map((skill, i) => (
            <Skills key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
