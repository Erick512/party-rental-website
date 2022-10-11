import React from 'react'
import Product from '../Product'
import './index.scss'

const Rentals = () => {
  return (
    <div className='pageContainer' id='rentals'>
        <h2>Rentals</h2>
        <div className='product-zone'>
        <Product name={'Tents'} page='tentsPage' imgSrc={'images/tent.jpg'}/>
        <Product name={'Tables'} page='tablesPage' imgSrc={'/images/table.jpg'}/>
        <Product name={'Chairs'} page='chairsPage'imgSrc={'/images/chair.jpg'}/>
        <Product name={'Jumpers'} page='jumpersPage' imgSrc={'/images/bouncyHouse.jpg'}/>
        <Product name={'Piñatas'} page='piñatasPage' imgSrc={'/images/pinata.jpg'}/>
        <Product name={'Decorations'} page='deocrPage' imgSrc={'/images/deco.jpg'}/>
        </div>
    </div>
  )
}

export default Rentals