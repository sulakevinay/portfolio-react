import React, { useEffect, useRef } from 'react';
import { TweenLite } from 'gsap';
import './Home.css';
import avatar from './avatar.png';

function Home() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    
    const textElements = textRef.current.querySelectorAll('h1, h4');
    TweenLite.from(textElements, { opacity: 0, y: 10, duration: 1 });

    const imageElement = imageRef.current;
    imageElement.addEventListener('mouseover', () => {
      imageElement.classList.add('overlay');
    });
    imageElement.addEventListener('mouseout', () => {
      imageElement.classList.remove('overlay');
    });
  }, []);

  return (
    <div id='home' className="main2">
      <div className="container">
        <div className="text" ref={textRef}>
          <h1>
            Hi <span className="text2">There,</span> <br />I'm{' '}
            <span className="text2">Vinay Sulake.</span>
          </h1>
          <h4 id="prince">
            <span className="text2">Full Stack </span> Python Developer
          </h4>
        </div>
        <div className="pic" ref={imageRef}>
          <img src={avatar} alt="profile pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
