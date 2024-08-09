import React from 'react';
import './CustomerSupportStyles.css';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function CustomerSupport() {
  return (
    <div className="support-container">
      <h1>Customer Support</h1>
      <p>If you have any issues or queries related to your recharge transactions, we're here to help! Please choose one of the support options below.</p>
      
      <div className="support-options">
        <div className="support-option">
          <ChatIcon style={{ fontSize: 40 }} />
          <h2>Live Chat</h2>
          <p>Get instant support through our live chat service. Click the button below to start chatting with our support team.</p>
          <button onClick={() => window.open('your-chat-service-url', '_blank')}>Start Live Chat</button>
        </div>
        
        <div className="support-option">
          <EmailIcon style={{ fontSize: 40 }} />
          <h2>Email Support</h2>
          <p>Send us an email at <a href="mailto:support@example.com">support@example.com</a> and we'll get back to you as soon as possible.</p>
          <button onClick={() => window.location.href = 'mailto:support@example.com'}>Email Us</button>
        </div>
        
        <div className="support-option">
          <PhoneIcon style={{ fontSize: 40 }} />
          <h2>Phone Support</h2>
          <p>Call us at <a href="tel:18001234567">1-800-123-4567</a> for immediate assistance with your queries or issues.</p>
          <button onClick={() => window.location.href = 'tel:18001234567'}>Call Us</button>
        </div>
      </div>
    </div>
  );
}
