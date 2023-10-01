
import ContactForm from '../atoms/ContactForm'

function Contact() {
  return (
    <div className= "">

        <h2 className="text-4xl font-semibold text-gray-800 mt-20 mb-6 uppercase font-roboto tracking-widest flex items-center justify-center space-x-4">
            <span className="h-[4px] bg-gray-800 w-20" />
            <span className="relative z-10">CONTÁCTANOS</span>
            <span className="h-[4px] bg-gray-800 w-24" />
        </h2>
    <ContactForm/>

    </div>
  )
}
export default Contact;