import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  const allSkills = skills.map((skill, i) => {
    const { title, skills, image, imageAlt } = skill;
    const skillLists = skills.map((eachSkill, i) => {
      <span key={i}>{ eachSkill }</span>
    });

    return (
      <article className='skill-block' key={i}>
        <img className='skill-image' src={ image } alt={ imageAlt } />
        <div className='skills-list'>
          <h4>{ title }</h4>
          { skillLists }
        </div>
      </article>
    );
  });

  return (
    <section>
      <div className='skills-wrapper'>
        <h2>What I Know</h2>
        { allSkills }
      </div>
    </section>
  );
};

export default Skills;