import React from 'react'
import Button from '../Button'
import './index.scss'

const Contact = () => {
  return (
        <div className='pageContainer contact' id='contact'>
            
            <h2 className='contactHeading'>Contact Us</h2>

            <div className='contact-zone'>
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' placeholder='Name'/>
                    </div>
                    <div>
                        <label htmlFor="contactInfo">Contact Info</label>
                        <input type="text" name='contactInfo' placeholder='Number or Email'/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea  name="message" cols="30" rows="7" placeholder='Send us a message'></textarea>
                    </div>
                    <Button className={'submit'} text={'Submit'}/>
                </form>
            </div>

            <div className='map-zone'>
                <p> <a href="tel:3237096062">(323)-709-6062</a>  <br /> 2541 West Jefferson Boulevard Los Angeles, CA</p>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d855.8293398803612!2d-118.32383584501127!3d34.025736768100344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b83fd0c91263%3A0x7e756dad019d285b!2s2541%20W%20Jefferson%20Blvd%2C%20Los%20Angeles%2C%20CA%2090018!5e0!3m2!1sen!2sus!4v1665005061702!5m2!1sen!2sus"></iframe>
            </div>
        </div>
  )
}

export default Contact