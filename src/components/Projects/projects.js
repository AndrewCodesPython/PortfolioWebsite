import React from 'react'
import './projects.css'
import muuse from '../../assets/muuse.png';
import yes from '../../assets/yes.png';
import paint from '../../assets/paint.png';

function Projects() {
    return (
        <div className="projects" id="Projects">
          <div className="projects-img">
            <img src={muuse} alt="The Muse Chatbot" />
            <p> "The Muse" is an OpenAI powered, custom chatbot designed to inspire and educate. Created with React.js, Node.js, CSS, and an API key from OpenAI. In progress. </p>
          </div>
          <div className="projects-img">
            <img src={yes} alt="Casey's Pup Care Website" />
            <p>Website/ Scheduling Application created for Casey's Pup Care, a professional dog boarding business. Created using React.js, Node.js, and CSS. </p>
          </div>
          <div className="projects-img">
            <img src={paint} alt="Paint Application" />
            <p>Paint Application, created using Python and Pygame. </p>
          </div>
          <p>This platform was meticulously developed by Andrew Escudero, utilizing the advanced capabilities of React.js, the robust backend of Node.js, and modern CSS styling. Hosted on Hostinger.  </p>
        </div>
    );
}

export default Projects;
