import React from 'react';
import Shubham_Admane_cv1 from '../assets/Shubham_Admane_cv1.jpg';
import Shubham_Admane_cv2 from '../assets/Shubham_Admane_cv2.jpg';
import resumePDF from '../assets/Shubham_Admane_cv.pdf';
import Navbar from '../components/Navbar';

const Resume = () => {
    return (
        <section
            className="pt-5"
            style={{
                backgroundColor: '#0d1b2a',
                minHeight: '100vh',
            }}
        >
            <Navbar />

            {/* Download Button (Top) */}
            <div className="container my-4">
                <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-3">
                    <a
                        href={resumePDF}
                        download="Shubham_Resume.pdf"
                        className="btn btn-info text-white fw-semibold"
                        style={{
                            background: 'linear-gradient(to right, #00b4db, #0083b0)',
                            borderRadius: '50px',
                            padding: '10px 30px',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        📥 Download Resume (PDF)
                    </a>
                </div>
            </div>

            {/* Resume Content */}
            <div className="container text-center">
                <h2 className="mb-4 text-success fw-bold">My Resume</h2>

                {/* Resume Images */}
                <div className="mb-4 px-2">
                    <img
                        src={Shubham_Admane_cv1}
                        alt="Resume Page 1"
                        className="img-fluid shadow rounded mb-4 w-100"
                        style={{ maxWidth: '800px' }}
                    />
                    <img
                        src={Shubham_Admane_cv2}
                        alt="Resume Page 2"
                        className="img-fluid shadow rounded w-100"
                        style={{ maxWidth: '800px' }}
                    />
                </div>

                {/* Download Button (Bottom) */}
                <div className="d-grid justify-content-center mb-5 px-5 pb-5">
                    <a
                        href={resumePDF}
                        download="Shubham_Resume.pdf"
                        className="btn btn-info text-white fw-semibold"
                        style={{
                            background: 'linear-gradient(to right, #00b4db, #0083b0)',
                            borderRadius: '50px',
                            padding: '10px 30px',
                            textDecoration: 'none'
                        }}
                    >
                        📥 Download Resume (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
