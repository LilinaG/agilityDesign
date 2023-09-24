import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/admin/categories')
      .then((response) => {
        setCategories(response.data.data); // Accede a la propiedad 'data' del objeto de respuesta
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    // Realiza una solicitud DELETE a tu API para eliminar una categoría por ID
    axios.delete(`http://127.0.0.1:8000/api/admin/categories/${id}`)
      .then(() => {
        // Actualiza la lista de categorías después de eliminar
        setCategories(categories.filter((category) => category.id !== id));
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
            <th className="px-6 py-3 bg-yellow-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 bg-yellow-300 "></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y-2 divide-gray-400">
          {categories.map((category) => (
            <tr key={category.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{category.id}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{category.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <button onClick={() => window.open(`/admin/categories/edit/${category.id}`, '_blank')} className="text-white hover:text-white bg-black p-2 rounded">Editar</button>
                <button onClick={() => handleDelete(category.id)} className="text-white hover:text-white bg-yellow-400 p-2 rounded mt-2">Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;
