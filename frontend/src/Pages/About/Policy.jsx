import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PrivacyPolicyPage = () => {
  return (
    <Container className="py-5">
      <Row className="mb-2 bg-white p-4 shadow-md">
        <Col>
          <h1 className="text-center">Privacy Policy</h1>
          {/* <p className="text-center text-muted">Effective Date: August 6, 2024</p> */}
        </Col>
      </Row>
      <Row className='bg-white my-2 p-3'>
        <Col>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>1. Introduction</Card.Title>
              <Card.Text>
                We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
            <Card.Title>2. Information We Collect</Card.Title>
              <Card.Text>
                We collect information from you when you visit our website, register an account, make a purchase, or interact with our services. This may include personal information such as your name, email address, phone number, and payment information.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>3. How We Use Your Information</Card.Title>
              <Card.Text>
                We use your information to provide, maintain, and improve our services. This includes processing transactions, communicating with you, and personalizing your experience. We may also use your information for marketing and promotional purposes with your consent.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>4. How We Share Your Information</Card.Title>
              <Card.Text>
                We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and providing our services. These partners are required to protect your information and use it only for the purposes for which it was shared.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
            <Card.Title>5. Data Security</Card.Title>
              <Card.Text>
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>6. Your Rights</Card.Title>
              <Card.Body>
                You have the right to access, correct, or delete your personal information. You may also object to or restrict the processing of your data. To exercise these rights, please contact us using the details provided below.
              </Card.Body>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>7. Cookies and Tracking Technologies</Card.Title>
              <Card.Text>
                We use cookies and other tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and understand how you interact with our site. You can manage your cookie preferences through your browser settings.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>8. Third-Party Links</Card.Title>
              <Card.Text>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>9. Changes to This Privacy Policy</Card.Title>
              <Card.Text>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our services after any changes constitutes your acceptance of the revised policy.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 shadow-md p-2 my-2">
            <Card.Body>
              <Card.Title>10. Contact Us</Card.Title>
              <Card.Text>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at support@example.com.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicyPage;
