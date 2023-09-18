import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const endpoint = 'http://127.0.0.1:8000/api';

export default function ShowProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []); // Arreglo de dependencias vacío para ejecutar una vez al montar el componente

  const getAllProjects = async () => {
    const response = await axios.get(`${endpoint}/admin/projects`);
    setProjects(response); // Se espera que los datos de la respuesta estén en response.data
  };
console.log(projects.data)

  const deleteProject = async (id) => {
    await axios.delete(`${endpoint}/admin/projects/${id}`);
    getAllProjects(); // Llamada a getAllProjects para actualizar la lista después de eliminar un proyecto
  };

  return (
    <div>
      <div className="">
        <Link to="/admin/projects/create" className="">
          Crear proyecto
        </Link>
      </div>

      <table className="">
        <thead>
          <tr>
            <th>id</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>URL</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {projects.data.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{project.image}</td>
              <td>{project.url}</td>
              <td>{project.category}</td>
              <td>
                <Link to={`/admin/projects/edit/${project.id}`} className="">
                  Editar
                </Link>
                <button onClick={() => deleteProject(project.id)} className="">
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
