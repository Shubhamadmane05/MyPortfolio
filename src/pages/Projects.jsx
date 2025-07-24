// import React from 'react';
// import Navbar from '../components/Navbar';
// import { FaGithub, FaLaptopCode } from 'react-icons/fa';


// const Projects = () => {
//     const cardStyle = {
//         backgroundColor: '#b98eb2ff',
//         color: '#fff',
//         transition: '0.3s',
//     };

//     const btnStyle = {
//         backgroundColor: '#fff',
//         color: '#b98eb2ff',
//         border: 'none',
//         fontWeight: '500',
//     };

//     return (
//         <section id="projects" className="py-5 " 
//         style={{
//         backgroundColor: '#0d1b2a',
//         minHeight: '100vh',}}
//         >
//             <Navbar />
//             <div className="container ">
//                 <h2 className="text-center fw-bold mb-5 mt-5 text-success">My Projects</h2>
//                 <div className="row g-4 justify-content-center">

//                     {/* Project 1 */}
//                     <div className="col-md-5">
//                         <div
//                             className="card border-0 shadow h-100"
//                             style={cardStyle}
//                             data-aos="fade-up"
//                         >

//                             <div className="card-body">
//                                 <h5 className="card-title fw-bold">Institute Management System</h5>
//                                 <p className="small">Nov '24 — March '25</p>
//                                 <p className="card-text">
//                                     A full-featured app using Java Spring Boot, React.js, and MySQL to manage student records, courses, attendance, and staff
//                                     with role-based access.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Project 2 */}
//                     <div className="col-md-5">
//                         <div
//                             className="card border-0 shadow h-100"
//                             style={cardStyle}
//                             data-aos="fade-up"
//                         >

//                             <div className="card-body">
//                                 <h5 className="card-title fw-bold">Library Management System with Security</h5>
//                                 <p className="small">Sep '24 — Dec '24</p>
//                                 <p className="card-text">
//                                     Web app with Spring Boot + React + JWT. Admins manage books, users borrow/track books securely. Uses Redux and role-based access.
//                                 </p>
//                                 <a
//                                     href="https://github.com/Shubhamadmane05/Shubhamadmane05-Library-Management-System-with-Security"
//                                     className="btn btn-sm mt-2 d-flex align-items-center gap-2"
//                                     style={btnStyle}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     <FaGithub /> View on GitHub
//                                 </a>

//                             </div>
//                         </div>
//                     </div>

//                     {/* Project 3 */}
//                     <div className="col-md-5">
//                         <div
//                             className="card border-0 shadow h-100"
//                             style={cardStyle}
//                             data-aos="fade-up"
//                         >

//                             <div className="card-body">
//                                 <h5 className="card-title fw-bold">Personal Portfolio Website</h5>
//                                 <p className="card-text">
//                                     A clean portfolio built using React and Bootstrap with responsive design, showcasing skills, contact, and project sections.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Projects;


import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { projects } from '../data/projectsData';
import Navbar from '../components/Navbar';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';

const Projects = () => {
  const cardStyle = {
    backgroundColor: '#b98eb2ff',
    color: '#fff',
    position: 'relative',
  };

  const btnStyle = {
    backgroundColor: '#fff',
    color: '#b98eb2ff',
    border: 'none',
    fontWeight: '500',
  };

  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: '#0d1b2a', minHeight: '100vh' }}
    >
      <Navbar />
      <div className="container">
        <h2 className="text-center fw-bold mb-5 mt-5 text-success">My Projects</h2>
        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div className="col-md-5" key={project.id}>
              <div className="card border-0 shadow h-100" style={cardStyle}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="small">{project.date}</p>
                  <p>{project.shortDescription}</p>

                  {/* Eye Icon Link */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="position-absolute top-0 end-0 m-2 text-white"
                    title="View Project Details"
                  >
                    <FaEye size={20} />
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      className="btn btn-sm mt-3 d-flex align-items-center gap-2"
                      style={btnStyle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
