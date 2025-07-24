import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import 'aos/dist/aos.css';
import ContactImage from '../assets/ContactImage.jpeg';

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundImage: `url(${ContactImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Optional overlay for better readability */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          width: '100%',
          padding: '60px 20px',
        }}
      >
        <div className="container text-white">
          <h2
            className="text-center fw-bold text-warning mb-4"
            data-aos="fade-down"
          >
            Contact Me
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div
                className="card shadow p-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="mb-3 d-flex align-items-center">
                  <FaEnvelope className="me-3 text-danger fs-4" />
                  <span className="fs-5">shubhamadmane0530@gmail.com</span>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <FaPhoneAlt className="me-3 text-success fs-4" />
                  <span className="fs-5">+91 9527074649</span>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <FaLinkedin className="me-3 text-info fs-4" />
                  <a
                    href="https://www.linkedin.com/in/shubhamad05/"
                    className="fs-5 text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <FaGithub className="me-3 text-dark fs-4" />
                  <a
                    href="https://github.com/Shubhamadmane05"
                    className="fs-5 text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
