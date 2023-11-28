import React, { useEffect } from 'react';
import './projects.css';
import muuse from '../../assets/muuse.png';
import yes from '../../assets/yes.png';
import andrewlogo from '../../assets/andrewlogo.png';

function Projects() {

    useEffect(() => {
        const handleScroll = () => {
            const projectElements = document.querySelectorAll('.projects-img');

            projectElements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const triggerHeight = window.innerHeight / 1.3;

                if (elementTop < triggerHeight) {
                    element.classList.add('animate-slide-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        // Cleanup the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="projects" id="Projects" >
            <div className='projects-title'>
                <h1 className='gradient__text'> Developer Projects </h1>
            </div>
            <div className="projects-img">
                <a href="https://www.caseyspupcare.com" target="_blank" rel="noopener noreferrer">
                    <img src={yes} alt="Casey's Pup Care Website" />
                </a>
                <p> Developed a streamlined scheduling platform for Casey's Pup Care, a notable dog boarding service. Engineered using React.js, Express, and Node.js for optimal functionality, with clean CSS aesthetics. Prioritized professionalism and user-centric design. </p>
            </div>
            <div className="projects-img">
                <img src={muuse} alt="The Muse Chatbot" />
                <p> Introducing 'The Muse' - a state-of-the-art chatbot empowered by OpenAI's cutting-edge technology. Fine tuned to inspire and uplift creators, as well as professional artists. Crafted using React.js, Express, and Node.js, seamlessly styled with modern CSS, and integrated via OpenAI's dynamic API. Development ongoing. </p>
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
