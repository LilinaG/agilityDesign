import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a tu API para obtener los proyectos
    axios.get('http://127.0.0.1:8000/api/admin/projects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    // Realiza una solicitud DELETE a tu API para eliminar un proyecto por ID
    axios.delete(`http://127.0.0.1:8000/api/admin/projects/${id}`)
      .then(() => {
        // Actualiza la lista de proyectos después de eliminar
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
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
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{project.category}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <button onClick={() => handleDelete(project.id)} className="text-white hover:text-white bg-black p-2 rounded">Editar</button>
                <button onClick={() => handleDelete(project.id)} className="text-white hover:text-white bg-yellow-400 p-2 rounded mt-2">Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;