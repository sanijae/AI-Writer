import React from 'react';
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';
import { FaQuestionCircle, FaInfoCircle, FaUserShield } from 'react-icons/fa';

const HelpCenter = () => {
  return (
    <Container className=" min-vh-100 py-5">
      <Col className=' bg-white p-5'>
        <Row className="mb-4">
          <Col>
            <h1 className="text-center">Help Center</h1>
            <p className="text-center text-muted">Find answers to common questions and learn how to use our service.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="p-3">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="d-flex align-items-center">
                  <FaQuestionCircle className="mr-2" /> General Questions
                </Card.Title>
                <Card.Text>
                  Find answers to the most common questions about our service, including usage, account management, and more.
                </Card.Text>
                <Accordion>
                  <Card>
                    <Accordion.Header as="h5" eventKey="0">
                      How do I create an account?
                    </Accordion.Header>
                    <Accordion.Body eventKey="0">
                      To create an account, click on the 'Register' button on the top right corner and fill in the required details.
                    </Accordion.Body>
                  </Card>
                </Accordion>
                <Accordion>
                  <Card>
                    <Accordion.Header as="h5" eventKey="1">
                      How can I reset my password?
                    </Accordion.Header>
                    <Accordion.Body eventKey="1">
                      Click on 'Forgot Password' on the login page, and follow the instructions to reset your password.
                    </Accordion.Body>
                  </Card>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="p-3">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="d-flex align-items-center">
                  <FaInfoCircle className="mr-2" /> Using the Service
                </Card.Title>
                <Card.Text>
                  Learn how to use our service effectively, including tutorials, tips, and feature explanations.
                </Card.Text>
                <Accordion>
                  <Card>
                    <Accordion.Header as="h5" eventKey="2">
                      How do I upload a document?
                    </Accordion.Header>
                    <Accordion.Body eventKey="2">
                      Go to the 'Upload' section, click on the 'Upload' button, and select the document you want to upload.
                    </Accordion.Body>
                  </Card>
                </Accordion>
                <Accordion>
                  <Card>
                    <Accordion.Header as="h5" eventKey="3">
                      How can I view my reports?
                    </Accordion.Header>
                    <Accordion.Body eventKey="3">
                      Navigate to the 'Reports' section from your dashboard to view all your generated reports.
                    </Accordion.Body>
                  </Card>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="p-3">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="d-flex align-items-center">
                  <FaUserShield className="mr-2" /> Privacy & Security
                </Card.Title>
                <Card.Text>
                  Understand how we protect your data and ensure your privacy, including our policies and security measures.
                </Card.Text>
                <Accordion>
                  <Card>
                    <Accordion.Header as="h5" eventKey="4">
                      How do you protect my data?
                    </Accordion.Header>
                    <Accordion.Body eventKey="4">
                      We use state-of-the-art encryption and security protocols to ensure your data is protected at all times.
                    </Accordion.Body>
                  </Card>
                </Accordion>
                <Accordion>
                  <Card>
                    <Accordion.Header as="h5" eventKey="5">
                      What is your privacy policy?
                    </Accordion.Header>
                    <Accordion.Body eventKey="5">
                      Our privacy policy outlines how we collect, use, and protect your personal information. You can read it <a href="/privacy-policy">here</a>.
                    </Accordion.Body>
                  </Card>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default HelpCenter;
