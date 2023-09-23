import React from 'react';
import pencil from '../../assets/images/pencil.jpg';

const Methodology = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center overflow-hidden">
   
      <div className="w-full md:w-1/2 p-8 text-center md:text-left">
        <p className="text-4xl md:text-3xl sm:text-2xl text-gray-600 font-mona-sans mt-8 md:mt-20 leading-7 text-center">
          Menos es más, ¿Cuántas veces has escuchado esa frase en el mundo del diseño? <br />
          En <strong className="text-black text-6xl">AD</strong> somos unos radicales y nos gusta simplificar el trabajo, buscando <em className="text-yellow-500">soluciones prácticas y profesionales</em>, que se ajusten a tus necesidades y en el menor tiempo posible. <br /><br />
          Somos los máster del "<strong className="text-black">yo me lo guiso yo me lo como</strong>", no dependemos de terceros, comunicación directa con el cliente de principio a fin. <br /><br />
        </p>
        
        <div className="flex justify-center md:justify-start mt-6 mx-60"> 
          <a
            href="#contacto"
            className="px-4 py-2 font-bold text-white uppercase bg-yellow-500 border-2 border-transparent rounded-lg text-md hover:bg-gray-400"
          >
            ¿Tomamos un café?
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 top-0">
        <img
          src={pencil}
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Methodology;

