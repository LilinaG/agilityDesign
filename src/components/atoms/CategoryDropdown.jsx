import React, { useState, useEffect } from 'react';
import axios from 'axios';

const categoriesEndpoint = 'http://127.0.0.1:8000/api/admin/categories'; // Reemplaza con la URL correcta de tu API de categorías

function CategoryDropdown() {
  const [categories, setCategories] = useState([]); // Almacena las categorías obtenidas de la API
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Obtener las categorías de la API y almacenarlas en el estado 'categories'
    axios.get(categoriesEndpoint)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2">Categoría</label>
      {categories.length > 0 && (
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border bg-black border-gray-300 rounded-lg"
        >
          <option value="">Selecciona una categoría</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CategoryDropdown;
