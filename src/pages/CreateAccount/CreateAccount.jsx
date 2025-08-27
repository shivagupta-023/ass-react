import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input'; 
import Button from '../../components/buttons/Button';

function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'Yes'
  });
  
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  
  const handleRadioChange = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      isAgency: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
        alert("Please fill all required fields.");
        return;
    }

    const userProfile = {
      fullName: formData.fullName,
      email: formData.email,
      profilePic: ''
    };

    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    alert('Account Created Successfully! Redirecting...');
    navigate('/account'); 
  };

  return (
    <div className="create-account-container">
      <h1>Create your PopX account</h1>
      
      <form onSubmit={handleSubmit}>
        <Input 
          label="Full Name" 
          placeholder="Marry Doe"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required 
        />
        <Input 
          label="Phone number" 
          placeholder="9876543210"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required 
        />
        <Input 
          label="Email address" 
          type="email"
          placeholder="marry.doe@example.com"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required 
        />
        <Input 
          label="Password" 
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required 
        />
        <Input 
          label="Company name" 
          placeholder="PopX"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
        />

        <div className="radio-group">
          <p>Are you an Agency?<span className="required-star">*</span></p>
          <div className="radio-options">
            <label>
              <input 
                type="radio" 
                name="isAgency" 
                value="Yes"
                checked={formData.isAgency === 'Yes'}
                onChange={handleRadioChange}
              /> Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="isAgency" 
                value="No"
                checked={formData.isAgency === 'No'}
                onChange={handleRadioChange}
              /> No
            </label>
          </div>
        </div>
        
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
}

export default CreateAccount
