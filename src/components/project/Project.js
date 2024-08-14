import React from 'react'
import './Project.css'

//importing images
import airCal_one from '../../assets/airCalling_one.png'
import airCaltwo from '../../assets/airCalling_two.png'
import buis_one from '../../assets/buisness_one.png'
import buis_two from '../../assets/buisness_two.png'
import eco_one from '../../assets/ecoWeb_one.png'
import eco_two from '../../assets/ecoWeb_two.png'

const Project = () => {
  return (
    <div className='project-container'>
      <div className='proj-title'>
        <h1>My Projects</h1>
        <p className='proj-para'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
      </div>
      <div className='proj-btns'>
        <button className='all-btn'>All</button>
        <button className='ui-btn'>UI/UX</button>
        <button className='web-design-btn'>Web Design</button>
        <button className='App-design-btn'>App Design</button>
        <button className='Graphic-btn'>Graphic Design</button>
      </div>
      <div className='proj-image'>
        <div className='airCal'>
          <img src={airCal_one} alt='airCal_one'className='base-img'/>
          <img src={airCaltwo} alt='airCal_two' className='overlay-img'/>  
          <h4>Web Design</h4>
          <h2>AirCalling Landing Page Design</h2>
        </div>  
        <div className='buisness'>
          <img src={buis_one} alt='buisness_one' className='base-img'/>
          <img src={buis_two} alt='buisness_two' className='overlay-img'/>
          <h4>Web Design</h4>
          <h2>Buisness Landing Page Design</h2>
        </div>
        <div className='ecoWeb'>
          <img src={eco_one} alt='ecoWeb_one' className='base-img'/>
          <img src={eco_two} alt='ecoWeb_two' className='overlay-img'/>
          <h4>Web Design</h4>
          <h2>Ecom Page Design</h2>
        </div>
        

      </div>
      
    </div>
  )
}

export default Project
