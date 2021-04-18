import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
       <section className="row d-flex justify-content-center d-grid gap-2 footer-container mt-5 p-5">
            <div className="col-md-3">
                <small>Location</small>
            </div>
            <div className="col-md-2">
            <small>Company</small>
            </div>
            <div className="col-md-2">
            <small>Quick Links</small>
            </div>
            <div className="col-md-3">
            <small>About Us</small>
            </div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
            </div>
       </section>
    );
};

export default Footer;