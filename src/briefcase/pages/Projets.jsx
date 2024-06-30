import { useAll } from "../../context/AllContext";
import { Header } from "../../ui/components/Header";
import { ProjectCard } from "../components/ProjectCard";


const projects = [
  {
    title: "Task App",
    link:"",
    description: "Task App es una aplicación diseñada para ayudarte a gestionar tus tareas diarias y mejorar tu productividad. Con una interfaz intuitiva y funciones clave, Task App te mantiene organizado y enfocado en tus objetivos personales y profesionales. user:",
    img: "/proyecto_3.jpg"
  },
  {
    title: "Portafolio",
    link:"",
    description: "Mi portafolio como desarrollador fullstack es una colección de proyectos que destacan mi pasión por crear soluciones innovadoras y efectivas tanto en el frontend como en el backend. Cada informacion muestra mi habilidad técnica, capacidad para enfrentar desafíos complejos, trabajar en equipo y entregar productos de alta calidad.",
    img: "/proyecto_1.jpg"
  },
  {
    title: "Administrador de ingresos y egresos",
    link:"",
    description: "Esta aplicacion web facilita la gestión de ingresos y egresos mediante categorización detallada. Permite, establecer ganancias descripcion los montos. ofrece una vista clara del flujo financiero. Optimizada para dispositivos móviles y escritorio, ademas proporciona acceso fácil desde cualquier lugar",
    img: "/proyecto_2.jpg"
  },
  {
    title: "Project 4",
    link:"",
    description: "Vestibulum sodales justo ut ante consectetur, eget hendrerit augue pharetra. Nullam id urna sed lacus.",
    img: "img/project4.jpg"
  },
  {
    title: "Project 5",
    link:"",
    description: "Fusce nec nisi ac est auctor placerat. Ut scelerisque diam vel risus mattis, nec ultricies nisi aliquet.",
    img: "img/project5.jpg"
  },
  {
    title: "Project 6",
    link:"",
    description: "Suspendisse ut sapien at purus vehicula pellentesque non eget sem. Cras a leo ut elit malesuada blandit.",
    img: "img/project6.jpg"
  }
];

export default projects;


export const Projets = () => {
  const { isOpen,isMode } = useAll();
  
  return (
    <section className={`w-full min-h-screen bg-gradient-to-r ${isMode ?" from-blue-200 via-indigo-200 to-purple-200": "bg-gray-600"} ${isOpen ? "ml-0 sm:ml-52" : "ml-0 sm:ml-16 "} `}>
      <Header />
      <div className={`container px-4 md:px-6 py-12 grid ${isOpen ? "ml-0" : "ml-0 md:ml-0 "}  `}> {/* scroll horizoltal */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-gray-800">Mis Proyectos</h2>
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
