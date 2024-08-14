import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-title'>
        <h1>Lets Design Together</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
      <div className='email-btn-container'>
        <div className='email-input'>
          <input placeholder='Enter your Email' className='email-container'></input>
        </div>
        <div className='btn-container'>
          <button className='contact-btn'>Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
