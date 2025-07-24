// import React from "react";
// import { Link } from 'react-router-dom';
// import Navbar from "../components/Navbar";
// import myPhoto from '../assets/Myphoto.JPG';
// import Projects from "./Projects";
// import Certificates from "./Certificates";
// import Contact from "./Contact";
// import About from "./About";
// import Resume from "./Resume";

// const HomePage = () => {
//     return (
//         <>
//             <Navbar />

//             <section
//                 className="hero-section d-flex align-items-center"
//                 style={{
//                     minHeight: '100vh',
//                     background: 'linear-gradient(to right, #8ec5fc, #e0c3fc)',
//                 }}
//             >
//                 <div className="container">
//                     <div className="row align-items-center">
//                         {/* Left Side Text */}
//                         <div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
//                             <h1 className="display-4 fw-bold mb-3">
//                                 Hello<br />I'm Shubham
//                             </h1>
//                             <p className="lead mb-4">
//                                 I am a committed Full Stack Java Developer with a robust foundation in Java, Spring Boot, and React.js.
//                                 I have practical experience in creating scalable and user-friendly web applications.
//                                 I am eager to leverage my skills and innovative mindset within a progressive organization.
//                             </p>

//                             {/* Buttons Side by Side */}
//                             <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
//                                 <Link to="/projects" className="text-decoration-none">
//                                     <button
//                                         className="btn btn-lg text-white fw-semibold shadow"
//                                         style={{
//                                             background: 'linear-gradient(to right, #00b4db, #0083b0)',
//                                             border: 'none',
//                                             borderRadius: '50px',
//                                             padding: '10px 30px',
//                                         }}
//                                     >
//                                         🚀 See My Projects
//                                     </button>
//                                 </Link>

//                                 <Link to="/resume" className="text-decoration-none">
//                                     <button
//                                         className="btn btn-lg text-white fw-semibold shadow"
//                                         style={{
//                                             background: 'linear-gradient(to right, #00b4db, #0083b0)',
//                                             border: 'none',
//                                             borderRadius: '50px',
//                                             padding: '10px 30px',
//                                         }}
//                                     >
//                                         📄 See My Resume
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* Right Side Image */}
//                         <div className="col-md-6 d-flex justify-content-center">
//                             <img
//                                 src={myPhoto}
//                                 alt="Shubham"
//                                 className="img-fluid shadow"
//                                 style={{
//                                     width: '400px',
//                                     height: '400px',
//                                     objectFit: 'cover',
//                                     borderRadius: '100%',
//                                     border: '6px solid white',
//                                 }}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Other Sections */}
//             <About />
//             <Projects />
//             <Certificates />
//             <Contact />
//         </>
//     );
// };

// export default HomePage;


import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import myPhoto from '../assets/Myphoto.JPG'; // Replace with your image path
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
import About from "./About";

const HomePage = () => {
    return (
        <>
            <Navbar />

            <section
                className="hero-section d-flex align-items-center"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#0d1b2a',
                    color: 'white',
                    overflow: 'hidden'
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Side Text */}
                        <div className="col-md-6 text-center text-md-start">
                            <h1 className="display-4 fw-bold mb-3">
                                Hello<br />I'm Shubham
                            </h1>
                            <p className="lead mb-4">
                                I am a committed Full Stack Java Developer with expertise in Java, Spring Boot, and React.js.<br />
                                I specialize in building scalable and elegant web applications.
                            </p>

                            {/* Buttons Side by Side */}
                            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
                                <Link to="/projects" className="text-decoration-none">
                                    <button className="btn btn-success btn-lg rounded-pill px-4">
                                        🚀 See My Projects
                                    </button>
                                </Link>

                                <Link to="/resume" className="text-decoration-none">
                                    <button className="btn btn-outline-light btn-lg rounded-pill px-4">
                                        📄 See My Resume
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side Circular Image */}
                        <div className="col-md-6 d-flex justify-content-center mt-5 mt-md-0">
                            <div
                                style={{
                                    width: '400px',
                                    height: '400px',
                                    borderRadius: '50%',
                                    backgroundImage: `url(${myPhoto})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: '0 0 20px rgba(0,0,0,0.4)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Sections */}
            <About />
            <Projects />
            <Certificates />
            <Contact />
        </>
    );
};

export default HomePage;
