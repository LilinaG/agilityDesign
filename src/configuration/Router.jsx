
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ShowProjects  from '../BackComponents/ProjectsComponents/ShowProjects';
// import CreateProjects  from '../BackComponents/ProjectsComponents/CreateProjects';
// import EditProjects  from '../BackComponents/ProjectsComponents/EditProjects';

const Router = () => {

  
  return (
    <>
    <div className="">
       <BrowserRouter>
            <Routes>
            
              {/* <Route path='/admin/projects' element={ <ShowProjects/> } />
              <Route path='/admin/projects/create' element={ <CreateProjects/> } />
              <Route path='/admin/projects/edit/:id' element={ <EditProjects/> } /> */}
            </Routes>

       </BrowserRouter>
    </div>
    </>
  )
}

export default Router


