import React, { useRef } from "react";
import { useAll } from "../../context/AllContext";
import * as emailjs from "@emailjs/browser";

export const FormContact = () => {
  const { isMode } = useAll();

  const refForm = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(refForm.current);
    const serviceId = "service_vy0pxms";
    const templateId = "template_ruz52eh";
    const apiKey = "S2QdOrVUlczi8iL8v";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <form ref={refForm} onSubmit={onSubmit} className="mt-6 space-y-6 sm:mx-2">
      <div className="mb-4">
        <label
          htmlFor="name"
          className={`block text-sm sm:text-base md:text-lg font-medium ${
            isMode ? "text-gray-900" : "text-white"
          }`}
        >
          Nombre
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Tu nombre"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className={`block text-sm sm:text-base md:text-lg font-medium ${
            isMode ? "text-gray-900" : "text-white"
          }`}
        >
          Correo
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="tu@correo.com"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className={`block text-sm sm:text-base md:text-lg font-medium ${
            isMode ? "text-gray-900" : "text-white"
          }`}
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Tu mensaje"
          required
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mx-auto w-full sm:w-auto"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
