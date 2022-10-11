import React from 'react'
import './index.scss'

const About = () => {
  return (
    <div className='pageContainer' id='about'>
        <div className='text-zone'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id nisl sit amet massa euismod volutpat quis quis lorem.</p>
            <div className='imgDiv'>
              <img src="/images/famPic.jpg"  alt='family'/>
            </div>
        </div>
    </div>
  )
}

export default About