import { useEffect } from "react";
import { useAll } from "../../context/AllContext";
import { Header } from "../../ui/components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { useSpring, animated } from "react-spring";



const projects = [
  {
    title: "Task App - (En desarrollo)",
    linkEyes:"ggg",
    linkGithub:"https://github.com/carlosfranco64/",
    description: "Task App es una aplicación diseñada para ayudarte a gestionar tus tareas diarias y mejorar tu productividad. Con una interfaz intuitiva y funciones clave, Task App te mantiene organizado y enfocado en tus objetivos personales y profesionales. user:",
    img: "/proyecto_3.jpg"
  },
  {
    title: "Portafolio",
    linkEyes:"https://devcarlosfranco.netlify.app/",
    linkGithub:"https://github.com/carlosfranco64/briefcase.git",
    description: "Mi portafolio como desarrollador fullstack es una colección de proyectos que destacan mi pasión por crear soluciones innovadoras y efectivas tanto en el frontend como en el backend. Cada informacion muestra mi habilidad técnica, capacidad para enfrentar desafíos complejos, trabajar en equipo y entregar productos de alta calidad.",
    img: "/proyecto_1.jpg"
  },
  {
    title: "Administrador de ingresos y egresos",
    linkEyes:"https://fluffy-pastelito-7c85ce.netlify.app",
    linkGithub:"https://github.com/carlosfranco64/admin-money.git",
    description: "Esta aplicacion web facilita la gestión de ingresos y egresos mediante categorización detallada. Permite, establecer ganancias descripcion los montos. ofrece una vista clara del flujo financiero. Optimizada para dispositivos móviles y escritorio, ademas proporciona acceso fácil desde cualquier lugar",
    img: "/proyecto_2.jpg"
  },
  {
    title: "Rick and Morty",
    linkEyes:"https://sensational-treacle-3c13b3.netlify.app/",
    linkGithub:"https://github.com/Carlosfranco17/entregable3.git",
    description: "Vestibulum sodales justo ut ante consectetur, eget hendrerit augue pharetra. Nullam id urna sed lacus.",
    img: "/proyecto_4.jpg"
  },
  // {
  //   title: "Project 5",
  //   link:"",
  //   description: "Fusce nec nisi ac est auctor placerat. Ut scelerisque diam vel risus mattis, nec ultricies nisi aliquet.",
  //   img: "img/project5.jpg"
  // },
  // {
  //   title: "Project 6",
  //   link:"",
  //   description: "Suspendisse ut sapien at purus vehicula pellentesque non eget sem. Cras a leo ut elit malesuada blandit.",
  //   img: "img/project6.jpg"
  // }
];

export default projects;


export const Projets = () => {
  const { isOpen,isMode } = useAll();

  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(-20px)",
    config: { tension: 200, friction: 10 },
  }));

  useEffect(() => {
    set({ opacity: 1, transform: "translateY(0)" });
  }, [set]);
  
  return (
    <section className={`w-full min-h-screen bg-gradient-to-r ${isMode ?" from-blue-200 via-indigo-200 to-purple-200": "bg-gray-600"} ${isOpen ? "ml-0 sm:ml-52" : "ml-0 sm:ml-16 "} `}>
      <Header />
      <div className={`container px-4 md:px-6 py-12 grid ${isOpen ? "ml-0" : "ml-0 md:ml-0 "}  `}> {/* scroll horizoltal */}
      <div className="mb-8 md:mb-12">
      <animated.h2
        style={props}
        className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center transition-transform duration-300 ease-in-out ${
          isMode ? "text-gray-700 hover:text-gray-500" : "text-white hover:text-gray-300"
        }`}
      >
        Mis Proyectos
      </animated.h2>
    </div>
        <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3  ">
{
  projects.map((project,i)=>(

    <ProjectCard key={i} project={project} /> 

  ))
}
          
        </div>
      </div>
    </section>
  );
};
