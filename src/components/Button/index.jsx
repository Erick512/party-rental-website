import React from 'react'
import './index.scss'

const Button = ({ text, backgroundColor, color, className }) => {
  return (
    <>
        <button className={className} style={{backgroundColor: backgroundColor, color: color}}>{text}</button>
    </>
  )
}

Button.defaultProps = {
    text: 'Button', 
    backgroundColor: 'white',
    color: 'black'
}

export default Button