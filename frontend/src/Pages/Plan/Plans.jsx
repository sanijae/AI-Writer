import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const Plans = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-4">Free</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">$0/month</Card.Subtitle>
              <Card.Text className="my-4">
                <ul className="list-unstyled">
                  <li><FaCheckCircle className="text-success mr-2" /> Access to basic features</li>
                  <li><FaCheckCircle className="text-success mr-2" /> 5 document uploads per month</li>
                  <li><FaCheckCircle className="text-success mr-2" /> Basic support</li>
                </ul>
              </Card.Text>
              <Button variant="outline-primary" className="mt-auto w-100">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-4">Premium</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">$49/month</Card.Subtitle>
              <Card.Text className="my-4">
                <ul className="list-unstyled">
                  <li><FaCheckCircle className="text-success mr-2" /> All Free plan features</li>
                  <li><FaCheckCircle className="text-success mr-2" /> Unlimited document uploads</li>
                  <li><FaCheckCircle className="text-success mr-2" /> Advanced features</li>
                  <li><FaCheckCircle className="text-success mr-2" /> Priority support</li>
                  <li><FaCheckCircle className="text-success mr-2" /> Monthly reports and analytics</li>
                </ul>
              </Card.Text>
              <Button variant="primary" className="mt-auto w-100">Subscribe Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Plans;
