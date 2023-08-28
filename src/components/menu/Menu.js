import React from 'react';
import data from '../../Date.json';
import './menu.scss';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const { navigation: {find_pets, about, contact} } = data;
  return (
    <ul id='nav_list' className='nav_list'>
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
  );
};

export default Menu;
