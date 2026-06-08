import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import ServicesSlider from './components/ServicesSlider'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import AboutUs from './components/AboutUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <Partners />
      <ServicesSlider />
      <Testimonials />
      <FAQ />
      <AboutUs />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
