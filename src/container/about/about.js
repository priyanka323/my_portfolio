import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h1>About</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">A brief description about me.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">My Skills</h5>
              <p className="card-text">List of skills and expertise.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
