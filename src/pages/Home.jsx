import React from 'react';
import logo from '../assets/images/ecell-logo.png';

const Home = () => {
  return (
    <div className="container py-5 fade-in">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <img src={logo} alt="NEC Cell Team Logo" className="img-fluid mb-4" style={{ maxHeight: '150px' }} />
          <h1 className="display-4">Welcome to the InnoVritti</h1>
          <p className="lead">A hub for innovation, inspiration, and impact. We are dedicated to fostering the entrepreneurial spirit among students.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;