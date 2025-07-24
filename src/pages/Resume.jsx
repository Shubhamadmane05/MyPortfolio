
import React from 'react';
import Shubham_Admane_cv1 from '../assets/Shubham_Admane_cv1.jpg';
import Shubham_Admane_cv2 from '../assets/Shubham_Admane_cv2.jpg';
import resumePDF from '../assets/Shubham_Admane_cv.pdf';

const Resume = () => {
    return (
        <section
            className="py-5 mt-5"
            style={{
                backgroundColor: '#0d1b2a',
                minHeight: '100vh',
            }}
        >
            {/* Download Button */}
            <div className="d-flex justify-content-end mx-3">
                <a
                    href={resumePDF}
                    download="Shubham_Resume.pdf"
                    className="btn btn-info text-white fw-semibold"
                    style={{
                        background: 'linear-gradient(to right, #00b4db, #0083b0)',
                        borderRadius: '50px',
                        padding: '10px 30px',
                        textDecoration: 'none',
                    }}
                >
                    📥 Download Resume (PDF)
                </a>
            </div>

            <div className="container text-center">
                <h2 className="mb-4 text-success fw-bold">My Resume</h2>

                {/* Resume Page Images */}
                <div className="mb-4">
                    <img
                        src={Shubham_Admane_cv1}
                        alt="Resume Page 1"
                        className="img-fluid shadow rounded mb-4"
                        style={{ maxWidth: '700px' }}
                    />
                    <img
                        src={Shubham_Admane_cv2}
                        alt="Resume Page 2"
                        className="img-fluid shadow rounded"
                        style={{ maxWidth: '700px' }}
                    />
                </div>

                {/* Download Button */}
                <a
                    href={resumePDF}
                    download="Shubham_Resume.pdf"
                    className="btn btn-info text-white fw-semibold mb-5"
                    style={{
                        background: 'linear-gradient(to right, #00b4db, #0083b0)',
                        borderRadius: '50px',
                        padding: '10px 30px',
                        textDecoration: 'none',
                    }}
                >
                    📥 Download Resume (PDF)
                </a>
            </div>
        </section>
    );
};

export default Resume;
