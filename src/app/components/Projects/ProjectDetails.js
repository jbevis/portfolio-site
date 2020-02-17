import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ title, description, image, techUsed, handleToggle }) => {
  const listedTech = techUsed.map((tech, i) => <li key={ i }>{ tech }</li>);

  return (
    <section className='project-details'>
      <h2 className='project-detail-header'>{ title }</h2>
      <img className='project-detail-image'
           src={ require(`${image}`) }
           alt={ `Image of ${title} project` } />
      { description.split('\n').map(line => {
        return(
        <p className='project-detail-descpription'>{ line }</p>
        );
      })}
      <div className='project-detail-tech'>
        <h3>Technologies Used</h3>
        <ul className='tech-used'>{ listedTech }</ul>
      </div>
      <button className='close-btn'
              onClick={ () => handleToggle() }>
        X
      </button>
    </section>
  );
};

export default ProjectDetails;