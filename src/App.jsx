import { Routes, Route } from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"
import Projects from "./views/Projects"
import Contact from "./views/Contact"
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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
