import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar.js';
import Header from './components/Header/header.js';
import Projects from './components/Projects/projects.js';
import Footer from './components/Footer/footer.js'
import Services from './components/Services/services.js';
import Art from './components/Art/art.js';
import Reviews from './components/Reviews/reviews.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Art />
        <section id="Projects">
          <Projects />
        </section>
        <Services />
        <Reviews />
        <Footer />
      </div>
    </Router>
  );
}

export default App;