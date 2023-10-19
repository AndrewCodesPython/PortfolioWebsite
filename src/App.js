import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

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
        <section id="Projects">
          <Projects />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;