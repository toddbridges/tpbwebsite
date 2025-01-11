import React from 'react';

const Contact = ({ name, email, message }) => {

  const handleSendEmail = () => {
    const mailToLink = `mailto:${email}?subject=New message from ${name}&body=${encodeURIComponent(message)}`;
    window.location.href = mailToLink;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <h1>Contact Me</h1>
        <p>To send a message, click the button below:</p>
        <button 
          onClick={handleSendEmail} 
          style={{ padding: '12px 24px', fontSize: '16px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
