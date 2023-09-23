// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ProjectForm() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Realiza una solicitud GET a tu API para obtener las categorías
//     axios.get('http://127.0.0.1:8000/api/admin/categories')
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           // Verifica si la respuesta contiene un array válido antes de asignarlos
//           setCategories(response.data);
//         } else {
//           console.error('Respuesta de API no válida');
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-semibold">Nuevo Proyecto</h1>
//       {loading ? (
//         <p className= "mt-4">Cargando categorías...</p>
//       ) : (
//         <form>
//           <div className="mb-4">
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//               Título
//             </label>
//             <input type="text" id="title" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//               Descripción
//             </label>
//             <textarea id="description" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//               Imagen (URL)
//             </label>
//             <input type="text" id="image" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="url" className="block text-sm font-medium text-gray-700">
//               URL del proyecto
//             </label>
//             <input type="text" id="url" className="mt-1 p-2 w-full border border-gray-300 rounded-lg" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//               Categoría
//             </label>
            
//             <select id="category" className="mt-1 p-2 w-full border border-gray-300 rounded-lg">
//                 {categories.map((category) => (
//             <option key={category.id} value={category.id}>
//                 {category.name}
//             </option>
//             ))}
//             </select>
//           </div>
//           <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
//             Crear Proyecto
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default ProjectForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api/admin/projects';

function ProjectForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState(''); // Corregir "caegory" a "category"
    const navigate = useNavigate();

    const store = async (e) => { // Agregar "async" aquí
        e.preventDefault();
        await axios.post(endpoint, { title: title, description: description, image: image, url: url, category: category });
        navigate('/admin/projects');
    }

    return (
        <div className= "container mx-auto">
        <div className="flex justify-center items-center h-screen ">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-mona-sans mb-4">Introduce los datos nuevo proyecto</h3>
          <form onSubmit={store}>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Título</label><br/>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
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
              <label className="block text-gray-700 font-bold mb-2">Categoría</label><br/>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Escribe la categoría aquí"
              />
            </div><br/>
      
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
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
