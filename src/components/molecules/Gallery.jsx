import React, { useEffect, useState } from 'react';
import GalleryCard from '../atoms/GalleryCard'; // Asegúrate de que la ruta sea correcta.
import Navbar from '../atoms/Navbar';
import axios from 'axios';
import ProjectSearch from '../atoms/projectSearch';


const endpoint = 'http://127.0.0.1:8000/api/admin';
const categoriesEndpoint = 'http://127.0.0.1:8000/api/admin/categories';

function Gallery() {
const [projects, setProjects] = useState([]);
const [categories, setCategories] = useState([]);



useEffect(() => {
  getAllProjects();
  getAllCategories();
}, []);

const getAllProjects = async () => {
  try {
    const response = await axios.get(`${endpoint}/projects`);
    console.log(response.data);
    setProjects(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getAllCategories = async () => {
  try {
    const response = await axios.get(categoriesEndpoint);
    setCategories(response.data.data);
  } catch (error) {
    console.error(error);
  }
};  




  return (
    <div>
      <Navbar />
      {/* <ProjectSearch searchText={(text) => setTerm(text)}/>
      {!isLoading && projects.length === 0 && <h3 className="text-5xl text-center mx-auto mt-32">
        No se han encontrado proyectos </h3>} */}

    
    <div className="container mx-auto mt-40 ml-16">
    <div className="grid grid-cols-3 gap-4">
  {projects.map((project) => (
    <GalleryCard key={project.id} project={project} categories={categories} />
  ))}
</div>
    </div>
    </div>
  );
}

export default Gallery;