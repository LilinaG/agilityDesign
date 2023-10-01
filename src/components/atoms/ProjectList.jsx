
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const endpoint = 'http://127.0.0.1:8000/api/admin';
const categoriesEndpoint = 'http://127.0.0.1:8000/api/admin/categories';

const ProjectList = () => {
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
      console.log('Categorías cargadas:', response.data.data); 
    } catch (error) {
      console.error(error);
    }
  };  
  const deleteProject = async (id) => {
    try {
      await axios.delete(`${endpoint}/projects/${id}`);
      getAllProjects(); 
    } catch (error) {
      console.error(error);
    }
  };

return (
      <div className="container mx-auto">
        <table className="mx-20 my-40">
          <thead className="">
            <tr>
              <th className="px-6 py-3 bg-yellow-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 bg-yellow-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 bg-yellow-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 bg-yellow-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 bg-yellow-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">URL</th>
              <th className="px-6 py-3 bg-yellow-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">Categoría</th>
              <th className="px-6 py-3 bg-yellow-300 "></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y-2 divide-gray-400">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{project.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{project.title}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{project.description}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{project.image}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{project.url}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {categories.find((category) => category.id === project.category_id)?.name || 'otros'}
                </td>
                <td>
                  <button onClick={() => window.open(`/admin/projects/edit/${project.id}`, '_blank')} className="text-white hover:text-white bg-black p-2 rounded">Editar</button>
                  <button onClick={() => deleteProject(project.id)} className="text-white hover:text-white bg-yellow-400 p-2 rounded mt-2">Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ProjectList;

