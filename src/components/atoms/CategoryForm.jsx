import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';

const endpoint = 'http://127.0.0.1:8000/api/admin/categories';

function CategoryForm() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const store = async (e) => { 
        e.preventDefault();
        await axios.post(endpoint, { name: name});
        navigate('/admin/categories');
    }

    return (
        <div>
          <NavbarAdmin />
        <div className= "container mt-40 mb-40 ">
        <div className="bg-gray-100 w-full p-6 ">
          <h3 className="text-xl font-mona-sans mb-4 text-yellow-400 ">Nueva categoría</h3><br/>
          <form onSubmit={store}>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Nombre de categoría</label><br/>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full  px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Escribe el nombre de la categoría aquí"
              />
            </div><br/>
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
    )
}

export default CategoryForm;