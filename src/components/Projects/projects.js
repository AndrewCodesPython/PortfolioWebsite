import React from 'react'
import './projects.css'
import muuse from '../../assets/muuse.png';
import yes from '../../assets/yes.png';
import paint from '../../assets/paint.png';
import andrewlogo from '../../assets/andrewlogo.png';

function Projects() {
    return (
        <div className="projects" id="Projects">
          <div className="projects-img">
            <img src={muuse} alt="The Muse Chatbot" />
            <p> Introducing 'The Muse' - a state-of-the-art chatbot empowered by OpenAI's cutting-edge technology. Crafted using React.js and Node.js, seamlessly styled with modern CSS, and integrated via OpenAI's dynamic API. Development ongoing. </p>
          </div>
          <div className="projects-img">
            <img src={yes} alt="Casey's Pup Care Website" />
            <p> Developed a streamlined scheduling platform for Casey's Pup Care, a notable dog boarding service. Engineered using React.js and Node.js for optimal functionality, with clean CSS aesthetics. Prioritized professionalism and user-centric design. </p>
          </div>
          <div className="projects-img">
            <img src={paint} alt="Paint Application" />
            <p> Designed a Paint Application using Python and Pygame, showcasing efficient coding and user-friendly interface. </p>
          </div>
          <div className="andrew-logo-container">
            <a href="#">
              <img src={andrewlogo} alt='Andrew Logo' className='andrew-logo'/>
            </a>
          </div>

          <p> This platform was developed by Andrew Escudero, utilizing the advanced capabilities of React.js, the versatile backend of Node.js, and tastefully crafted with modern CSS designs. Hosted on Hostinger. </p>
        </div>
    );
}

export default Projects;
