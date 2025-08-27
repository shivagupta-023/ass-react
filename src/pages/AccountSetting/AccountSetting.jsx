import React, { useState, useEffect, useRef } from 'react';
import defaultProfilePic from '../../assets/profile.png';
import cameraIcon from '../../assets/cemera.png';

function AccountSetting() {
    const [userProfile, setUserProfile] = useState(null);
    const fileInputRef = useRef(null); 

    useEffect(() => {
        const savedUserData = localStorage.getItem('userProfile');
        if (savedUserData) {
            const parsedUser = JSON.parse(savedUserData);
            parsedUser.profilePic = parsedUser.profilePic || defaultProfilePic;
            setUserProfile(parsedUser);
        }
    }, []);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            setUserProfile(prevProfile => ({
                ...prevProfile,
                profilePic: newImageUrl
            }));
        }
    };

    if (!userProfile) {
        return <div>Loading profile...</div>;
    }

    return (
        <div className='account-setting-page'>
            <div className="header">
                    <h1>Account Settings</h1>
            </div>
            <div className="account-container">
                <div className="profile-details">
                    <div className="profile-info">
                        <div className="profile-pic-container" onClick={handleImageClick}>
                            <img
                                src={userProfile.profilePic}
                                alt="Profile"
                                className="profile-pic"
                            />
                            <div className="camera-icon-overlay">
                                <img src={cameraIcon} alt="edit" className="camera-icon" />
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="user-text">
                            <h2>{userProfile.fullName}</h2>
                            <p>{userProfile.email}</p>
                        </div>
                    </div>

                    <div className="description">
                        <p>
                            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSetting;
