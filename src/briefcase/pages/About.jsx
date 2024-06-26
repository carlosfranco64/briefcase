import React from "react";
import { Header } from "../../ui/components/Header";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useAll } from "../../context/AllContext";

export const About = () => {
  const { isOpen, isMode } = useAll();

  return (
    <div
    className={`w-full min-h-screen bg-gradient-to-r ${
      isMode ? "from-blue-200 via-indigo-200 to-purple-200" : "bg-gray-600"
    } ${isOpen ? "ml-0 sm:ml-52" : "ml-0 sm:ml-16"} `}

    

  >
    <Header />
  
    <div className="py-10 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <h2
        className={`text-2xl sm:text-3xl text-center ${
          isMode ? "text-gray-700" : "text-white"
        } font-bold mb-6 sm:mb-10`}
      >
        Acerca de mí
      </h2>
  
      <div
        className={`max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto ${
          isMode ? "bg-white" : "bg-gray-800"
        } p-4 sm:p-6 md:p-8 rounded-lg shadow-lg`}
      >
        <p
          className={`text-sm sm:text-base md:text-lg ${
            isMode ? "text-gray-700" : "text-white"
          } mb-4 sm:mb-6 text-justify`}
        >
          Hola, soy Carlos Antonio Franco Castaño, un desarrollador apasionado por
          la creación de aplicaciones web innovadoras y eficientes. Con una sólida
          formación en Desarrollo Web Full-Stack, me especializo en el uso de
          tecnologías modernas como React, Node.js y más. Me encanta resolver
          problemas complejos y mejorar continuamente mis habilidades.
        </p>
  
        <div className="flex justify-center space-x-4 sm:space-x-6 text-2xl sm:text-3xl text-gray-600">
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              className={`${
                isMode
                  ? "text-gray-700"
                  : "text-white bg-gray-700 hover:text-gray-900"
              } transition duration-300 rounded-full`}
              size={30}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  
  );
};
