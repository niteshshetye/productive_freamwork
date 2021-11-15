import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar task6_navbar'>
            <ul className='task6_navbar_ul'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/dashbord'>Dashbord</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar
