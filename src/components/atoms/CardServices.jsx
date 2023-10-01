

const CardServices = ({ title, text, imageSrc }) => {

    return (
      <div className="w-full flex-col sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={imageSrc}
            alt="Card Image"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-roboto font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-l text-gray-600">{text}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardServices;
  


