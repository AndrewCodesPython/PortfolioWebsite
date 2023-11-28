import React, { useEffect } from 'react';
import './services.css';

const Services = () => {

    
    useEffect(() => {
        const handleScroll = () => {
            const serviceBoxes = document.querySelectorAll('.service-box');
            const header = document.querySelector('.Services-Header');
    
            const animateOnScroll = (element) => {
                const elementTop = element.getBoundingClientRect().top;
                const triggerHeight = window.innerHeight / 1.1;
    
                if (elementTop < triggerHeight) {
                    element.classList.add('animate-slide-in');
                }
            };
    
            animateOnScroll(header);
            serviceBoxes.forEach(box => animateOnScroll(box));
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
    <div className='Services-Container' id='Services'>
        <div className='Services-Header'>
            <h1 className='gradient__text'>Services</h1>
        </div>
        <a href="https://www.shopboundlesscreations.com/" target="_blank" rel="noopener noreferrer" className='service-box-link'>
            <div className='service-box'>
                <p>Original Artwork/ Fine Art Prints</p>
            </div>
        </a>
        <a href="https://www.shopboundlesscreations.com/contact" target="_blank" rel="noopener noreferrer" className='service-box-link'>
            <div className='service-box'>
                <p>Custom Website</p>
            </div>
        </a>
        <a href="https://www.shopboundlesscreations.com/contact" target="_blank" rel="noopener noreferrer" className='service-box-link'>
            <div className='service-box'>
                <p>Custom Artwork</p>
            </div>
        </a>
        <a href="https://www.shopboundlesscreations.com/contact" target="_blank" rel="noopener noreferrer" className='service-box-link'>
            <div className='service-box'>
                <p>Brand Management</p>
            </div>
        </a>
        <a href="https://www.shopboundlesscreations.com/contact" target="_blank" rel="noopener noreferrer" className='service-box-link'>
            <div className='service-box'>
                <p>Consultation</p>
            </div>
        </a>
        <a href="https://www.shopboundlesscreations.com/contact" target="_blank" rel="noopener noreferrer" className='service-box-link'>
            <div className='service-box'>
                <p>Contact Now!</p>
            </div>
        </a>
    </div>
  );
};

export default Services;
