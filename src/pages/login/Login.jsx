import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input'; 
import Button from '../../components/buttons/Button';

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const storedUserJSON = localStorage.getItem('userProfile');

    if (!storedUserJSON) {
      alert('No user found. Please create an account first.');
      return;
    }

    const registeredUser = JSON.parse(storedUserJSON);

    if (loginData.email === registeredUser.email && loginData.password) {
      alert('Login successful!');
      navigate('/account');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="login-page-container">
      <h1>Signin to your PopX Account</h1>
      <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
      
      <form onSubmit={handleLoginSubmit} className="login-form">
        <Input 
          label="Email address" 
          type="email"
          placeholder="Enter email address"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          required 
        />
        <Input 
          label="Password" 
          type="password"
          placeholder="Enter password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          required 
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default LoginPage;
