import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

import About from './pages/About';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Contact from './pages/Contact'; 
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; 
import Certificates from './pages/Certificates';
import Resume from './pages/Resume';
import ProjectDetail from './pages/ProjectDetail';



function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path='/resume' element={<Resume />} />
             <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
