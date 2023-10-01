import React, { useState } from 'react';    
import Logo2Transparent from '../../assets/images/Logo2Transparent.png';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className={`fixed z-20 top-0 left-0 right-0 bg-white text-black text-bold font-roboto ${open ? 'bg-white' : 'bg-transparent'}`}>
  
  
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between font-roboto">
          <div className="flex items-center">
            <img className="w-72 h-20 mx-6" src={Logo2Transparent} alt="logo" />
          </div>
          <div className="hidden md:flex space-x-10 mr-20">
          <Link to="/" className="hover:text-gray-400 text-base font-roboto">INICIO</Link>
            <Link to="/admin/projects" className="hover:text-gray-400 text-base font-roboto">PROYECTOS</Link>
            <Link to="/admin/categories" className="hover:text-gray-400 text-base font-roboto">CATEGORÍAS</Link>
            <Link to="/admin/projects/create" className="hover:text-gray-400 text-yellow-400 text-base font-roboto font-bold">NUEVO PROYECTO</Link>
            <Link to="/" className="hover:text-gray-400 text-white bg-black p-2 text-base rounded">Cerrar</Link>
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
              <Link to="/" className="block py-2 px-4 hover:bg-gray-700">INICIO</Link>
              </li>
              <li>
                <Link to="/admin/projects" className="block py-2 px-4 hover:bg-gray-700">PROYECTOS</Link>
              </li>
              <li>
                <Link to="/admin/categories" className="block py-2 px-4 hover:bg-gray-700">CATEGORÍAS</Link>
              </li>
              <li>
                <Link to="/admin/projects/create" className="block py-2 px-4 hover:bg-gray-700">NUEVO PROYECTO</Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-4 hover:bg-gray-700">CERRAR</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarAdmin;