import Footer from "./components/Footer"
import Navbar from "./components/navbar/Navbar"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"


function App() {

  return (
    <main>
      <Navbar />

      <main>
        <section id="home">
          <HomePage/>
        </section>

        <section id="about" className=" bg-gray-800 p-4 py-16">
          <AboutPage/>
        </section>

        <section id="services" className=" bg-gray-900 p-4 py-12">
          <ServicesPage/>
        </section>

        <section id="contact" className=" bg-gray-800 p-4 py-16">
          <ContactPage/>
        </section>
      </main>

      <Footer />
    </main>
  )
}

export default App
