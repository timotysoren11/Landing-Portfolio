import React from 'react';
import './About.css';
import aboutImg from '../../assets/about.png';

const About = () => {
  return (
    <div className='intro-container'>
      <div className='img-container'>
        <div className='rect-img'></div>
        <div className='intro-img'>
          <img src={aboutImg} alt='intro-image' />
        </div>
      </div>
      <div className='about-text'>
        <div className='name-prof'>
          <h1>About Me</h1>
          <p className='para-2'>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
          </p>
        </div>

        <div className="skills-container">
          <div className="skill">
            <span className="skill-name">UX</span>
            <div className="progress-bar">
              <div className="progress" style={{width: "80%"}}></div>
              <div className="marker" style={{left: "80%"}}></div>
            </div>
          </div>

          <div className="skill">
            <span className="skill-name">Website Design</span>
            <div className="progress-bar">
              <div className="progress" style={{width: "70%"}}></div>
              <div className="marker" style={{left: "70%"}}></div>
            </div>
          </div>

          <div className="skill">
            <span className="skill-name">App Design</span>
            <div className="progress-bar">
              <div className="progress" style={{width: "90%"}}></div>
              <div className="marker" style={{left: "90%"}}></div>
            </div>
          </div>

          <div className="skill">
            <span className="skill-name">Graphic Design</span>
            <div className="progress-bar">
              <div className="progress" style={{width: "60%"}}></div>
              <div className="marker" style={{left: "60%"}}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
