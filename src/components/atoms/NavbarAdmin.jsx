import React, { useState } from 'react';    
import logoTransparent from '../../assets/images/logoTransparent.png'

const NavbarAdmin = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className={`fixed z-20 top-0 left-0 right-0 bg-white text-black text-bold font-mona-sans ${open ? 'bg-white' : 'bg-transparent'}`}>
  
  
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between font-sans">
          <div className="flex items-center">
            <img className="w-72 h-20" src={logoTransparent} alt="logo" />
          </div>
          <div className="hidden md:flex space-x-10 mr-20">
            <a href="#" className="hover:text-gray-400 text-base font-mona-sans">INICIO</a>
            <a href="#" className="hover:text-gray-400 text-base font-mona-sans">PROYECTOS</a>
            <a href="#" className="hover:text-gray-400 text-base font-mona-sans">CATEGORÍAS</a>
            <a href="#" className="hover:text-gray-400 text-base font-mona-sans">CONTACTO</a>
            <a href="#" className="hover:text-gray-400 text-yellow-400 text-base font-mona-sans font-bold">NUEVO PROYECTO</a>
            <a href="#" className="hover:text-gray-400 text-white bg-black p-2 text-base rounded">Cerrar</a>
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
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">INICIO</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">PROYECTOS</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">CATEGORÍAS</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">NUEVO PROYECTO</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">CERRAR</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarAdmin;