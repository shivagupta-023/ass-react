import React, { useState, useEffect, useRef } from 'react';
import defaultProfilePic from '../../assets/profile.png'; // आपकी डिफ़ॉल्ट प्रोफाइल फोटो
import cameraIcon from '../../assets/cemera.png'; // Step 1: कैमरा आइकॉन इम्पोर्ट करें

function AccountSetting() {
    const [userProfile, setUserProfile] = useState(null);
    const fileInputRef = useRef(null); // Step 2: Hidden file input के लिए ref बनाएं

    useEffect(() => {
        const savedUserData = localStorage.getItem('userProfile');
        if (savedUserData) {
            const parsedUser = JSON.parse(savedUserData);
            // प्रोफाइल फोटो के लिए डिफ़ॉल्ट वैल्यू सेट करें
            parsedUser.profilePic = parsedUser.profilePic || defaultProfilePic;
            setUserProfile(parsedUser);
        }
    }, []);

    // आइकॉन पर क्लिक करने पर hidden input को ट्रिगर करें
    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    // जब यूज़र कोई फाइल चुने
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Step 3: चुनी हुई इमेज का एक अस्थायी URL बनाएं और state अपडेट करें
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
                        {/* Step 4: इमेज और आइकॉन के लिए कंटेनर */}
                        <div className="profile-pic-container" onClick={handleImageClick}>
                            <img
                                src={userProfile.profilePic}
                                alt="Profile"
                                className="profile-pic"
                            />
                            <div className="camera-icon-overlay">
                                <img src={cameraIcon} alt="edit" className="camera-icon" />
                            </div>
                            {/* Step 5: Hidden file input */}
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