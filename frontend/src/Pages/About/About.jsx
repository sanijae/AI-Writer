import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="py-5">
      <Col className='p-4 bg-white'>
        <Row className="mb-4 p-5 shadow-md">
          <Col>
            <h1 className="text-center">About Us</h1>
            <p className="text-center text-muted">Learn more about our mission, vision, and team</p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={12}>
            <Card className="border-0 shadow-sm p-5">
              <Card.Body>
                <Row className='items-center'>
                  <Col md={6}>
                    <h2>Our Mission</h2>
                    <p>
                      We are dedicated to providing cutting-edge solutions that enhance productivity and improve efficiency. Our mission is to drive innovation and deliver exceptional value to our customers through advanced technology and unparalleled support.
                    </p>
                    {/* <button className="primary_button">Learn More</button> */}
                  </Col>
                  <Col md={6}>
                    <img
                      src={require('../../Assets/images/undraw_Shared_goals_re_jvqd.png')}
                      alt="Our Mission"
                      className="img-fluid rounded"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={12}>
            <Card className="border-0 shadow-sm p-5">
              <Card.Body>
                <Row className="flex-row-reverse md:flex-row items-center">
                  <Col md={6}>
                    <h2>Our Vision</h2>
                    <p>
                      Our vision is to be the global leader in technology and innovation, empowering individuals and businesses to achieve their fullest potential. We are committed to fostering a culture of continuous learning, growth, and excellence, ensuring that our solutions not only meet but exceed the evolving needs of our customers.
                    </p>
                    {/* <button className="primary_button">Learn More</button> */}
                  </Col>
                  <Col md={6}>
                    <img
                      src={require('../../Assets/images/undraw_Visionary_technology_re_jfp7.png')}
                      alt="Our Vision"
                      className="img-fluid rounded"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={12}>
            <Card className="border-0 shadow-sm p-5">
              <Card.Body>
                <h2>Our Values</h2>
                <p><strong>Integrity:</strong> We maintain the highest ethical standards in all our business practices.</p>
                <p><strong>Innovation:</strong> We continuously seek new and better ways to serve our clients and advance our technology.</p>
                <p><strong>Customer Focus:</strong> We are committed to delivering exceptional service and support to our customers.</p>
                <p><strong>Excellence:</strong> We strive for excellence in everything we do, from our products to our customer service.</p>
                <a href='/contact-us' className="primary_button btn-lg text-decoration-none mt-3">Contact Us</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className='shadow-md p-5'>
            <h2 className="text-center">Meet the Team</h2>
            <Row className="justify-content-center">
              <Col md={4}>
                <Card className="text-center mb-4 border-0">
                  <Card.Body>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Team Member"
                      className="img-fluid rounded-circle mb-3"
                    />
                    <h4>Jane Doe</h4>
                    <p className="text-muted">CEO & Founder</p>
                    <p>Jane is a visionary leader with over 15 years of experience in technology and innovation.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center mb-4 border-0">
                  <Card.Body>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Team Member"
                      className="img-fluid rounded-circle mb-3"
                    />
                    <h4>John Smith</h4>
                    <p className="text-muted">CTO</p>
                    <p>John is the chief architect behind our technological innovations, ensuring top-notch performance and security.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center mb-4 border-0">
                  <Card.Body>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Team Member"
                      className="img-fluid rounded-circle mb-3"
                    />
                    <h4>Emily Johnson</h4>
                    <p className="text-muted">COO</p>
                    <p>Emily oversees the daily operations and ensures that our services are delivered efficiently and effectively.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row className="flex justify-center">
          <Col className='text-center w-1/2'>
            <h2>Get in Touch</h2>
            <p>If you have any questions or would like to learn more about our services, please don't hesitate to reach out to us.</p>
            <button className='primary_button'>Contact Us</button>
          </Col>
        </Row> */}
      </Col>
    </Container>
  );
};

export default AboutPage;
