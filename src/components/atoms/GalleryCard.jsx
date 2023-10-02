const GalleryCard = ({ project, categories }) => {
  const category = categories.find((cat) => cat.id === project.category_id);
   
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl">
      <img src={project.image} alt={project.title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-600 text-xl mb-2"><strong>Título: </strong> {project.title}</div>
        <p className="text-gray-700 text-base"><strong>Descripción: </strong>{project.description}</p>
        <p className="text-gray-700 text-base"><strong>URL:  </strong>{project.url}</p>
      </div>

      <div className="px-6 py-4">
        {category && (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        {category.name}
        </span>
        )}
      </div>
    
    </div>
  );
};

export default GalleryCard;


