import Banner from '../components/molecules/Banner'
import Services from '../components/molecules/Services'
import Methodology from '../components/molecules/Methodology'
//import Gallery from '../components/molecules/Gallery'
import Equip from '../components/molecules/Equip'
import Contact from '../components/molecules/Contact'
import Footer from '../components/atoms/Footer'

function LandingPage() {
  return (
    <>
        
        <div id="inicio">
            <Banner/>
        </div>
        <div id= 'servicios'>
            <Services/>
        </div>
        <div id= 'galería'>
        </div>
        <div id= 'metodología'>
            <Methodology/>
        </div>
        <div id='conócenos'>
        <Equip/>
        </div>
        <div id='contacto'>
        <Contact/>
        </div>
        <Footer/>
    </>
  )
}

export default LandingPage