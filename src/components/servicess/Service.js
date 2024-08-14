import React from 'react'
import './Service.css'
import UI from '../../assets/UI.png'
import wb from '../../assets/web.png'
import ap from '../../assets/App.png'
import gd from '../../assets/graphic.png'

const Service = () => {
  return (
    <div className='service-container'>
      <div className='service-intro'>
        <h1>Services</h1>
        <p className='service-para'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
      <div className='service-provided'>
        <div className='prov'>
          <img src={UI} alt='ui-img'></img>
          <h2 className='service-title'>UI / UX</h2>
          <p className='prov-para'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className='prov'>
          <img src={wb} alt='ui-img'></img>
          <h2 className='service-title'>Web Design</h2>
          <p className='prov-para'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className='prov'>
          <img src={ap} alt='ui-img'></img>
          <h2 className='service-title'>App Design</h2>
          <p className='prov-para'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className='prov'>
          <img src={gd} alt='ui-img'></img>
          <h2 className='service-title'>Graphics</h2>
          <p className='prov-para'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
      </div>
      
    </div>
  )
}

export default Service
