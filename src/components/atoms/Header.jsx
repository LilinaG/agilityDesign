import React, { useState } from 'react';    
import logoTransparent from '../../assets/images/logoTransparent.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-opacity-0 text-black text-bold">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-around font-sans ">
          <div className="flex items-center">
            <img className="w-72 h-20 ml-[-2rem]" src={logoTransparent} alt="logo" />
          </div>
          <div className="hidden md:flex space-x-10 ">
            <a href="#" className="hover:text-gray-400 uppercase text-base font-bold">Inicio</a>
            <a href="#" className="hover:text-gray-400 uppercase text-base font-bold">Servicios</a>
            <a href="#" className="hover:text-gray-400 uppercase text-base font-bold">Galería</a>
            <a href="#" className="hover:text-gray-400 uppercase text-base font-bold">Metodología</a>
            <a href="#" className="hover:text-gray-400 uppercase text-base font-bold mr-[-2rem]">Conócenos</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-2xl text-black focus:outline-none"
              onClick={toggleNavbar}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-800 text-white">
          <div className="container mx-auto py-2">
            <ul className="space-y-2">
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">Inicio</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">Servicios</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">Galería</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">Metodología</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">Conócenos</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
