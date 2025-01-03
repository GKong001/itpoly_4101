import React from 'react';

const About = () => {
  return (
    <div className="text-center">
      <h2 className="fw-bold mb-4">About Us</h2>
      <p className="lead mb-4">
        We are a team of passionate professionals dedicated to providing the best services to our clients.
      </p>
      <img 
        src="https://lh3.googleusercontent.com/p/AF1QipM6N7JKQkbgwt40cSHVaZeB_cyxflodi8TRkNnY=s680-w680-h510" 
        alt="About Us" 
        className="img-fluid rounded shadow-sm mb-4"
      />
      <p>
        Our mission is to deliver quality services that exceed customer expectations. With a commitment to innovation and excellence, we strive to make a positive impact in the community.
      </p>
    </div>
  );
};

export default About;
