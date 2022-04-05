import React, { Component } from 'react';
import menuList from '../../Menu-list';
import './menu.scss';

class Menu extends Component {
  render () {
    return (
      <ul id="nav_list" className="nav_list">
        {menuList.map((item) => {
          return (
            <li className="nav_item">
              <a key={item.id} href={item.url} className="nav_item-link">{item.title}</a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Menu;