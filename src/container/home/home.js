import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './image1.jpeg'

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img
              src="https://th.bing.com/th/id/R.eefc6b847e3cfd368275cbea05c2bee0?rik=xOyhvvD3ybtwyQ&riu=http%3a%2f%2fwww.thefreedomtrader.com%2fwp-content%2fuploads%2f2017%2f03%2fportfolio.jpg&ehk=j%2bTc%2bNmcObesobtSA6IeLH9xzypOAePEK%2bdAy9r6BRI%3d&risl=&pid=ImgRaw&r=0"  // Replace with your logo image URL
              alt="Logo"
              width="auto"
              height="70"
            />
          </Link>
          {/* Hamburger Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto"> {/* Use mx-auto to center-align the links */}
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
       {/* Main Content with Image */}
       <div className="container mt-5">
  <div className="row">
    <div className="col-md-8 text-center">
      <h1>Welcome to My Website</h1>
      <p>This is the home page of my website.</p>
    </div>
    <div className="col-md-4">
      <img
        src={image1} // Replace with the URL of your image
        alt="Image"
        className="img-fluid" // This makes the image responsive
        style={{ maxWidth: "100%", height: "auto", width: "100%" }}
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default HomePage;
