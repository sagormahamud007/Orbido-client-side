import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asstes/NavbarLogo/logo.png'

const Navbar = () => {
    const menubar=<>
    <Link className='ms-5' to={'/'}><li>Home</li></Link>
      <Link className='ms-5' to={'/AboutUs'}><li>About Us</li></Link>
      <Link className='ms-5' to={'/features'}><li>Features</li></Link>
      <Link className='ms-5' to={'/solution'}><li>Solution</li></Link>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <Link to={'/'}><li><a>Home</a></li></Link>
        <Link to={'/AboutUs'}><li><a>About Us</a></li></Link>
        <Link to={'/features'}><li><a>Features</a></li></Link>
        <Link to={'/solution'}><li><a>Solution</a></li></Link>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src={logo}></img> <h2 className='font-Poppins font-semibold font-size: 1.125rem'>OR<span className='text-yellow-400'>BIDO</span> </h2></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menubar}
    </ul>
  </div>
</div>
    );
};

export default Navbar;