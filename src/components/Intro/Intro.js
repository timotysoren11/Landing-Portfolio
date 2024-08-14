import React from 'react'
import './Intro.css'
import introImg from '../../assets/intro_img.png'

//Social Links
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='name-prof'>
        <h4>Hi I am</h4>
        <h3>Muhammad Umair</h3>
        <h1>UI & UX</h1>
        <h1 className='designer-text'>Designer</h1>
        <p className='para'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <button className='hire-me'>Hire Me</button>
      </div>
      <div className='img-container'>
        <div className='rect-img'></div>
        <div className='intro-img'><img src={introImg} alt='intro-image'/>
        </div>
        <div className='social-link'>
        <FaFacebook style={{ fontSize:"20px"}} />
        <FaTwitter style={{ fontSize:"20px"}} />
        <FaInstagram style={{ fontSize:"20px"}} />
        <FaLinkedin style={{ fontSize:"20px"}} />
        </div>
      </div>
    </div>
  )
}

export default Intro
