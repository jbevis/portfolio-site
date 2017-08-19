import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ title, description, image, techUsed, handleToggle }) => {
  const listedTech = techUsed.map((tech, i) => {
    <h4 key={ i }>{ tech }</h4>
  });
  
  return (
    <section className='project-details'>
      <h2 className='project-detail-header'>{ title }</h2>
      <img className='project-detail-image'
           src={ image }
           alt={ `Image of ${title} project` } />
      <p className='project-detail-descpription'>{ description }</p>
      <div className='project-detail-tech'>
        <h3>Technologies Used</h3>
        { listedTech }
      </div>
      <button className='close-btn'
              onClick={ () => handleToggle() }>
        X
      </button>
    </section>
  );
};

export default ProjectDetails;