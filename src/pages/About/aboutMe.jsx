import React from 'react';
import { Card, Container } from 'react-bootstrap';
import myPic from './myPic.jpg'

const About = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
          <img
        src={myPic} // Use the imported myPic variable as the source
        alt="Your Alt Text"
        style={{ maxWidth: '20%', height: 'auto' }}
      />
    <Card style={{ width: '80rem' }}>
      <Card.Body>
        <h1 className="body">About Me</h1>
        <h3>
          After working for a long time with my hands, I have shifted to working with my fingers. Years of working in construction and then in an office setting have inspired me to build on the web. I am looking forward to future learning opportunities, in whatever form they may come.
        </h3>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default About;