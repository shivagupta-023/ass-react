import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input'; 
import Button from '../../components/buttons/Button';

function LoginPage() {
  // Step 1: लॉगिन फॉर्म के डेटा के लिए state बनाएं
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // इनपुट फील्ड में टाइप करने पर state को अपडेट करें
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Step 2: फॉर्म सबमिट होने पर डेटा को मिलाएं
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // localStorage से रजिस्टर्ड यूज़र का डेटा निकालें
    const storedUserJSON = localStorage.getItem('userProfile');

    // जांचें कि कोई यूज़र रजिस्टर्ड है भी या नहीं
    if (!storedUserJSON) {
      alert('No user found. Please create an account first.');
      return;
    }

    const registeredUser = JSON.parse(storedUserJSON);

    // Step 3: डाले गए ईमेल को रजिस्टर्ड ईमेल से मिलाएं
    // (हम पासवर्ड नहीं मिला रहे हैं क्योंकि हमने उसे सेव नहीं किया था)
    if (loginData.email === registeredUser.email && loginData.password) {
      // अगर ईमेल मिलता है और पासवर्ड खाली नहीं है
      alert('Login successful!');
      navigate('/account'); // अकाउंट पेज पर भेज दें
    } else {
      // अगर ईमेल नहीं मिलता है
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