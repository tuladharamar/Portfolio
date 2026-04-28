

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './Components/Body/About'
import Skills from './Components/Body/Skills'
import Contact from './Components/Body/Contact'
import Projects from './Components/Body/Projects'
import Error from './Components/Page/Error'
import Certificate from './Components/Body/Certificate'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/certificate'element={<Certificate/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer /> 

    </>
  )
}

export default App
