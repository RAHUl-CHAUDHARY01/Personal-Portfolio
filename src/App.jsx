import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Socials from "./components/Socials";
import Particle from "./components/Particle";

export default function App() {
  return (
    <div className='h-screen bg-[#09090b]'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>   
          <Route path='/skills' element={<Skills/>}/>     
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Socials/>}/>
          {/* <Route path='/album/:id' element={<DisplayAlbum/>}/> */}
        </Routes>
        {/* <Socials/> */}
        {/* <About/>
        <Projects/>
        <Skills/> */}
      </Router>
        <Particle/>
    </div>
  )
}