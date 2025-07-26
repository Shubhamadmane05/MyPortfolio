import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Navbar = () => {
  const navRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const navCollapse = document.getElementById('navbarNav');

    // Close navbar when clicking a link
    const handleLinkClick = () => {
      if (navCollapse.classList.contains('show')) {
        new window.bootstrap.Collapse(navCollapse).toggle();
      }
    };

    // Close navbar when clicking outside
    const handleClickOutside = (event) => {
      if (
        navCollapse.classList.contains('show') &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        new window.bootstrap.Collapse(navCollapse).hide();
      }
    };

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.addEventListener('click', handleLinkClick));
    document.addEventListener('click', handleClickOutside);

    // Cleanup
    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
      document.removeEventListener('click', handleClickOutside);
    };
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg" ref={navRef}>
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
