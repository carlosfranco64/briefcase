import React from "react";
import { Header } from "../../ui/components/Header";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useAll } from "../../context/AllContext";
import { useSpring, animated } from "react-spring";

export const About = () => {
  const { isOpen, isMode } = useAll();

  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
  });

  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: { tension: 200, friction: 20 },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: 400,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div
      className={`w-full min-h-screen bg-gradient-to-r ${
        isMode ? "from-blue-200 via-indigo-200 to-purple-200" : "bg-gray-600"
      } ${isOpen ? "ml-0 sm:ml-52" : "ml-0 sm:ml-16"} `}
    >
      <Header />
  
      <div className="py-10 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <animated.h2
          style={titleSpring}
          className={`text-2xl sm:text-3xl text-center ${
            isMode ? "text-gray-700" : "text-white"
          } font-bold mb-6 sm:mb-10`}
        >
          Acerca de mí
        </animated.h2>
  
        <animated.div
          style={textSpring}
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
  
          <animated.div
            style={iconSpring}
            className="flex justify-center space-x-4 sm:space-x-6 text-2xl sm:text-3xl text-gray-600"
          >
            <a
              href="https://www.linkedin.com/in/carlos-franco-casta%C3%B1o-47456a264/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/carlosfranco64"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub
                className={`${
                  isMode
                    ? "text-gray-700"
                    : "text-white bg-gray-700 hover:text-gray-900"
                } transition duration-300 rounded-full transform hover:scale-110`}
                size={30}
              />
            </a>
            <a
              href="https://twitter.com/carlosfranco64"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
};
