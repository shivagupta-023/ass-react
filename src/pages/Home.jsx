import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/buttons/Button';

function Home() {
    const navigate = useNavigate();

    const handleCreateAccountClick = () => {
        console.log("Redirecting to Create Account page...");
        navigate('/register');
    };

    const handleLoginClick = () => {
        console.log("Redirecting to Login page...");
        navigate('/login');
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
