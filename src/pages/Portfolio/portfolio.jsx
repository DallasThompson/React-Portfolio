import React from 'react';
import shrednstyle from './shrednstyle.jpg'
import hogwarts from './hogwarts.png'
import weatherapp from './weatherapp.jpg'
import password from './password.jpg'

const previousProjects = [

  {
    imageSrc: weatherapp,
    deployLink: 'https://dallasthompson.github.io/weatherApp/',
    description: 'Hogwarts Fanpage! This was the first larger that I worked on.'
  },
  {
    imageSrc: password,
    deployLink: 'https://dallasthompson.github.io/passwordG/',
    description: 'Hogwarts Fanpage! This was the first larger that I worked on.'
  },
]
const projects = [
  {
    imageSrc: hogwarts,
    deployLink: 'https://nfillip.github.io/harrypotter-fanpage/',
    description: 'Hogwarts Fanpage! This was the first larger that I worked on.'
  },
  {
    imageSrc: shrednstyle,
    deployLink: 'https://shrednstyle-a1ce73eecb82.herokuapp.com/',
    description: 'Hogwarts Fanpage! This was the first larger that I worked on.'
  },

]

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <div className="project-cards"> 
      <h1>Previous Works</h1>
        {previousProjects.map((previousProjects, index) => (
          <div key={index} className="project-card">
            <a href={previousProjects.deployLink} target="_blank" rel="noopener noreferrer">
              <img src={previousProjects.imageSrc} alt={`Project ${index + 1}`} />
            </a>
            <p>{previousProjects.description}</p>
          </div>
        ))}
      </div>  
      <div className="project-cards">
      <h1>Ongoing Work</h1>
        {projects.map((projects, index) => (
          <div key={index} className="project-card">
            <a href={projects.deployLink} target="_blank" rel="noopener noreferrer">
              <img src={projects.imageSrc} alt={`Project ${index + 1}`} />
            </a>
            <p>{projects.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Portfolio;