import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <div className="text">
          <h2>Currently creating React applications, one with a custom LLM powered "inspiring" chatbot called "The Muse," and a website/ scheduling platform for "Casey's Pup Care." This site was also created by Andrew using React. A 3D game called "Portal" is in the planning stage. </h2>
        </div>
      
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