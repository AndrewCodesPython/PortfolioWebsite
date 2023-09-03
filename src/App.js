import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';

import './App.css';

import Navbar from './components/Navbar/navbar.js';
import Header from './components/Header/header.js';
import Projects from './components/Projects/projects.js';

function App() {

  return (
    <Router>
      <div className="App">  

        <Navbar />

        <Header />

        <Routes>
          <Route path="/Projects" element={<ProjectsSection />} />
      
        </Routes>
      
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
    <section ref={projectsRef} id="projects">
      <Projects />
    </section>
  );
}
export default App;