import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TermsOfServicePage = () => {
  return (
    <Container className="py-5">
      <Row className="mb-2 bg-white p-4 shadow-md">
        <Col>
          <h1 className="text-center">Terms of Service</h1>
          {/* <p className="text-center text-muted">Effective Date: August 6, 2024</p> */}
        </Col>
      </Row>
      <Row className="bg-white my-2 p-3">
        <Col>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>1. Introduction</Card.Title>
              <Card.Text>
                Welcome to our website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our services.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>2. Changes to Terms</Card.Title>
              <Card.Text>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the services after changes constitutes your acceptance of the updated terms.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>3. User Responsibilities</Card.Title>
              <Card.Text>
                You agree to use our services responsibly and in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>4. Prohibited Activities</Card.Title>
              <Card.Text>
                You may not use our services for any illegal or unauthorized purpose. Prohibited activities include, but are not limited to, hacking, distributing malware, spamming, and infringing on the intellectual property rights of others.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>5. Intellectual Property</Card.Title>
              <Card.Text>
                All content and materials on our website are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our explicit permission.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>6. Privacy Policy</Card.Title>
              <Card.Text>
                Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using our services, you consent to our Privacy Policy, which is incorporated into these terms by reference.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>7. Limitation of Liability</Card.Title>
              <Card.Text>
                We are not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the maximum extent permitted by law.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>8. Termination</Card.Title>
              <Card.Text>
                We may terminate or suspend your access to our services at our sole discretion if you breach these terms or engage in any activity that we deem harmful or inappropriate.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>9. Governing Law</Card.Title>
              <Card.Text>
                These terms are governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law principles.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>10. Contact Us</Card.Title>
              <Card.Text>
                If you have any questions or concerns about these terms, please contact us at support@example.com.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfServicePage;
