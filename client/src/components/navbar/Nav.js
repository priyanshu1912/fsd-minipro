import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <div className='nav-logo'>FSD-project</div>
        <div className='nav-options'>
            <div className='nav-option'>Pricing</div>
            <div className='nav-option'>Solutions</div>
            <div className='nav-option'>Features</div>
        </div>

        <div className='nav-buttons'>
          <Link className='nav-register' to='/register'>Register</Link>
          <Link className='nav-login' to='/login'>Log In</Link>
        </div>
    </div>
  )
}

export default Nav