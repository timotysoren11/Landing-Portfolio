import React from 'react'
import './Footer.css'

//social-links
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <div className='logo'>MY</div>
        <h1>Mumair</h1>
      </div>
      <div className='link'>
        <nav>
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </nav>
      </div>
      <div className='social'>
        <FaFacebook style={{ fontSize:"20px"}}/>
        <FaTwitter style={{ fontSize:"20px"}}/>
        <FaInstagram style={{ fontSize:"20px"}}/>
        <FaLinkedin style={{ fontSize:"20px"}}/>
      </div>
      <div className='footer-text'>
        <h2>@ 2023 <span>Mumair</span> All Rights Reserved, Inc</h2>
      </div>
    </div>
  )
}

export default Footer
