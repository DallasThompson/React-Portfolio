import React from 'react';
import { Card, Container, Carousel } from 'react-bootstrap';
import carouselImage1 from '../assets/IMG_7560.jpg';
import carouselImage3 from '../assets/IMG_7565.jpg';
import carouselImage4 from '../assets/IMG_7567.jpg';

const About = () => {
  return (
    <body id='root' style={{ overflowY: 'scroll' }}>
      <Container className="d-flex flex-column align-items-center vh-100">

        <Card>
          <Card.Body>
            <Carousel style={{ aspectRatio: '16/9' }}>
              <Carousel.Item>
                <img
                  className="d-block w-100, project-card"
                  src={carouselImage1}
                  alt="First slide"
                  style={{ objectFit: 'cover', aspectRatio: '16/9' }}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100, project-card"
                  src={carouselImage3}
                  alt="Third slide"
                  style={{ objectFit: 'cover', aspectRatio: '16/9' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100, project-card"
                  src={carouselImage4}
                  alt="Fourth slide"
                  style={{ objectFit: 'cover', aspectRatio: '16/9' }}
                />
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
        <Card style={{ width: '110rem', marginBottom: '20px' }}>
          <Card.Body>
            <h1 className="body">About Me</h1>
            <h3>
              After working for a long time with my hands, I have shifted to working with my fingers. Years of working in construction and then in an office setting have inspired me to build on the web. I am looking forward to future learning opportunities, in whatever form they may come.
            </h3>
          </Card.Body>
        </Card>
      </Container>
    </body>
  );
};

export default About;