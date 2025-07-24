import React from 'react';
import JavaFD from '../assets/full_stack_java_certificate.jpeg';
import ReactJS from '../assets/react_js.jpg';
import Springboot from '../assets/SpringBoot.jpg';
import Nasscom from '../assets/Nasscom.jpg';
import IStudio from '../assets/IStudio_Participation.jpg';
import Fullstackintern from '../assets/verzeonew1.jpg';
import 'aos/dist/aos.css';

const Certificates = () => {
  const certificateData = [
    { title: 'Java Full Stack Developer', image: JavaFD },
    { title: 'React JS', image: ReactJS },
    { title: 'Spring Boot', image: Springboot },
    { title: 'NASSCOM Certified', image: Nasscom },
    { title: 'IStudio Participation', image: IStudio },
    { title: 'Full-Stack Java Developer Internship', image: Fullstackintern },
    
    
  ];

  return (
    <section className="py-5   "
    style={{
        backgroundColor: '#0d1b2a',
        minHeight: '100vh',

      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold text-primary mb-5 mt-3"
          data-aos="fade-down"
        >
          My Certificates
        </h2>
        <div className="row g-4">
          {certificateData.map((cert, index) => (
            <div
              key={index}
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card shadow h-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{cert.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
