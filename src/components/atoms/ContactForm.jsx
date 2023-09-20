import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario o realizar otras acciones
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-mona-sans text-gray-800 mb-4 mt-20">¡Cuéntanos tu proyecto!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-yellow-400 font-mona-sans mb-2 h-10">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-b-4 border-yellow-300 focus:outline-none focus:border-gray-700 h-10"
            placeholder="Tu Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-yellow-400 font-semibold mb-2 font-mona-sans h-10">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-b-4 border-yellow-300 focus:outline-none focus:border-gray-700 h-10"
            placeholder="Tu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-yellow-400 font-semibold mb-2 font-mona-sans">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full h-24 border-2 border-yellow-300 focus:outline-none focus:border-gray-700 rounded-lg p-2"
            placeholder="Escribe tu mensaje aquí"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
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
