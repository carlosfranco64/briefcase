import React, { useState } from 'react';
import { useAll } from '../../context/AllContext';

export const FormContact = () => {
  const { isMode } = useAll();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsAppMessage(name, email, message);
  };

  const sendWhatsAppMessage = (name, email, message) => {
    const phoneNumber = '573117662833'; // Tu número de teléfono en formato internacional sin el signo +
    const baseMessage = `Tienes una nueva oferta de ${name} (${email}): `;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(baseMessage + message)}`;
    window.open(url, '_blank');
  };

  return (
    <form className="mt-6 space-y-6 sm:mx-2" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className={`block text-sm sm:text-base md:text-lg font-medium ${isMode ? "text-gray-900" : "text-white"}`}
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Tu nombre"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className={`block text-sm sm:text-base md:text-lg font-medium ${isMode ? "text-gray-900" : "text-white"}`}
        >
          Correo
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="tu@correo.com"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className={`block text-sm sm:text-base md:text-lg font-medium ${isMode ? "text-gray-900" : "text-white"}`}
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
