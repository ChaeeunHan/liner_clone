import React from 'react';
import './Menu.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu-container'>
      <NavLink className='menu-inactive' activeClassName='menu-active' to ={`/home`}><div className='menu-content'>For You</div></NavLink>
      <NavLink className='menu-inactive' activeClassName='menu-active' to ={`/highlights`}><div className='menu-content'>My Highlights</div></NavLink>
      <NavLink className='menu-inactive' activeClassName='menu-active' to ={`/more`}><div className='menu-content'>More</div></NavLink>
    </div>
  );
};

export default Menu;