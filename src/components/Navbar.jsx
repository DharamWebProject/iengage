import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Container } from 'react-bootstrap';

{/*const Navbar = ( props) => {*/}
{/* function Navbar(props) {  function use*/}
   const Navbar = ({ props }) => { 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container">
        <Link to="/" className="navbar-brand left_items">
          <img src="/iengage/logo.png" alt="Logo" />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Email show */}
        <Container className="text-white me-3">
          Email: {props.email} |  Mobile: {props.phone}
        </Container>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
