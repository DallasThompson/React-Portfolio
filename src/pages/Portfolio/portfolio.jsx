
import React from 'react';
import shrednstyle from './shrednstyle.jpg'
import hogwarts from './hogwarts.png'
import weatherapp from './weatherapp.jpg'
import password from './password.jpg'

const projects = [
  {
    imageSrc: hogwarts,
    deployLink: 'https://nfillip.github.io/harrypotter-fanpage/',
  },
  {
    imageSrc: shrednstyle,
    deployLink: 'https://shrednstyle-a1ce73eecb82.herokuapp.com/',
  },
  {
    imageSrc: weatherapp,
    deployLink: 'https://dallasthompson.github.io/weatherApp/',
  },
  {
    imageSrc: password,
    deployLink: 'https://dallasthompson.github.io/passwordG/',
  },
]

const Portfolio = () => {
  return (
    <div className='portforlio-container'>
      <h1>Portfolio</h1>
      <div className="project-links" style={{ height: '400px', overflowY: 'scroll' }}>
        {projects.map((project, index) => (
          <a key={index} href={project.deployLink} target="_blank" rel="noopener noreferrer">
            <img src={project.imageSrc} alt={`Project ${index + 1}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;