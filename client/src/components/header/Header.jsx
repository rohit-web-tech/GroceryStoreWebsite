import React from 'react'
import './style.scss'

const Header = (props) => {
  return (
    <div className="header">
        <h1>{props.title}</h1>
    </div>
  )
}

export default Header
