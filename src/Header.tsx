import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div id='header'>
      <div className = 'header-container'>
        <div className='liner-logo-container'>
          <img className='liner-logo' src='https://getliner.com/src/images/liner-logo.svg'/>
        </div>
        <div className='search-box-container'>
          <input className='search-box' placeholder='Search on LINER'/>
          <img className='search-img' src='https://getliner.com/src/images/search.svg'/>
        </div>
        <div className='right-buttons'>
          <button className='upgrade-button'>Upgrade</button>
          <img className='notification-button' src='https://getliner.com/src/images/noti.svg'/>
        </div>
      </div>
    </div>
  );
};

export default Header;