

//import Router from "./configuration/Router"
// import './index.css'
// import Footer from './components/atoms/Footer'
// import Banner from "./components/molecules/Banner"
// import Navbar from './components/atoms/Navbar'
// import Equip from './pages/Equip'
// import Services from '../src/pages/Services'
// //import Gallery from '../src/pages/Gallery'
// import Methodology from '../src/pages/Methodology'
// import Contact from '../src/pages/Contacto'
// import LoginAdmin from '../src/pages/LoginAdmin'
// import ProjectList from './components/atoms/ProjectList'
// import ProjectsDashboard from './pages/ProjectsDashboard'
// import Pagination from '../src/components/atoms/Pagination'
import ProjectForm from './components/molecules/ProjectForm'
//import { BrowserRouter } from "react-router-dom"
import Router from './configuration/Router';




const App = () => {

    return (

        <>
 <Router>
        {/* <Navbar/> 
        <Banner/>
        <Services/> 
        <Gallery />
        <Methodology/>
        <Equip />
        <Contact />
        <Footer/> 
        */}

 
        {/* <LoginAdmin/>  */}
        {/* <ProjectList/> */}
        {/* <ProjectsDashboard/> */}
        {/* <Pagination/> */}
        <ProjectForm/>
        
        </Router>  


        
       

        
      
        </>
    )
}
export default App