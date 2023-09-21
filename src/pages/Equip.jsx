
import avatar1 from '../assets/images/avatar1.jpg'
import avatar2 from '../assets/images/avatar2.jpg'

function Equip() {
  return (
<div className="text-center mt-20">
      <h2 className="text-4xl font-semibold text-gray-800 mt-8 mb-6 uppercase font-mona-sans tracking-widest flex items-center justify-center space-x-4">
      
        <span className="h-[4px] bg-gray-800 w-20" />
        <span className="relative z-10">Conócenos</span>
        
        <span className="h-[4px] bg-gray-800 w-24" />

        </h2>

<div className="gap-8 md:flex mt-20">
    <div className="mb-8 text-center md:w-1/2 md:mb-0">
        <img 
        className="w-48 h-48 mx-auto -mb-24 rounded-full" 
        src= { avatar1 }
        alt="Avatar Raúl"/>
        <div className="px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-gray-800 font-title font-mona-sans">
                Raúl Romero
            </h3>
            <p className="font-body text-gray-500 font-bold text-m">
                Diseñador Multimedia
            </p>
            <p className="mb-4 text-base font-body">
            Transformando ideas en experiencias visuales impactantes.
            </p>
            <a 
            className="text-gray-500 font-body hover:text-yellow-400"  
            href="#">
                raulromero@agilitydesing.com
            </a>
        <div className="flex justify-center mt-4">

        <a href="https://www.linkedin.com/in/raulromeromolina/">
            <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-yellow-400 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                </path>
            </svg>
        </a>
        </div>
        </div>
    </div>
    <div className="text-center md:w-1/2">
        <img className="w-48 h-48 mx-auto -mb-24 rounded-full" 
        src= { avatar2}
        alt="Avatar Liliana"/>
        <div className="px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-gray-800 font-title font-mona-sans">
               Liliana Gutiérrez
            </h3>
            <p className="font-body text-gray-500 font-bold text-base">
                Desarrolladora web Full Stack
            </p>
            <p className="mb-4 text-m font-body">
            Convirtiendo código en experiencias digitales innovadoras.
            </p>
            <a 
            className="text-gray-500 font-body hover:text-yellow-300" 
            href="mailto:lgutierrezfer@agilitydesing.com">
                lgutierrezfer@agilitydesing.com
            </a>
            <div className="flex justify-center mt-4">

        <a href="www.linkedin.com/in/lilianagutierrezfernandez">
            <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-yellow-400 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                </path>
            </svg>
        </a>
        </div>
        </div>
    </div>
</div>

</div>

  )
}
export default Equip



