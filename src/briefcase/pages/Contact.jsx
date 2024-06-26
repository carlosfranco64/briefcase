import { useAll } from "../../context/AllContext";
import { Header } from "../../ui/components/Header";
import { FormContact } from "../components/FormContact";

export const Contact = () => {
  const { isOpen, isMode } = useAll();

  return (
    <section
    className={`w-full ${
      isMode
        ? "bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200"
        : "bg-gray-600"
    } ${isOpen ? "ml-0 sm:ml-52" : "ml-0 sm:ml-16"}`}
  >
    <Header />
  
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={`${
          isMode ? "bg-white" : "bg-gray-800"
        } p-6 md:p-8 rounded-lg shadow-lg max-w-2xl w-full`}
      >
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center ${
            isMode ? "text-blue-500" : "text-white"
          }`}
        >
          Contáctame
        </h2>
        <p
          className={`${
            isMode ? "text-gray-900" : "text-white"
          } mt-3 text-sm sm:text-base md:text-lg`}
        >
          Si tienes alguna pregunta o quieres trabajar juntos, no dudes en enviarme un mensaje.
        </p>
        <FormContact />
      </div>
    </div>
  </section>
  
  );
};
