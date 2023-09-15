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
          </div>
          <div className="projects-img">
            <img src={yes} alt="img" />
          </div>
          <div className="projects-img">
            <img src={paint} alt="img" />
          </div>
        </div>
    );
  }
  
export default Projects