import React from 'react';

const Courses = () => {
  return (
    <div>
      <h2 className="fw-bold text-center mb-4">Our Courses</h2>
      <p className="lead text-center mb-4">
        Explore our wide range of courses designed to help you achieve your goals.
      </p>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img 
              src="https://voom-obs.line-scdn.net/r/myhome/hex/c6229a1739b87809e88fb52d544263920605286340495a6d644e12314f8c6ba8tef7394119c99150t0ef6bab1/w750?0" 
              className="card-img-top" 
              alt="Course 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">Learn the fundamentals of web development and build amazing websites.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img 
              src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg" 
              className="card-img-top" 
              alt="Course 2" 
            />
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">Master data analysis and machine learning techniques.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQnDPoHJvNMNEtOwOo1efXk3XPau4QA2ekrT9hOohjl6gGxoIl5Xq90o2iLbcah1p8WE&usqp=CAU" 
              className="card-img-top" 
              alt="Course 3" 
            />
            <div className="card-body">
              <h5 className="card-title">Graphic Design</h5>
              <p className="card-text">Enhance your creativity with our graphic design courses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
