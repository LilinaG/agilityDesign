
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectForm from '../components/atoms/ProjectForm';
import ProjectsDashboard from '../pages/ProjectsDashboard';
import LandingPage from '../pages/LandingPage';
import EditForm from '../components/atoms/EditForm';
import Gallery from '../components/molecules/Gallery';
import CategoriesDashboard from '../pages/CategoriesDashboard';
import Login from '../pages/Login'

const Router = () => {
  return (
    <>
    
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/galeria" element={<Gallery />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/projects" element={<ProjectsDashboard />} />
                <Route path='/admin/projects/create' element={ <ProjectForm/> } />
                <Route path="/admin/projects/edit/:id" element={<EditForm />} />
                <Route path="/admin/categories" element={<CategoriesDashboard />} />

               
            </Routes>
       </BrowserRouter>
   
    </>
  )
}
export default Router;

