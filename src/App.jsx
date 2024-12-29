
import './App.css'
import Service from './components/Service'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Myskills from './components/Myskills'
import Contact from './components/Contact'
import Footer from './components/Footer'



  function  App() {

    return(
      <>
          <Navbar />
          <Hero />
          <About />
          <Service />
          <Project />
          <Myskills />
          <Contact />
          <Footer />
      </>
      
  )
}

export default App
