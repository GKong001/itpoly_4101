const Courses = () => (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Courses</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Course 1</h5>
              <p className="card-text">Learn the basics of web development.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Course 2</h5>
              <p className="card-text">Intermediate programming skills.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Course 3</h5>
              <p className="card-text">Advanced concepts and projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Courses;
  