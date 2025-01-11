import React from 'react';

const Contact = ({ name, email, message }) => {

  const handleSendEmail = () => {
    const mailToLink = `mailto:${email}?subject=New message from ${name}&body=${encodeURIComponent(message)}`;
    window.location.href = mailToLink;
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSendEmail}>
        <label>
          Name:
          <input type="text" name="name" value={name} readOnly />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} readOnly />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={message} readOnly></textarea>
        </label>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
