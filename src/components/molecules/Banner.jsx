import Navbar from '../atoms/Navbar';
import hand2 from '../../assets/images/hand2.jpg'


const Banner = () => {

  return (
    <div>

      <Navbar/>

      <div className="relative flex flex-col md:flex-row items-center overflow-hidden">
        <div className="w-full md:w-1/2 top-0"> 
         <img
          src={hand2}
          alt="Banner"
          className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <h2 className="text-6xl md:text-7xl font-semibold text-gray-800 font-mona-sans leading-tight">
          Ideas Ágiles. <br/> Diseños Asombrosos.
          </h2>
          <h3 className="text-5xl md:text-3xl text-gray-600 font-mona-sans mt-4 leading-tight">
          Tu proyecto, <br/> nuestra pasión.
          </h3>

          <div className="flex justify-center mt-12">
            <a
            href="#contacto"
            className="px-4 py-2 font-bold text-white uppercase bg-yellow-500 border-2 border-transparent rounded-lg text-md hover:bg-gray-400"
            >
              ¿Hablamos?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
