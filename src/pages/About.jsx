
import React from 'react';
import myPhoto from '../assets/Myphoto.JPG';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
    {/* <Navbar/> */}
    <section
      id="about"
      className="py-5 align-content-center"
      style={{
        backgroundColor: '#0d1b2a',
        minHeight: '100vh',
         
      }}
    >
      <div className="container">
        <h2 className="text-center text-success fw-bold mb-5 mt-5" data-aos="fade-down">
          About Me
        </h2>

        <div className="row ">
          {/* Profile Image */}
          <div className="col-md-4 text-white mb-4 mb-md-0 d-flex justify-content-start" data-aos="zoom-in">
            <div
              className="rounded-circle overflow-hidden shadow"
              style={{
                width: '250px',
                height: '250px',
              }}
            >
              <img
                src={myPhoto}
                alt="My Photo"
                className="img-fluid"
                style={{
                  width: '100%',
                  height: '100%',

                }}
              />
            </div>
          </div>


          {/* Bio */}
          <div className="col-md-8 text-white" data-aos="fade-left">
            <p className="fs-5">
              Hello! I'm <strong>Shubham Admane</strong>, a passionate Full Stack Developer experienced in building web
              applications using <strong>Java (Spring Boot)</strong> and <strong>React.js</strong> / <strong>Next.js</strong>.
            </p>
            <p className="fs-5">
              I enjoy solving real-world problems through clean, maintainable code and continuously learning new technologies.
            </p>


            {/* Education Section */}
            <h5 className="mt-4 fw-semibold text-success">Education</h5>
            <ul className="ps-3">
              <li>
                <strong>Bachelor's of Engineering in Computer Science</strong>, Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU) — <em>GPA: 7.08</em><br />
                <small>Jul '19 — Jun '23 | Nagpur</small>
              </li>
              <li>
                <strong>HSC in Science</strong>, Bhiwapur Mahavidyalaya Bhiwapur<br />
                <small>Jun '18 — May '19 | Bhiwapur</small>
              </li>
              <li>
                <strong>SSC</strong>, Bhiwapur Education Society Boys High School<br />
                <small>Jun '16 — Apr '17 | Bhiwapur</small>
              </li>
            </ul>

            {/* Interests, Languages, Soft Skills */}
            <div className="row mt-4">
              <div className="col-md-4">
                <h6 className="text-success fw-semibold">Interests</h6>
                <ul className="ps-3">
                  <li>Travelling</li>
                  <li>Playing Cricket</li>
                  <li>Swimming</li>
                </ul>
              </div>

              <div className="col-md-4">
                <h6 className="text-success fw-semibold">Languages</h6>
                <ul className="ps-3">
                  <li>English</li>
                  <li>Hindi</li>
                  <li>Marathi</li>
                </ul>
              </div>

              <div className="col-md-4">
                <h6 className="text-success fw-semibold">Soft Skills</h6>
                <ul className="ps-3">
                  <li>Problem Solving</li>
                  <li>Adaptability</li>
                  <li>Time Management</li>
                  <li>Communication Skills</li>
                  <li>Team Collaboration</li>
                </ul>
              </div>
            </div>



            <h5 className="mt-4 fw-semibold">Tech Stack</h5>

            <div className="mt-3">
              {/* Backend */}
              <p className="mb-1 fw-bold text-success">Backend:</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">Java</span>
                <span className="badge bg-danger">Spring Boot</span>
                <span className="badge bg-warning text-dark">Microservices</span>
              </div>

              {/* Frontend */}
              <p className="mb-1 fw-bold text-success">Frontend:</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-dark">Next.js</span>
                <span className="badge bg-info text-dark">React.js</span>
                <span className="badge bg-warning text-dark">HTML</span>
                <span className="badge bg-secondary">CSS</span>
                <span className="badge bg-warning text-dark">JavaScript</span>
                <span className="badge bg-primary">TypeScript</span>
                <span className="badge bg-purple">Bootstrap</span>
              </div>

              {/* Tools & Platforms */}
              <p className="mb-1 fw-bold text-success">Tools & Platforms:</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-dark">VS Code</span>
                <span className="badge bg-dark">IntelliJ IDEA</span>
                <span className="badge bg-dark">Eclipse</span>
                <span className="badge bg-warning text-dark">Postman</span>
                <span className="badge bg-danger">Git</span>
              </div>
              <p className="mb-1 fw-bold text-success">Database:</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-success">MySQL</span>
                <span className="badge bg-danger">MongoDB</span>
              </div>

              {/* Libraries & Services */}
              <p className="mb-1 fw-bold text-success">Libraries & Services:</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-info text-dark">WebSockets</span>
                <span className="badge bg-primary">NextAuth</span>
                <span className="badge bg-dark">Twilio</span>
                <span className="badge bg-success">JavaMail</span>
              </div>
            </div>

          </div>
        </div>

        {/* Experience Section */}
        <div className="row text-white mt-5">
          <h3 className="text-success fw-bold mb-4" data-aos="fade-up">Experience</h3>

          {/* Full Stack Developer Intern */}
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="card h-100 bg-transparent border border-secondary text-white">
              <div className="card-body">
                <h5 className="fw-bold">Full Stack Developer Intern <span className="text-muted">| GBM Soft Tech</span></h5>
                <p className="mb-1"><strong>Sep '24 — April '25</strong> | Pune, India</p>
                <ul className="ps-3">
                  <li>Designed and implemented RESTful APIs using Java and Spring Boot.</li>
                  <li>Spearheaded React.js UI development, improving load time by 20%.</li>
                  <li>Integrated Next.js API routes for seamless backend communication.</li>
                  <li>Conducted code reviews for maintainable and scalable code.</li>
                  <li>Participated in Agile sprint planning and daily stand-ups.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Java Mentor */}
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="card h-100 bg-transparent border border-secondary text-white">
              <div className="card-body">
                <h5 className="fw-bold">Java Mentor <span className="text-muted">| Naresh I Technologies</span></h5>
                <p className="mb-1"><strong>Oct '23 — Apr '24</strong> | Hyderabad, India</p>
                <ul className="ps-3">
                  <li>Reviewed code to ensure efficiency and maintainability.</li>
                  <li>Guided students through real-world debugging challenges.</li>
                  <li>Provided feedback to improve coding and logical skills.</li>
                  <li>Mentored in Core Java, OOP, and hands-on projects.</li>
                  <li>Prepared students for interviews with mock sessions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Internship - Full Stack Java Developer */}
          <div className="col-md-6 mb-4" data-aos="fade-up">
            <div className="card h-100 bg-transparent border border-secondary text-white">
              <div className="card-body">
                <h5 className="fw-bold">Internship - Full Stack Java Developer <span className="text-muted">| [Company Name]</span></h5>
                <p className="mb-1"><strong>Jan '23 — May '23</strong></p>
                <ul className="ps-3">
                  <li>Developed full web apps using Java Spring Boot and React.js.</li>
                  <li>Used MySQL for data storage and management.</li>
                  <li>Built RESTful APIs and implemented user authentication.</li>
                  <li>Created responsive user interfaces with modern design.</li>
                  <li>Worked in a professional software team environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;

