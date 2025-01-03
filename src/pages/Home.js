import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <div className="hero-section bg-light py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4 text-orange">Welcome to My Website</h1>
          <p className="lead mb-4">
            Discover our services, explore our courses, and learn more about us. We're here to help you achieve your goals.
          </p>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipM6N7JKQkbgwt40cSHVaZeB_cyxflodi8TRkNnY=s680-w680-h510"
            alt="Hero"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      <div className="services-section py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4 text-orange">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src="https://voom-obs.line-scdn.net/r/myhome/hex/c6229a1739b87809e88fb52d544263920605286340495a6d644e12314f8c6ba8tef7394119c99150t0ef6bab1/w750?0"
                  className="card-img-top"
                  alt="Service 1"
                />
                <div className="card-body">
                  <h5 className="card-title text-orange">Personalized Support</h5>
                  <p className="card-text">
                    We provide expert advice and assistance tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg"
                  className="card-img-top"
                  alt="Service 2"
                />
                <div className="card-body">
                  <h5 className="card-title text-orange">Online Courses</h5>
                  <p className="card-text">
                    Enroll in our online courses and learn at your own pace.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQnDPoHJvNMNEtOwOo1efXk3XPau4QA2ekrT9hOohjl6gGxoIl5Xq90o2iLbcah1p8WE&usqp=CAU"
                  className="card-img-top"
                  alt="Service 3"
                />
                <div className="card-body">
                  <h5 className="card-title text-orange">Community Events</h5>
                  <p className="card-text">
                    Join our events to connect with like-minded individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
