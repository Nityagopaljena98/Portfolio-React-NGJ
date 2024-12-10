import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>
            NG<span>J.</span>
          </Link>
        </div>
        <ul className='nav-item'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Me</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio'>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>

        <div className='nav-connect'>Connect With Me</div>
      </div>
    </>
  );
};

export default Navbar;
