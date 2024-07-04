import React from "react";
import { FaBriefcase, FaLaptopCode, FaUserCheck } from "react-icons/fa";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosPaperPlane } from "react-icons/io";
import { useAll } from "../../context/AllContext";
import { HeaderNav } from "./HeaderNav";
import { useSpring, animated } from "react-spring";

export const NavBar = () => {
  const { isOpen, isMode } = useAll();

  const menuSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      style={menuSpring}
      className={`${isOpen ? "w-52" : "w-16 hidden md:inline-block "} h-screen ${
        isMode ? "bg-blue-100 text-blue-500" : "bg-gray-800 text-white"
      } fixed z-20 transition-all duration-300 ease-in-out`}
    >
      <HeaderNav />
      
      <nav className={`grid mt-20 gap-8 ${isOpen ? "pl-4" : "pl-2"}`}>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? "bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white"
                  : "bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white"
                : ""
            } flex gap-2 py-2 pl-2 transition-colors duration-300`
          }
          to="/"
        >
          <IoHomeSharp className="text-3xl" />
          {isOpen && <span className="my-auto text-xl">Inicio</span>}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? "bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white"
                  : "bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white"
                : ""
            } flex gap-2 py-2 pl-2 transition-colors duration-300`
          }
          to="/about"
        >
          <FaUserCheck className="text-3xl" />
          {isOpen && <span className="my-auto text-xl">Acerca de</span>}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? "bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white"
                  : "bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white"
                : ""
            } flex gap-2 py-2 pl-2 transition-colors duration-300`
          }
          to="/project"
        >
          <FaLaptopCode className="text-3xl" />
          {isOpen && <span className="my-auto text-xl">Proyectos</span>}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? "bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white"
                  : "bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white"
                : ""
            } flex gap-2 py-2 pl-2 transition-colors duration-300`
          }
          to="/skills"
        >
          <FaGear className="text-3xl" />
          {isOpen && <span className="my-auto text-xl">Habilidades</span>}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? "bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white"
                  : "bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white"
                : ""
            } flex gap-2 py-2 pl-2 transition-colors duration-300`
          }
          to="/contact"
        >
          <IoIosPaperPlane className="text-3xl" />
          {isOpen && <span className="my-auto text-xl">Contacto</span>}
        </NavLink>
      </nav>
    </animated.div>
  );
};
