import hand2 from '../../assets/images/hand2.jpg'
import logoTransparent from '../../assets/images/logoTransparent.png'


export default function Services() {

    return (
  
        <div className="relative">
        <img
          src={ hand2 }
          alt="Imagen de fondo"
          className="w-full h-auto lg:w-1/2 lg:h-screen object-cover"
        />
        <div className="absolute top-0 left-0 bg-opacity-0 p-4 w-full lg:w-1/2 flex items-center">
            <img
             src={ logoTransparent }
             alt="logo"
             className="w-72 h-15 my-0 flex"
        />

          <h1 className="text-3xl"></h1>
        </div>
      </div>
    );
      
  }
  