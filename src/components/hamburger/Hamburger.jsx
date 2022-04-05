import React, { useState } from 'react';
import Menu from '../menu/Menu';
import menuList from '../../Menu-list';
import './hamburger.scss';

const Hamburger = () => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="hamburger" onClick={ToggleClass}>
      <p>Menu</p>
      <span className={isActive ? "open" : "close"}></span>
      <ul className={isActive ? "openMenu" : "hideMenu"}>
        {menuList.map((item) => {
          return ( 
          <li key={item.id} className="hamburger_item">
            <a href={item.url}>{item.title}</a>
          </li> )
        })}
      </ul>
    </div>
  );
}

export default Hamburger;