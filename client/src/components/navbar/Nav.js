import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/Amisocial-logo.png'

function Nav() {
  return (
    <div className='nav'>
        <div className='nav-logo'>
          <img src={logo} width="80px" />
          <div className='nav-logo-text'>AMISOCIAL</div>
        </div>
        {/* <div className='nav-options'>
            <div className='nav-option'>Pricing</div>
            <div className='nav-option'>Solutions</div>
            <div className='nav-option'>Features</div>
        </div> */}

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