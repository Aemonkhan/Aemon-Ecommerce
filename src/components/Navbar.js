import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Cart.svg'
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='leftside'>
                <img src={logo} alt=''></img>
            </div>
            <div className='rightside'>
                <Link to='/signup' className='navlinks'>SIGN UP </Link>
                <Link to='/login' className='navlinks'> LOGIN </Link>
            </div>
        </div>
    )
}
