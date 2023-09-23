import Banner from '../components/molecules/Banner'
import Services from '../components/molecules/Services'
//import Gallery from '../components/molecules/Gallery'
import Equip from '../components/molecules/Equip'
import Contact from '../components/molecules/Contact'
import Footer from '../components/atoms/Footer'

function LandingPage() {
  return (
    <>
        {/* <Navbar/> */}
        <Banner/>
        <Services/>
        {/* <Gallery/> */}
        <Equip/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default LandingPage