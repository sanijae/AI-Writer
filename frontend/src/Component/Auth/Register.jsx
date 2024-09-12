import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Mock register function. Replace with actual API call in real-world scenario.
    setError('');
    console.log('Registered successfully');
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-transparent py-5">
      <div className="bg-white p-5 rounded shadow-sm w-50">
        <h2 className="text-center mb-4">Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={username}
              className='focus:outline-none p-2'
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              className='focus:outline-none p-2'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              className='focus:outline-none p-2'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              className='focus:outline-none p-2'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className='flex items-center justify-content-end mt-1'>
              <p role='button' onClick={()=>setShowPassword(!showPassword)} className="btn btn-sm btn-secondary text-lg mt-1">Show Password</p>
            </div>
          </Form.Group>
          <button type="submit" className="w-100 primary_button">
            Register
          </button>
          <p className="text-lg my-2">Already have account <Link to="/login">Login</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
