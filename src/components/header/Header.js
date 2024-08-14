import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <h2 className='logo'><span>MY</span></h2>
        <h2 className='head-title'><span>M</span>umair</h2>
        </div>
      <div className='nav-link'>
        <nav>
          <li>Home</li>
          <li>About ME</li>
          <li>Service</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </nav>
      </div>
      <button className='download-btn'>Download</button>
    </div>
  )
}

export default Header
