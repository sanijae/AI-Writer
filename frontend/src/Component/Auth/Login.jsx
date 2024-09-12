import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }
    // Mock login function. Replace with actual API call in real-world scenario.
    setError('');
    console.log('Logged in successfully');
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light py-5 bg-transparent">
      <div className="bg-white p-5 rounded shadow-sm w-50">
        <h2 className="text-center mb-4">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              className='focus:outline-none p-2 focus:border-0'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              className='focus:outline-none p-2 focus:border-0'
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='flex items-center justify-content-end mt-1'>
              <p role='button' onClick={()=>setShowPassword(!showPassword)} className="btn btn-sm btn-secondary text-lg mt-1">Show Password</p>
            </div>
          </Form.Group>
          <button type="submit" className="w-100 primary_button ">
            Login
          </button>
          <p className="text-lg my-2">Don't have account <Link to="/register">Create one</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
