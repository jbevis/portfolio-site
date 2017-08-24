import React from 'react';
import './Bio.css';

const Bio = ({ handleToggle }) => {
  return (
    <section id='bio'>
      <h2>About Me</h2>
      <div className='text-area'>
        <p>Hello, my name is Jack Bevis and I am a software developer and cartographer currently based in Denver, Colorado. I specialize in leveraging front end languages and libraries in order to create clean, optimal programs to maximize client end interfaces and experiences. I am committed to agile workflow practices, test-driven development, and cross personnel support in order to achieve goals. As a front-end developer I love using JavaScript, CSS, and HTML to build clean, beautiful, and accessible web applications, but also understand the significance and power of a well constructed and organized database.</p>
        <p>After finishing my education in anthropolgoy and GIS, I have worked in different idustries ranging from restaurants to digital marketing, all while honing my skills in customer service and management. I chose to beome a softare developer because I am drawn to its collaboratie and creative nature. Software development allows one to be constantly engaged and consistenly pushing one's abilities and skills. Ultimately though I am drawn to software development because the number of challenges are only outnumbered by the unique and dynamic ways to solve them.</p>
        <p>At work, I am a driven and dedicated team member. I constantly seek personal and professional growth through a myriad of avenues. I love to solve problems either on my own or through collaboration and always strive to deliver exceptional deliverables. When I am not working, I enjoy climbing, snowboarding, and really all forms of outdoor activities. I'm a bit of a map nerd and love looking through antique charts and maps. Otherwise time spent with family and friends over a good meal is hard to beat.</p>
        <p>Please find out more about me via my
          <a href='https://www.linkedin.com/in/jack-bevis-884073138/' 
             target='_blank'>&nbsp;Linkedin&nbsp;
          </a> profile, download my
          <a href='../../styles/images/jack_bevis_resume.pdf'
             download='jack_bevis_resume.pdf'
             className='resume-display'> resume
          </a>, or contact me directly
          <a href='mailto:jack.bevis@gmail.com'>&nbsp;here&nbsp;</a>.
        </p>
      </div>
    </section>
  );
};

export default Bio;