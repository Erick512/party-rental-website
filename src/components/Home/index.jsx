import React from 'react'
import Button from '../Button'
import './index.scss'

const Home = () => {
  return (
    <div className='pageContainer' id='home'>
      <div className='text-zone'>
          <h1>Castillo Party Rentals</h1>
          <h3>Let us help you set up the <span>Party</span>. We have everything you might need from chairs to Tents.</h3>
          <Button className={'first'} text='Contact Us' backgroundColor={'white'}/>
          <Button text='Rentals' backgroundColor={'rgba(255, 255, 255, 0.6)'}/>
      </div>
    </div>
  )
}

export default Home