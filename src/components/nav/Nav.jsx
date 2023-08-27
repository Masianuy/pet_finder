import React from 'react';
import logo from '../../img/logo.svg';
import Hamburger from '../hamburger/Hamburger';
import Menu from '../menu/Menu';
import './nav.scss';

const Nav = () => {
  return (
    <nav className='nav container'>
      <div className='nav_logo'>
        <img src={logo} alt='logo' weidth='348px' height='60px' />
      </div>
      <Menu />
      <Hamburger />
    </nav>
  );
};

export default Nav;
