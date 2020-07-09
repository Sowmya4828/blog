import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
    return (

        <div className="navbarContainer">
            <div className="navbarContainerName">
                <a href="#">Tutorial</a>
            </div>

            <form className="navbarContainerNameForm">
                <input type="text" name="name" placeholder="Search" className="" />
            </form>

            <div className="navbarContainerNameMenu">
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )

}

export default Navbar;
