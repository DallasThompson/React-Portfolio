import React from 'react';
import shrednstyle from './shrednstyle.jpg'
import hogwarts from './hogwarts.png'
import weatherapp from './weatherapp.jpg'
import password from './password.jpg'
import hackThePlanet from './hacktheplanet.jpg'
import quiz from './quiz.jpg'
import firstPortfolio from './firstPortfolio.jpg'
import future from './future.png'


const previousProjects = [

  {
    imageSrc: weatherapp,
    deployLink: 'https://dallasthompson.github.io/weatherApp/',
    description: 'This small project was done early on, it was my first time using a third-party API.',
    title: "Weather API application"
  },
  {
    imageSrc: password,
    deployLink: 'https://dallasthompson.github.io/passwordG/',
    description: 'One of my first times tackling JS I was tasked to put together this Password Generator.',
    title: "Password Generator"
  },
  {
    imageSrc: quiz,
    deployLink: 'https://dallasthompson.github.io/codingQuiz/',
    description: 'This app runs in the browser features dynamically updated HTML and CSS powered by JavaScript. It has a clean, polished, and responsive user interface.',
    title: "Quiz for Coders"
  },
  {
    imageSrc: firstPortfolio,
    deployLink: 'https://dallasthompson.github.io/Portfolio/',
    description: 'This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript. It has a clean, polished, and responsive user interface.',
    title: "First Portfolio"
  },
]


const ongoingProjects = [
  {
    imageSrc: hogwarts,
    deployLink: 'https://nfillip.github.io/harrypotter-fanpage/',
    description: "This is the first larger project that I worked on. The technologies used here included HTML, CSS, JavaScript, Bootstrap, and jQuery. If you don't do anything else on the portfolio page, you must at least check out this app. It's very quirky.",
    title: "Harry Potter Fanpage"
  },
  {
    imageSrc: shrednstyle,
    deployLink: 'https://shrednstyle-a1ce73eecb82.herokuapp.com/',
    description: "ShredNStyle was a more challenging to put together app. But we nailed it. The technologies used were JavaScript, Handlebars, Bootstrap with custom CSS, Node, SQLnodemailer, Sequalize, Bootstrap icons, Axios, Bcrypt.",
    title: "ShredNStyle Ecommerce site"
  },
  {
    imageSrc: hackThePlanet,
    deployLink: 'https://devshacktheplanet-44c29a23ae44.herokuapp.com/',
    description: "I had the most fun working on this web application. My confidence finally started to settle in on this one. The technologies used were VSCode, github, graphQL, Node.js, Express.js, MongoDB, heroku, jwt, react, and stripe.",
    title: "Hack The Planet Ecommerce site."
  },
  {
    imageSrc: future,
    deployLink: '',
    description: "I am thrilled about delving deeper into React.js in the future and honing my skills in design. React.js has opened up exciting possibilities for creating dynamic and efficient web applications, and I am eager to explore its advanced features and best practices. The prospect of mastering React's component-based architecture and incorporating state-of-the-art design principles is both challenging and exhilarating.",
    title: "Working with React"
  },
]


const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <div className="project-cards"> 
      <h3 className='section-heading'>Previous Work</h3>
        {previousProjects.map((previousProjects, index) => (
          <div key={index} className="project-card">
            <a href={previousProjects.deployLink} target="_blank" rel="noopener noreferrer">
              <img src={previousProjects.imageSrc} alt={`Project ${index + 1}`} />
            </a>
            <h4 className='project-heading'>{previousProjects.title}</h4>
            <h6 className='project-card-para'><strong>{previousProjects.description}</strong></h6>
          </div>
        ))}
      </div>  
      <div className="project-cards">
      <h3 className='section-heading'>Ongoing Work</h3>
        
        {ongoingProjects.map((ongoingProjects, index) => (
          <div key={index} className="project-card">
            <a href={ongoingProjects.deployLink} target="_blank" rel="noopener noreferrer">
              <img src={ongoingProjects.imageSrc} alt={`Project ${index + 1}`} />
            </a>
            <h4 className='project-heading'>{ongoingProjects.title}</h4>
            <h6 className='project-card-para'><strong>{ongoingProjects.description}</strong></h6>
          </div>
        ))}
      </div>
    </div>
    
  );
};


export default Portfolio;