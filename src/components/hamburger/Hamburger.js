import React, { useState } from 'react';
import data from '../../Date.json';
import './hamburger.scss';

const Hamburger = () => {
  const { navigation: {find_pets, about, contact} } = data;
  const [isActive, setActive] = useState('false');

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className='hamburger' onClick={ToggleClass}>
      <p>Menu</p>
      <span className={isActive ? 'open' : 'close'}></span>
      <ul className={isActive ? 'hideMenu' : 'openMenu'}>
        <li className='nav_item'>
          <a href='https://' className='nav_item-link'>
            {find_pets}
          </a>
        </li>
        <li className='nav_item'>
          <a href='https://' className='nav_item-link'>
            {about}
          </a>
        </li>
        <li className='nav_item'>
          <a href='https://' className='nav_item-link'>
            {contact}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
