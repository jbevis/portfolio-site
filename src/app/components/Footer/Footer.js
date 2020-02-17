import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = ({ handleScrollUp }) => {
  return (
    <footer id='footer'>
      <a className='footer-icons github'
         href='https://github.com/jbevis'
         target='_blank' rel='noopener noreferrer'
         title='GitHub' >
      </a>
      <a className='footer-icons linkedin'
           href='https://www.linkedin.com/in/jack-bevis-884073138/'
           target='_blank' rel='noopener noreferrer'
           title='Linkedin' >
      </a>
      <a className='footer-icons contact'
           href='mailto:jack.bevis@gmail.com'
           title='Contact' >
      </a>
      <FontAwesomeIcon icon={faArrowAltCircleUp}
                       type='button'
                       id='scroll-up'
                       onClick={() => handleScrollUp()} />
      <h3 className='footer-tag'>{ '\u00A9' } Jack Bevis | 2020 </h3>
    </footer>
  );
};

export default Footer;