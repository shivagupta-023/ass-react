// src/components/Button/Button.js

import React from 'react';
import './Button.css'; 

function Button({ children, onClick, variant = 'primary' }) {
  const buttonClassName = `btn ${variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;