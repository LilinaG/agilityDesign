import React, { useState } from 'react';    
import { Link } from 'react-router-dom';
import logoTransparent from '../../assets/images/logoTransparent.png'


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className={`fixed z-20 top-0 left-0 right-0 text-black text-bold font-mona-sans ${open ? 'bg-white' : 'bg-transparent'}`}>
  
  
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between font-sans">
          <div className="flex items-center">
            <img className="w-72 h-20" src={logoTransparent} alt="logo" />
          </div>
          <div className="hidden md:flex space-x-10 mr-20">
            <a href="#inicio" className="hover:text-gray-400 uppercase text-base font-mona-sans font-bold">Inicio</a>
            <a href="#servicios" className="hover:text-gray-400 uppercase text-base font-mona-sans font-bold">Servicios</a>
            <a href="#galería" className="hover:text-gray-400 uppercase text-base font-mona-sans font-bold">Galería</a>
            <a href="#metodología" className="hover:text-gray-400 uppercase text-base font-mona-sans font-bold">Metodología</a>
            <a href="#conócenos" className="hover:text-gray-400 uppercase text-base font-mona-sans font-bold">Conócenos</a>
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
                <a href="#inicio" className="block py-2 px-4 hover:bg-gray-700">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="block py-2 px-4 hover:bg-gray-700">Servicios</a>
              </li>
              <li>
                <a href="#galería" className="block py-2 px-4 hover:bg-gray-700">Galería</a>
              </li>
              <li>
                <a href="#metodología" className="block py-2 px-4 hover:bg-gray-700">Metodología</a>
              </li>
              <li>
                <a href="#conócenos" className="block py-2 px-4 hover:bg-gray-700">Conócenos</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
