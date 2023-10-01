import NavbarAdmin from "../components/atoms/NavbarAdmin";
import ProjectList from "../components/atoms/ProjectList";
import Pagination from "../components/atoms/Pagination";



function ProjectsDashboard() {
  return (
    <>
    <div id='proyectos'>
        <NavbarAdmin/>
    </div>
    
    <div id='proyectos'>
        <ProjectList/>
    </div>

    <Pagination/>
    </>
  )
}

export default ProjectsDashboard