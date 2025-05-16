import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
    <div className="container">
      <div className="row">
        {/* Column 1: About */}
        <div className="col-md-3">
          <h5 className="mb-4">About Us</h5>
          <p className="text-white" style={{ color: "#fff" }}>
            We help you find the best plots, flats, and investment properties with trust and transparency.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-md-3">
          <h5 className="mb-4">Quick Links</h5>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-white hover:text-primary">Home</Link></li>
            <li><Link to="/properties" className="text-white hover:text-primary">Properties</Link></li>
            <li><Link to="/about" className="text-white hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="text-white hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="col-md-3">
          <h5 className="mb-4">Services</h5>
          <ul className="list-unstyled">
            <li><Link to="/services/plot-sales" className="text-white hover:text-primary">Plot Sales</Link></li>
            <li><Link to="/services/flat-booking" className="text-white hover:text-primary">Flat Booking</Link></li>
            <li><Link to="/services/investment-plans" className="text-white hover:text-primary">Investment Plans</Link></li>
            <li><Link to="/services/consultation" className="text-white hover:text-primary">Consultation</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="col-md-3">
          <h5 className="mb-4">Contact</h5>
          <p className="text-white">Phone: 9826534965</p>
          <p className="text-white">Address: 320, Naveent Tower, Old Palasia, Indore</p>
          <p className="text-white">Email: info@example.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-top mt-4 pt-4">
        <p className="text-center text-white mb-0">
          © {new Date().getFullYear()} Karmavishwa. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
