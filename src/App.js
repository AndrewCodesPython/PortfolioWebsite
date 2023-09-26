import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';

import './App.css';

import Navbar from './components/Navbar/navbar.js';
import Header from './components/Header/header.js';
import Projects from './components/Projects/projects.js';
import Footer from './components/Footer/footer.js'

function App() {

  return (
    <Router>
      <div className="App">  

        <Navbar />

        <Header />

        <Routes>
          <Route path="/Projects" element={<ProjectsSection />} />
      
        </Routes>

        <Footer />
      </div>
    </Router>
  );

}
function ProjectsSection() {
  const projectsRef = useRef(null);

  useEffect(() => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section ref={projectsRef} id="Projects">
      <Projects />
    </section>
  );
}
export default App;