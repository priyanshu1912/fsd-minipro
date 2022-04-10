import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <div className='nav-logo'>BLUELEARN 2.0</div>
        <div className='nav-options'>
            <div className='nav-option'>Pricing</div>
            <div className='nav-option'>Solutions</div>
            <div className='nav-option'>Features</div>
        </div>

        <div className='nav-buttons'>
          <Link to='/register'>
            <button className='nav-register'>Register</button>
          </Link>
          <Link to='/login'>
            <button className='nav-login'>Log In</button>
          </Link>
        </div>
    </div>
  )
}

export default Nav