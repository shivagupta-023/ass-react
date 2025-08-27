import React from 'react';
import './input.css';


function Input({ label, required, ...props }) {
  return (
    <div className="input-group">
      <label>
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      <input {...props} />
    </div>
  );
}

export default Input;
