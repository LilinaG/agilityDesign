import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

const refForm= useRef();
const handleSubmit = (event) => {
  event.preventDefault();
  
  const serviceId = "service_na1unvi";
  const templateId = "template_iojt59p";
  const apikey = "v6Fw9GYRbaR7cGiZ3";

  emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result.text);
        refForm.current.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-mona-sans text-gray-800 mb-4 mt-20">¡Cuéntanos tu proyecto!</h2>
      <form 
        ref={refForm}
        onSubmit={handleSubmit}>
        <div className="mb-4">
          <fieldset className="fiel-name">
          <label htmlFor="" className="block text-yellow-400 font-mona-sans mb-2 h-10">
            Nombre
          </label>
          
          <input
            type="text"
            id="name"
            name="from_name"
            className="w-full border-b-4 border-yellow-300 focus:outline-none focus:border-gray-700 h-10"
            placeholder="Tu Nombre"
            required
          />
          </fieldset>
        </div>
        <div className="mb-4">
        <fieldset className="fiel-email">
          <label htmlFor="email" className="block text-yellow-400 font-semibold mb-2 font-mona-sans h-10">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-b-4 border-yellow-300 focus:outline-none focus:border-gray-700 h-10"
            placeholder="Tu Email"
            required
          />
          </fieldset>
        </div>
        <div className="mb-4">
        <fieldset className="fiel-message">
          <label htmlFor="message" className="block text-yellow-400 font-semibold mb-2 font-mona-sans">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full h-24 border-2 border-yellow-300 focus:outline-none focus:border-gray-700 rounded-lg p-2"
            placeholder="Escribe tu mensaje aquí"
            required
          ></textarea>
          </fieldset>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
