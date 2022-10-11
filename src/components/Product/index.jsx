import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Product = ({ name, page, imgSrc }) => {
  return (
    <div className='card'>
        <img src={imgSrc} className='card-img-top' alt="img" />
        <Link to={page}>
          <div className='card-body'>
              <h4 className="card-title">{name}</h4>
          </div>
        </Link>
    </div>
  )
}

Product.defaultProps = {
    name: 'Product'
}

export default Product