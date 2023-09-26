import React from 'react'
import './projects.css'
import muuse from '../../assets/muuse.png';
import yes from '../../assets/yes.png';
import paint from '../../assets/paint.png';
function Projects() {
    return (
        <div className="projects">
          <div className="projects-img">
            <img src={muuse} alt="img" />
            <p> "The Muse" is an OpenAI powered, custom chatbot designed to inspire and educate. Created with React.js, Node.js, CSS, and an API key from OpenAI. In progress. </p>
          </div>
          <div className="projects-img">
            <img src={yes} alt="img" />
            <p>Website/ Scheduling Application created for Casey's Pup Care, a professional dog boarding business. Created using React.js, Node.js, and CSS. In progress.</p>
          </div>
          <div className="projects-img">
            <img src={paint} alt="img" />
            <p>Paint Application, created using Python and Pygame. </p>
          </div>
          <p>This website was also created by Andrew Escudero, using React.js, Node.js, and CSS.  </p>
        </div>
    );
  }
  
export default Projects