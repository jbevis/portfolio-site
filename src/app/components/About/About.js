import React from 'react';
import './About.css';

import Bio from '../Bio/Bio';
import Skills from '../Skills/Skills';

const About = ({ skills }) => {
  return (
    <section id="about-section">
      <Bio />
      <Skills skills={ skills } />
    </section>
  );
};

export default About;