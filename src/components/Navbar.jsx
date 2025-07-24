import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    // Close navbar on link click (mobile view only)
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.getElementById('navbarNav');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navCollapse).toggle();
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top px-4 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-success" to="/">
          MyPortFolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certificates">Certificates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;