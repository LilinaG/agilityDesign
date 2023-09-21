import CardServices from "../components/atoms/CardServices";
import service1 from '../../src/assets/images/service1.png';
import service2 from '../../src/assets/images/service2.png';
import service3 from '../../src/assets/images/service3.png';


  

function Services() {


    const cardsData = [
        {
          title: "Diseño Gráfico",
          text: "Transformamos tus ideas en arte visual. Desde logotipos hasta gráficos impactantes, damos vida a tu visión.",
          imageSrc: service1 
        },
        {
          title: "Páginas Web",
          text: "Construimos sitios web impresionantes que conectan tu negocio con el mundo. Creatividad y tecnología se unen para crear experiencias memorables.",
          imageSrc: service2 
        },
        {
          title: "Identidad Corporativa",
          text: "Hacemos tu marca inolvidable. Desde logotipos distintivos hasta paletas de colores, creamos la base que te diferencia y te hace memorable.",
          imageSrc: service3 
        },
      ];

      

  return (
    <div className= "">

        <h2 className="text-4xl font-semibold text-gray-800 mt-20 mb-6 uppercase font-mona-sans tracking-widest flex items-center justify-center space-x-4">
            <span className="h-[4px] bg-gray-800 w-20" />
            <span className="relative z-10">SERVICIOS</span>
            <span className="h-[4px] bg-gray-800 w-24" />
        </h2>
   
   <div className="flex justify-around">
    {cardsData.map((card, index) => (
      <CardServices
        key={index} 
        title={card.title}
        text={card.text}
        imageSrc={card.imageSrc}
      />
     
    ))}
  </div>
  </div>
  )
}

export default Services
