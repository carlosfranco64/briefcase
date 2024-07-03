import React from "react";
import { Header } from "../../ui/components/Header";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useAll } from "../../context/AllContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { isOpen, isMode } = useAll();

  const navigate = useNavigate();

  const route = () => {
    navigate("/contact");
  };

  return (
    <div className={`w-full min-h-screen bg-gradient-to-r ${
      isMode ? "from-blue-200 via-indigo-200 to-purple-200" : "bg-gray-600"
    } ${isOpen ? "ml-0 sm:ml-52" : "ml-0 sm:ml-16"} `}>

    <Header />
  
    <div className="flex flex-col lg:flex-row justify-between pt-10 px-4 sm:px-8 md:px-10 lg:px-20">
      <div
        className={`flex flex-col w-full lg:w-1/2 justify-center py-10 sm:py-16 md:py-20 h-full ${
          isMode ? "bg-white" : "bg-gray-800"
        } shadow-lg rounded-lg`}
      >
        <h1
          className={`pl-4 sm:pl-6 md:pl-8 lg:pl-10 text-3xl sm:text-4xl md:text-5xl ${
            isMode ? "text-blue-500" : "text-white"
          } font-bold mb-4`}
        >
          Hola, soy Carlos Franco Castaño
        </h1>
        <h2
          className={`pl-4 sm:pl-6 md:pl-8 lg:pl-10 font-bold text-xl sm:text-2xl md:text-3xl ${
            isMode ? "text-gray-700" : "text-white"
          } mb-2`}
        >
          Junior Full Stack Developer
        </h2>
        <p
          className={`pl-4 sm:pl-6 md:pl-8 lg:pl-10 mt-4 ${
            isMode ? "text-gray-700" : "text-white"
          } text-sm sm:text-lg text-justify pr-4 sm:pr-6 md:pr-8 lg:pr-10`}
        >
          Con 1 año de experiencia en desarrollo web, especializado en tecnologías
          front-end y back-end. Apasionado por crear soluciones innovadoras y
          eficientes.
        </p>
        <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-10 mt-6 flex gap-4 ">
          <button
            className="px-4 sm:px-6 py-2 bg-blue-500 text-white font-bold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            onClick={route}
          >
            Contactar
          </button>
          <a
            href="https://www.linkedin.com/in/carlos-franco-casta%C3%B1o-47456a264/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto"
          >
            <FaLinkedin
              className="text-blue-500 hover:text-blue-800 transition duration-300"
              size={30}
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto"
          >
            <FaGithub
              className={` ${
                isMode
                  ? "text-gray-700"
                  : "text-white bg-gray-700 hover:text-gray-900"
              } transition duration-300 rounded-full`}
              size={30}
            />
          </a>

            {/* <Button label="Check" icon="pi pi-check" /> */}


        </div>
      </div>
  
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
        <img
          src="/DSC_0758 copia.jpg"
          alt="Carlos Franco Castaño"
          className="w-40 sm:w-60 md:w-80 lg:w-96 h-40 sm:h-60 md:h-80 lg:h-96 rounded-full bg-red-500 shadow-lg transform hover:scale-105 transition duration-300 object-cover"
        />
      </div>
    </div>
  </div>
  
  );
};
