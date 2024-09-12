import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Tab, Nav } from 'react-bootstrap';

const SettingsPage = () => {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' });
  const [password, setPassword] = useState({ current: '', new: '', confirm: '' });
  const [preferences, setPreferences] = useState({ theme: 'light', notifications: true });

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handlePreferencesChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences({ ...preferences, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSaveChanges = (section) => {
    // Handle save changes for the respective section
    console.log(`Saved changes for ${section}`);
  };

  return (
    <Container className="min-vh-100 py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Settings</h1>
          <p className="text-center text-muted">Manage your account settings and preferences.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tab.Container defaultActiveKey="personal-info">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="personal-info">Personal Information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="password">Change Password</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="preferences">Preferences</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="personal-info">
                    <Card className="mb-4 shadow-sm border-0">
                      <Card.Body>
                        <Card.Title>Personal Information</Card.Title>
                        <Form>
                          <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={personalInfo.name}
                              onChange={handlePersonalInfoChange}
                            />
                          </Form.Group>
                          <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={personalInfo.email}
                              onChange={handlePersonalInfoChange}
                            />
                          </Form.Group>
                          <Button variant="primary" onClick={() => handleSaveChanges('Personal Information')}>
                            Save Changes
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="password">
                    <Card className="mb-4 shadow-sm border-0">
                      <Card.Body>
                        <Card.Title>Change Password</Card.Title>
                        <Form>
                          <Form.Group controlId="formCurrentPassword">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="current"
                              value={password.current}
                              onChange={handlePasswordChange}
                            />
                          </Form.Group>
                          <Form.Group controlId="formNewPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="new"
                              value={password.new}
                              onChange={handlePasswordChange}
                            />
                          </Form.Group>
                          <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="confirm"
                              value={password.confirm}
                              onChange={handlePasswordChange}
                            />
                          </Form.Group>
                          <Button variant="primary" onClick={() => handleSaveChanges('Password')}>
                            Save Changes
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="preferences">
                    <Card className="mb-4 shadow-sm border-0">
                      <Card.Body>
                        <Card.Title>Preferences</Card.Title>
                        <Form>
                          <Form.Group controlId="formTheme">
                            <Form.Label>Theme</Form.Label>
                            <Form.Control
                              as="select"
                              name="theme"
                              value={preferences.theme}
                              onChange={handlePreferencesChange}
                            >
                              <option value="light">Light</option>
                              <option value="dark">Dark</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group controlId="formNotifications">
                            <Form.Check
                              type="checkbox"
                              label="Enable Notifications"
                              name="notifications"
                              checked={preferences.notifications}
                              onChange={handlePreferencesChange}
                            />
                          </Form.Group>
                          <Button variant="primary" onClick={() => handleSaveChanges('Preferences')}>
                            Save Changes
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SettingsPage;
