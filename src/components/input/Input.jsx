import React from 'react';
import './Input.css';

// हम label और required को अलग कर रहे हैं और बाकी सब कुछ ...props में डाल रहे हैं
function Input({ label, required, ...props }) {
  return (
    <div className="input-group">
      <label>
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      {/* यहाँ ...props बहुत ज़रूरी है। 
        यह सुनिश्चित करता है कि आपके दिए गए सभी props (जैसे value, name, placeholder, onChange, type) 
        सीधे असली <input> टैग पर लागू हो जाएं। यही आपकी टाइपिंग की समस्या को ठीक करेगा।
      */}
      <input {...props} />
    </div>
  );
}

export default Input;