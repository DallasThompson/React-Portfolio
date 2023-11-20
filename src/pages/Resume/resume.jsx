import React from 'react';
import resume from './UpdatedResume.pdf'

function Resume() {
  return (
    <div className='resume-container'>
      <a href={resume}  className="btn btn-primary btn-lg" download>
        Download My Resume</a>
      
      <div className='resume-content'>
      <h2 style={{textDecoration: 'underline'}}>Contact Info</h2>
      <p>
        Dallas Thompson<br />
        Commerce City, CO 80022<br />
        dallasthompson94@gmail.com<br />
        +1 618 623 6112
      </p>
      <h2 style={{textDecoration: 'underline'}}>Work Experience</h2>
        <h4>Denver Universities Full Stack Web Development Program</h4><p>
        Denver, CO
        August 2023 to November 2023</p>
<p>
  <h6><strong>Skills learned while I was a student In Denver Universities Full Stack Web Development course.</strong></h6>
Created full-stack single-page web applications using RESTful API routes and AJAX methods, and describe how front-end applications communicate with back-end applications and databases.
Implemented structured and unstructured databases to convert static websites into dynamic websites that persist data.
Built he communication skills and learned foundational computer-science knowledge.
Applied the accepted and standard basics of social coding—including source control, issue tracking, and functional feedback—as part of a development community, while building an application.
Demonstrated strong teamwork and project management skills as a collaborator and independent contributor during the development cycle of complex projects.
<h6><strong>Tools that I worked with in DU's course.</strong></h6>
<li>HTML/CSS/GIT</li>
<li>JavaScript</li>
<li>Bootstrap</li>
<li>jQuery</li>
<li>JSON</li>
<li>Agile development</li>
<li>Node</li>
<li>OOP</li>
<li>Express</li>
<li>MySQL</li>
<li>Sequelize</li>
<li>React</li>
<li>NoSQL</li>
<li>MERN STACK</li>
</p>
      
<p>
        <h4><strong>Permit Manager</strong></h4>
        Plummer and Associates - Denver, CO<br />
        April 2023 to July 2023<br />
        I secured a position with Plummer and Associates following a mass layoff from Sunrun Inc. In this role, I was tasked with tracking and processing commercial permits for underground boring in Denver, CO. Additionally, I was responsible for maintaining relationships with county officials throughout Colorado. Despite settling into the position, I decided to leave in order to pursue further education and embark on a career in web development.
      </p>
      <p>
        <h4><strong>Permit Coordinator</strong></h4>
        Sunrun - Arvada, CO<br />
        January 2022 to March 2023<br />
        My daily tasks included record keeping, county building relations, and the acquisition of solar permits in multiple counties, so that our customer could quickly get solar installed on their roofs.
      </p>
      <p>
        <h4><strong>Installer</strong></h4>
        SunRun Installation Services - Arvada, CO<br />
        October 2021 to January 2022<br />
        Worked on the install side with Sunrun. Daily tasks included the start and completion of installing roof-mounted solar systems.
      </p>
      <p>
        <h4><strong>Field Service Technician</strong></h4>
        Kohnen Concrete Products, Inc. - Germantown, IL<br />
        July 2017 to October 2021<br />
        My role was to provide good customer service and to maintain the aeration systems on the customers' property.
      </p>
      <p>
        <h4><strong>Warehouse Manager</strong></h4>
        Walmart - Carlyle, IL<br />
        June 2015 to June 2017<br />
        Lead manager in the warehouse/stockroom.
      </p>
      <h2 style={{textDecoration: 'underline'}}>Education</h2>
      <p>
        College in Full-stack Web Development<br />
        Denver University - Denver, CO<br />
        August 2023 to November 2023
      </p>
      <p>
        Some College Education major<br />
        Kaskaskia College - Centralia, IL<br />
        January 2014 to August 2015
      </p>
      <h2 style={{textDecoration: 'underline'}}>Skills</h2>
      <ul>
        <li>Computer skills</li>
        <li>Leadership</li>
        <li>Team management</li>
        <li>Field service</li>
        <li>Service technician experience</li>
        <li>Electrical experience</li>
        <li>Computer networking</li>
      </ul>
      <h2 style={{textDecoration: 'underline'}}>Certifications and Licenses</h2>
      <p>OSHA 10</p>
      <p>Denver Univerisities Full Stack Web Develpoment program</p>
      </div>
    </div>
  );
}

export default Resume;
