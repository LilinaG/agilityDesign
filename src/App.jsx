

//import Router from "./configuration/Router"
import './index.css'
import Footer from './components/atoms/Footer'
import Banner from "./components/molecules/Banner"
import Navbar from './components/atoms/Navbar'
import Equip from './pages/Equip'
import Services from '../src/pages/Services'
//import Gallery from '../src/pages/Gallery'
import Methodology from '../src/pages/Methodology'


const App = () => {

    return (

        <>

        <Navbar/> 
        <Banner/>
        <Services/> 
        {/* <Gallery /> */}
        <Methodology/>
        <Equip />
        <Footer/> 
       
        
       

        
      
        </>
    )
}
export default App