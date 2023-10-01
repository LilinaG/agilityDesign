
import Navbar from '../atoms/Navbar';
import hand2 from '../../assets/images/hand2.jpg';

const Banner = () => {
  return (
    <div>
      <Navbar />
      <div className="relative flex flex-col md:flex-row items-center overflow-hidden">
        <div className="w-full md:w-1/2 top-0">
          <img src={hand2} alt="Banner" className="w-full h-auto" />
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
          <h4 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gray-800 font-roboto font-black leading-tight">
            Ideas Ágiles. <br /> Diseños Asombrosos.
          </h4>
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 font-roboto font-black mt-4 leading-tight">
            Tu proyecto, <br /> nuestra pasión.
          </h3>

          <div className="flex justify-center mt-8 md:mt-12">
            <a
              href="#contacto"
              className="px-4 py-2 font-roboto font-bold text-white uppercase bg-yellow-500 border-2 border-transparent rounded-lg text-md hover:bg-gray-400"
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
