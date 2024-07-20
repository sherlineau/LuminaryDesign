import { Routes, Route } from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"
import Projects from "./views/Projects"
import Contact from "./views/Contact"
import DMCA from "./views/DMCA"
import Privacy from "./views/Privacy"
import Terms from "./views/Terms"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/about-us" element={<About/> }/>
        <Route path="/projects" element={<Projects/> }/>
        <Route path="/contact-us" element={<Contact/> }/>
        <Route path="/dmca-policy" element={<DMCA/> }/>
        <Route path="/privacy-policy" element={<Privacy/> }/>
        <Route path="/terms-of-use" element={<Terms/> }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
