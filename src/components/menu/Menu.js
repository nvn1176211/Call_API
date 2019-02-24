import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    var menus = [
      {
        name: 'Home',
        to: '/',
        exact: true
      },
      {
        name: 'Product Management',
        to: '/product-list',
        exact: false
      }
    ];
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        { this.showContentMenu(menus) }
      </nav>
    );
  }

  showContentMenu = (menus) => {
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index) =>{
        return <NavLink
          key={index}
          to={menu.to}
          exact = {menu.exact}
          className="navlink"
          activeClassName="active1"
          >{ menu.name }</NavLink>
      });
    }
    return result;
  }

}

export default Menu;
