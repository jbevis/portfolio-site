import React from 'react';
import './Header.css';

const Header = ({ handleScrollDown }) => {
  return (
    <header id='header'>
      <div id='bio-title'>
        <h1 id='name'>Jack Bevis</h1>
        <h2 id='pro-title'>Software Developer <span>|</span> Cartographer</h2>
      </div>
      <button className='scroll-btn'
              type='button'
              onClick={ () => handleScrollDown } >
      </button>
    </header>
  );
};

export default Header;