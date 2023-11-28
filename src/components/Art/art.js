import React, { useEffect } from 'react';
import './art.css';
import lux from '../../assets/lux.png'; 
import coalesce from '../../assets/coalesce.png'; 
import bloom from '../../assets/bloom.png'; 

const Art = () => {

  useEffect(() => {
    const handleScroll = () => {
      const artImages = document.querySelectorAll('.art-img');

      artImages.forEach((img) => {
        const imgTop = img.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight / 1.2;

        if (imgTop < triggerHeight) {
          img.classList.add('animate-slide-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the animations on initial load as well
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className='art'>
        <div className='art-title'>
            
          <h1 className='gradient__text'>Fine Art</h1>
        </div>
        <a href="https://www.shopboundlesscreations.com/" target="_blank" rel="noopener noreferrer">
            <img src={coalesce} alt="Coalesce Artwork" className="art-img" />
        </a>
        <p className='gradient__text'> "Amazing heart and vision. Love his work and character! We have his art in our retreat center and everyone loves it!" - Jon Jenkins </p>
        <a href="https://www.shopboundlesscreations.com/" target="_blank" rel="noopener noreferrer">
            <img src={lux} alt="Lux Artwork" className="art-img" />
        </a>
        <p className='gradient__text'> "Professional quality, cool designs, and great attitude when dealing with customers." -Michael R </p>
        <a href="https://www.shopboundlesscreations.com/" target="_blank" rel="noopener noreferrer">
            <img src={bloom} alt="Bloom Artwork" className="art-img" />
        </a>
        <p className='gradient__text'> "Amazing quality and service. I will buy from him again!" -Jessica Thometz </p>
    </div>
  )
}

export default Art;
