import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import './AllApp.css'
import Home from './pages/Home';
import CreateAccountPage from './pages/CreateAccount/CreateAccount';
import Login from './pages/login/Login'; 
import AccountSettings from './pages/AccountSetting/AccountSetting';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<CreateAccountPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </div>
  );
}

export default App;
