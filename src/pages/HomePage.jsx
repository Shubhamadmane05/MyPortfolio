import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import myPhoto from '../assets/Myphoto.JPG';
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
import About from "./About";

const HomePage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <section
                className="hero-section d-flex align-items-center"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#0d1b2a',
                    color: 'white',
                    paddingTop: '80px', 
                    overflow: 'hidden',
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Side Text */}
                        <div className="col-md-6 text-center text-md-start">
                            <h1 className="display-4 fw-bold mb-3 ">
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

