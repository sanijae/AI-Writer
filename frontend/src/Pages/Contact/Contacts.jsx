import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }

    // Mock API call. Replace with actual API call in a real-world scenario.
    setTimeout(() => {
      setSuccess('Your message has been sent successfully!');
      setError('');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <Container className="py-5">
      <Col className="bg-white p-5">
        <Row className="mb-4">
          <Col>
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center text-muted">We'd love to hear from you! Please fill out the form below or reach us at the contact information provided.</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className="border-0 shadow-sm mb-4 p-3">
              <Card.Body>
                <h3>Contact Information</h3>
                <p>
                  <strong>Address:</strong> 22 Noukchout Street, Shehu Shagari Way, Wuse 2, Abuja, Nigeria.
                </p>
                <p>
                  <strong>Phone:</strong> (+234) 80-8987-8468
                </p>
                <p>
                  <strong>Email:</strong> support@ai-writer.com
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm p-2">
              <Card.Body>
                <h3>Send Us a Message</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      size='lg'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className='my-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      size='lg'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className='focus:outline-none focus:border-none'
                    />
                  </Form.Group>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                    />
                  </Form.Group>
                  <button className="primary_button my-2" type="submit">
                    Send Message
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ContactUsPage;
