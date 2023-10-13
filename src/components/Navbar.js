import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Title in the center */}
        <span className="navbar-brand">News-Myon</span>

        {/* Rest of the Navbar */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/category/general" className="nav-link">
                <i className="fas fa-newspaper"></i> General
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/business" className="nav-link" >
                <i className="fas fa-briefcase"></i> Business
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/entertainment" className="nav-link" >
                <i className="fas fa-film"></i> Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/health" className="nav-link" >
                <i className="fas fa-medkit"></i> Health
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/science" className="nav-link" >
                <i className="fas fa-flask"></i> Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/sports" className="nav-link" >
                <i className="fas fa-futbol"></i> Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/technology" className="nav-link" >
                <i className="fas fa-laptop"></i> Technology
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Icons on the right */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="navbar-brand" href="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="navbar-brand" href="mailto:example@example.com">
            <i className="fas fa-envelope"></i>
          </a>
          <Link className="navbar-brand" to="/profile">
            <i className="fas fa-user"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
