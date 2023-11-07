import React from 'react';
import resume from './Resume.pdf'

function Resume() {
  return (
    <div className='resume-container'>
      <a href={resume} download>
        Download Resume</a>
      <h1>Resume</h1>
      <div className='resume-content'>
      <p>
        Dallas Thompson<br />
        Commerce City, CO 80022<br />
        duhtennis1@gmail.com<br />
        +1 618 623 6112
      </p>
      <h2>Work Experience</h2>
      <p>
        <strong>Student</strong><br />
        DU - Denver, CO<br />
        August 2023 to November 2023<br />
        Worked full time as a student in the full-stack web development program.
      </p>
      <p>
        <strong>Permit Coordinator</strong><br />
        Sunrun - Arvada, CO<br />
        January 2022 to March 2023<br />
        My daily tasks included record keeping, county building relations, and the acquisition of solar permits in multiple counties, so that our customer could quickly get solar installed on their roofs.
      </p>
      <p>
        <strong>Installer</strong><br />
        SunRun Installation Services - Arvada, CO<br />
        October 2021 to January 2022<br />
        Worked on the install side with Sunrun. Daily tasks included the start and completion of installing roof-mounted solar systems.
      </p>
      <p>
        <strong>Field Service Technician</strong><br />
        Kohnen Concrete Products, Inc. - Germantown, IL<br />
        July 2017 to October 2021<br />
        My role was to provide good customer service and to maintain the aeration systems on the customers' property.
      </p>
      <p>
        <strong>Warehouse Manager</strong><br />
        Walmart - Carlyle, IL<br />
        June 2015 to June 2017<br />
        Lead manager in the warehouse/stockroom.
      </p>
      <h2>Education</h2>
      <p>
        College in Full-stack Web Development<br />
        Denver University - Denver, CO<br />
        August 2023 to November 2023
      </p>
      <p>
        Some College in Education<br />
        Kaskaskia College - Centralia, IL<br />
        January 2014 to August 2015
      </p>
      <h2>Skills</h2>
      <ul>
        <li>Computer skills</li>
        <li>Leadership</li>
        <li>Team management</li>
        <li>Field service</li>
        <li>Service technician experience</li>
        <li>Electrical experience</li>
        <li>Computer networking</li>
      </ul>
      <h2>Certifications and Licenses</h2>
      <p>OSHA 10</p>
      </div>
    </div>
  );
}

export default Resume;
