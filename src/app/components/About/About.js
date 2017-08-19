import React from 'react';
import './About.css';

import Bio from '../Bio/Bio';
import Skills from '../Skills/Skills';

const About = ({ skills, handleToggle }) => {
  return (
    <section id="about-section">
      <Bio handleToggle={ handleToggle } />
      <Skills skills={ skills } />
    </section>
  );
};

export default About;