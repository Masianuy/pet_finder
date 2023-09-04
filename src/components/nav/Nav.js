import React from 'react';
import logo from '../../img/logo.svg';
import Hamburger from '../hamburger/Hamburger';
import Menu from '../menu/Menu';
import './nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-wrap'>
      <nav className='container nav'>
        <Link to='/pet_finder' className='nav_logo'>
          <img src={logo} alt='logo' width='348px' height='60px' />
        </Link>
        <Menu />
        <Hamburger />
      </nav>
    </div>
  );
};

export default Nav;
