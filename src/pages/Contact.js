import React from 'react';

const Contact = () => {
  return (
    <div className="text-center">
      <h2 className="fw-bold mb-4">Contact Us</h2>
      <p className="lead mb-4">
        Have questions or need assistance? Reach out to us!
      </p>
      <img 
        src="https://lh3.googleusercontent.com/p/AF1QipM6N7JKQkbgwt40cSHVaZeB_cyxflodi8TRkNnY=s680-w680-h510" 
        alt="Contact Us" 
        className="img-fluid rounded shadow-sm mb-4"
      />
      <div className="row">
        <div className="col-md-6">
          <h5>Address</h5>
          <p>123 Main Street, Cityville, USA</p>
        </div>
        <div className="col-md-6">
          <h5>Email</h5>
          <p>support@mywebsite.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
