
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectForm from '../components/molecules/Admin/ProjectForm';
import ProjectsDashboard from '../pages/ProjectsDashboard';
import LandingPage from '../pages/LandingPage';
// import ShowProjects  from '../BackComponents/ProjectsComponents/ShowProjects';
// import CreateProjects  from '../BackComponents/ProjectsComponents/CreateProjects';
// import EditProjects  from '../BackComponents/ProjectsComponents/EditProjects';

const Router = () => {
  return (
    <>
    
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/admin/projects" element={<ProjectsDashboard />} />
                <Route path='/admin/projects/create' element={ <ProjectForm/> } />
                {/* <Route path='/admin/projects/edit/:id' element={ <EditProjects/> } />  */}
            </Routes>
       </BrowserRouter>
   
    </>
  )
}
export default Router;

