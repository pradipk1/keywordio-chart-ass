import { Link } from 'react-router-dom';
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbarCont'>
        <div className='navAppLogo'>APP LOGO</div>
        <div className='navLinkCont'>
            <Link to='/'>DASHBOARD</Link>
            <Link to='/create-ads'>CREATE ADS</Link>
        </div>
    </div>
  )
}

export default Navbar;