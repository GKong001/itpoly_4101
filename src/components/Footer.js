import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-orange text-white py-3">
      <div className="container text-center">
        <p className="mb-0">By Udompong Pipatpitayasakul</p>
        <p className="mb-0">
          Follow us on 
          <a href="https://facebook.com" className="text-white ms-2 me-2" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          |
          <a href="https://twitter.com" className="text-white ms-2" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
