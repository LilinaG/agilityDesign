// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import NavbarAdmin from './NavbarAdmin';

// const endpoint = 'http://127.0.0.1:8000/api/admin/projects';

// function ProjectForm() {
//     const [inputValue, setInputValue] = useState(''); // Proporciona un valor inicial vacío o válido
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState('');
//     const [url, setUrl] = useState('');
//     const [category, setCategory] = useState(''); 
//     const navigate = useNavigate();

//     const store = async (e) => { 
//         e.preventDefault();
//         await axios.post(endpoint, { title: title, description: description, image: image, url: url, category: category });
//         navigate('/admin/projects');
//     }

//     return (
//         <div>
//           <NavbarAdmin />
//         <div className= "container mt-40 mb-40 ">
//         <div className="bg-gray-100 w-full p-6 ">
//           <h3 className="text-xl font-mona-sans mb-4 text-yellow-400 ">Introduce los datos de un nuevo proyecto</h3><br/>
//           <form onSubmit={store}>
//             <div className="mb-6">
//               <label className="block text-gray-700 font-bold mb-2">Título</label><br/>
//               <input
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 type="text"
//                 className="w-full  px-4 py-2 border border-gray-300 rounded-lg"
//                 placeholder="Escribe el título aquí"
//               />
//             </div><br/>
      
//             <div className="mb-6">
//               <label className="block text-gray-700 font-bold mb-2">Descripción</label><br/>
//               <input
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 type="text"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 placeholder="Escribe la descripción aquí"
//               />



//             </div><br/>
      
//             <div className="mb-6">
//               <label className="block text-gray-700 font-bold mb-2">Imagen</label><br/>
//               <input
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//                 type="text"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 placeholder="Agrega la URL de la imagen"
//               />
//             </div><br/>
      
//             <div className="mb-6">
//               <label className="block text-gray-700 font-bold mb-2">URL</label><br/>
//               <input
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 type="text"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 placeholder="Agrega la URL del proyecto"
//               />
//             </div><br/>
      
//             <div className="mb-6">
//               <label className="block text-gray-700 font-bold mb-2">Categoría</label><br/>
//               <input
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 type="text"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 placeholder="Escribe la categoría aquí"
//               />
//             </div><br/>
      
//             <button
//               type="submit"
//               className="w-1/3 bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
//             >
//               Guardar
//             </button>
             
//           </form>
//         </div>
//       </div> 
//       </div>
//     )
// }

// export default ProjectForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';

const endpoint = 'http://127.0.0.1:8000/api/admin/projects';
const categoriesEndpoint = 'http://127.0.0.1:8000/api/admin/categories'; // Reemplaza con la URL correcta de tu API de categorías

function ProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]); // Almacena las categorías obtenidas de la API
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener las categorías de la API y almacenarlas en el estado 'categories'
    console.log('categories en useEffect:', categories);
    axios.get(categoriesEndpoint)
      .then(response => {
        console.log('Respuesta de la API:', response);
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, { title, description, image, url, category });
    navigate('/admin/projects');
  }

  return (
    <div>
      <NavbarAdmin />
      <div className="container mt-40 mb-40 ">
        <div className="bg-gray-100 w-full p-6 ">
          <h3 className="text-xl font-mona-sans mb-4 text-yellow-400">Introduce los datos de un nuevo proyecto</h3><br />
          <form onSubmit={store}>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Título</label><br />
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-full  px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Escribe el título aquí"
              />
            </div><br />

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Descripción</label><br />
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Escribe la descripción aquí"
              />
            </div><br />

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Imagen</label><br />
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Agrega la URL de la imagen"
              />
            </div><br />

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">URL</label><br />
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Agrega la URL del proyecto"
              />
            </div><br />

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Categoría</label><br />
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
              </div><br />

              <div>
      <label htmlFor="category">Categorías:</label>
      <select
        id="category"
        multiple
        value={selectedCategories}
        onChange={(e) => setSelectedCategories(Array.from(e.target.selectedOptions, option => option.value))}
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <p>Categorías seleccionadas: {selectedCategories.join(', ')}</p>
    </div>

            <button
              type="submit"
              className="w-1/3 bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Guardar
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;

