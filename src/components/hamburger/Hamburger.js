import React, { useState } from 'react';
import data from '../../Date.json';
import './hamburger.scss';
import { NavLink } from 'react-router-dom';

const Hamburger = () => {
  const {
    navigation: { find_pets, about, contact },
  } = data;
  const [isActive, setActive] = useState('false');

  const ToggleClass = () => {
    setActive(!isActive);
    if (isActive) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  };

  return (
    <div className='hamburger' onClick={ToggleClass}>
      <p>Menu</p>
      <span className={isActive ? 'open' : 'close'}></span>
      <ul className={isActive ? 'hideMenu' : 'openMenu'}>
        <li className='nav_item'>
          <NavLink to='/findpet' className='nav_item-link'>
            {find_pets}
          </NavLink>
        </li>
        <li className='nav_item'>
          <NavLink to='/about' className='nav_item-link'>
            {about}
          </NavLink>
        </li>
        <li className='nav_item'>
          <NavLink to='/contacts' className='nav_item-link'>
            {contact}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
