import React from 'react';
import './Footer.css';

const Footer = ({ handleScrollUp }) => {
  return (
    <footer id='footer'>
      <a className='footer-icons github'
         href='https://github.com/jbevis'
         target='_blank'
         title='GitHub' >
      </a>
      <a className='footer-icons linkedin'
           href='https://www.linkedin.com/in/jack-bevis-884073138/'
           target='_blank'
           title='Linkedin' >
      </a>
      <a className='footer-icons twitter'
           href='https://twitter.com/bevisjw'
           target='_blank'
           title='Twitter' >
      </a>
      <a className='footer-icons contact'
           href='mailto:jack.bevis@gmail.com'
           title='Contact' >
      </a>
      <button id='scroll-up'
              type='button'
              onClick={ () => handleScrollUp() } >
      </button>
      <h3 className='footer-tag'>{ '\u00A9' } Jack Bevis | 2017 </h3>
    </footer>
  );
};

export default Footer;