import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';

const endpoint = 'http://127.0.0.1:8000/api/admin/projects';
const categoriesEndpoint = 'http://127.0.0.1:8000/api/admin/categories';

function ProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  

  useEffect(() => {
    axios
      .get(categoriesEndpoint)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.error('Error al obtener las categorías:', error);
      });
  }, []);

  const store = async (e) => {
    e.preventDefault();

    // Validar que los campos requeridos no estén vacíos
    if (!title || !description || !image || !selectedCategory) {
      console.error('Todos los campos son obligatorios');
      return;
    }

    const project = {
      title: title,
      description: description,
      image: image,
      url: url,
      category_id: selectedCategory,
    };

    try {
      
      await axios.post(endpoint, project);
      navigate('/admin/projects'); 
    } catch (error) {
      console.error('Error al guardar el proyecto:', error);
    }
  };

  

const handleSubmit = async (e) => {
  e.preventDefault();


  const selectedCategory = document.querySelector('select[name="category"]').value;

  
  if (!selectedCategory) {
    console.error('El valor del select de categorías no está presente');
    return;
  }

  
  await axios.post('/api/projects', {
    title: title,
    description: description,
    image: image,
    url: url,
    category_id: selectedCategory,
  });
};


  return (
           <div>
          <NavbarAdmin />
        <div className= "container mt-40 mb-40 ">
        <div className="bg-gray-100 w-full p-6 ">
          <h3 className="text-xl font-mona-sans mb-4 text-yellow-400 ">Introduce los datos de un nuevo proyecto</h3><br/>
          <form onSubmit={store}>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Título</label><br/>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-full  px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Escribe el título aquí"
              />
            </div><br/>
      
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Descripción</label><br/>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Escribe la descripción aquí"
              />
            </div><br/>
      
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Imagen</label><br/>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Agrega la URL de la imagen"
              />
            </div><br/>
      
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">URL</label><br/>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Agrega la URL del proyecto"
              />
            </div><br/>
            <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Selecciona una categoría</label><br/>
              <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="">Selecciona una categoría</option>
                  {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
              </select>
              </div>
            
            <br/>
      
            <button
              type="submit"
              className="w-1/3 bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg m-10"
            >
              Guardar
            </button>
             
          </form>
        </div>
      </div> 
      </div>
    )
}

export default ProjectForm;


