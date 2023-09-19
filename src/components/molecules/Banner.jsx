import hand2 from '../../assets/images/hand2.jpg';

function Banner() {
    return (



<div className="relative z-20 flex items-center overflow-hidden bg-white flex-wrap">

    <div className="container relative flex m-0 p-0 "> 
        <div className="relative sm:w-1/2 lg:w-1/2">
            <img src={hand2} className="w-full" alt="Hand" /> 
        </div>
   
        <div className="relative z-20 flex flex-col md:w-full lg:w-full ml-5 mt-24">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white" />
            <h2 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-xl">
                Ideas Ágiles. <br />
                Diseños asombrosos.
                <span className="text-5xl sm:text-l">
                Tu proyecto, <br />
                Nuestra Pasión.
                </span>
            </h2>

            <div className="flex mt-8 justify-center ">
                <a
                href="#"
                className="px-4 py-2 mr-4 font-bold text-white uppercase bg-yellow-500 border-2 border-transparent rounded-lg text-md hover:bg-gray-400"
                >
                ¿Hablamos?
                </a>
            </div>

        </div>
        
    </div>

</div>
  );
}
export default Banner  