import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';

function EditForm() {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    image: '',
    url: '',
    category_id: '', 
  });

  const { id } = useParams(); // Obtener el ID del proyecto de la URL
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Obtener los datos del proyecto al cargar el formulario
    axios.get(`http://127.0.0.1:8000/api/admin/projects/${id}`)
      .then((response) => {
        setProjectData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Obtener las categorías al cargar el formulario
    axios.get('http://127.0.0.1:8000/api/admin/categories')
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error('Error al obtener las categorías:', error);
      });
  }, [id]);

  const updateProject = async (e) => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/admin/projects/${id}`, projectData);
    console.log('Proyecto actualizado');
    console.log('Redireccionando a /admin/projects');
    navigate('/admin/projects'); // Redirigir al listado de proyectos después de la edición
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="container mt-40 mb-40">
        <div className="bg-gray-100 w-full p-6">
          <h3 className="text-xl font-mona-sans mb-4 text-yellow-400">Editar el proyecto</h3><br/>
          <form onSubmit={updateProject}>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Título</label><br/>
              <input
                value={projectData.title}
                onChange={handleChange}
                type="text"
                name="title"
                className="w-full  px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div><br/>
      
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Descripción</label><br/>
              <input
                value={projectData.description}
                onChange={handleChange}
                type="text"
                name="description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div><br/>
      
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Imagen</label><br/>
              <input
                value={projectData.image}
                onChange={handleChange}
                type="text"
                name="image"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div><br/>
      
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">URL</label><br/>
              <input
                value={projectData.url}
                onChange={handleChange}
                type="text"
                name="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div><br/>

            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              name="category_id"
              value={projectData.category_id}
              onChange={handleChange}
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
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
  );
}

export default EditForm;
