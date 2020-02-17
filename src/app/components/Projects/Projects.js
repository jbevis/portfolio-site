import React from 'react';
import './Projects.css';

const Projects = ({ handleToggle, projectList }) => {
  const allProjects = projectList.map((project, i) => {
    const { title, image, icons } = project;
    
    return (
      <article className='individual-project' key={i}>
        <img className='project-image' src={ require(`${image}`) } alt={ `Screen shot of ${title} project.`} />
        <section className='article-layer'>
          <h3>{ title }</h3>
          <div className='project-links'>
          { Object.keys(icons).map((key, i) => {
            if (project[key]) {
              return (
                <a href={ project[key] } target='_blank' rel='noreferrer noopener' title={ project[key] }>
                  <img className='project-icons' src={require(`${icons[key]}`)} alt='icon image' />
                </a>
              )
            }
          })}
          </div>
          <button className='project-btn'
                  onClick={ () => handleToggle(title) } >
            More Info
          </button>
        </section>
      </article>
    );
  });

  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className='projects-container'>
        { allProjects }
      </div>
    </section>
  );
};

export default Projects;