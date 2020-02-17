import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = ({ handleScrollDown }) => {
  return (
    <header id='header'>
      <div id='bio-title'>
        <h1 id='name'>JACK BEVIS</h1>
        <h2 id='pro-title'>software developer</h2>
      </div>
      <FontAwesomeIcon icon={faArrowAltCircleDown} 
                       type='button'
                       className='scroll-btn'
                       onClick={ ()=> handleScrollDown() }/>
    </header>
  );
};

export default Header;