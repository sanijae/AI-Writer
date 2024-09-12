import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProfilePage = () => {
  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    bio: 'A short bio about John Doe.',
    profileImage: 'https://via.placeholder.com/150',
  };

  return (
    <Container className="min-vh-100 py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Profile</h1>
          <p className="text-center text-muted">Manage your profile information</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-4 shadow-sm border-0">
            <Card.Body>
              <Row>
                <Col md={4} className="text-center">
                  <img
                    src={userInfo.profileImage}
                    alt="Profile"
                    className="img-fluid rounded-circle mb-3"
                  />
                  <Button variant="primary">Edit Profile</Button>
                </Col>
                <Col md={8}>
                  <h3>{userInfo.name}</h3>
                  <p className="text-muted">{userInfo.bio}</p>
                  <hr />
                  <Row>
                    <Col md={6}>
                      <h5>Email</h5>
                      <p>{userInfo.email}</p>
                    </Col>
                    <Col md={6}>
                      <h5>Phone</h5>
                      <p>{userInfo.phone}</p>
                    </Col>
                    <Col md={6}>
                      <h5>Address</h5>
                      <p>{userInfo.address}</p>
                    </Col>
                  </Row>
                  <Button variant="secondary" className="mt-3">
                    Change Password
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
