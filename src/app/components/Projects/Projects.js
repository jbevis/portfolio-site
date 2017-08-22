import React from 'react';
import './Projects.css';

const Projects = ({ handleToggle, projectList }) => {
  const allProjects = projectList.map((project, i) => {
    const { title, image, gitHubRepo, siteURL, icons } = project;

    return (
      <article className='individual-project' key={i}>
        <img className='project-image' src={ image } alt={ `Screen shot of ${title} project.`} />
        <section className='article-layer'>
          <h3>{ title }</h3>
          <a href={ gitHubRepo } target='_blank' title='GitHub Repo'>
            <img className='project-icons' src={ icons.gitHub } alt='GitHub Logo' />
          </a>
          <button className='project-btn'
                  onClick={ () => handleToggle(title) } >
            More Info
          </button>
          <a href={ siteURL } target='_blank' alt='Website'>
            <img className='project-icons' src={ icons.site } alt='Live site icon' />
          </a>
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