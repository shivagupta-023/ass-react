import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate
import Button from '../components/buttons/Button'; // आपका पाथ सही होना चाहिए

function Home() {
    const navigate = useNavigate(); // Step 2: Initialize useNavigate

    const handleCreateAccountClick = () => {
        console.log("Redirecting to Create Account page...");
        navigate('/register'); // Step 3: Navigate to the registration page
    };

    const handleLoginClick = () => {
        console.log("Redirecting to Login page...");
        navigate('/login'); // Step 3: Navigate to the login page
    };

    return (
        <div className='welcome-page'>
            <div className='content-box'>
                <h1>Welcome to PopX</h1>
                <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>

                <Button onClick={handleCreateAccountClick}>
                    Create Account
                </Button>

                <Button onClick={handleLoginClick} variant="secondary">
                    Already Registered? Login
                </Button>
            </div>
        </div>
    );
}

export default Home;