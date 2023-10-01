import React, { useEffect, useState } from 'react';
import GalleryCard from '../atoms/GalleryCard'; // Asegúrate de que la ruta sea correcta.
import Navbar from '../atoms/Navbar'
import ProjectSearch from '../atoms/projectSearch';

function Gallery() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/admin/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error al obtener proyectos:', error);
      });
  }, [term]);

  return (
    <div>
      <Navbar />
      <ProjectSearch searchText={(text) => setTerm(text)}/>
      {!isLoading && projects.length === 0 && <h3 className="text-5xl text-center mx-auto mt-32">
        No se han encontrado proyectos </h3>}

    
    <div className="container mx-auto mt-40 ml-16">
      <div className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <p>Cargando proyectos...</p>
        ) : (
          projects.map((project) => (
            <GalleryCard key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
    </div>
  );
}

export default Gallery;
