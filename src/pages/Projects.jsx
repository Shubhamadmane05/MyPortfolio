import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { projects } from '../data/projectsData';
import Navbar from '../components/Navbar';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';
import "./projects.css";

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
      {/* <Navbar /> */}
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
                  <div className="tooltip-wrapper position-absolute top-0 end-0 m-2">
  <Link to={`/projects/${project.id}`} className="text-white">
    <FaEye size={20} />
    <span className="tooltip-text">View Project Details</span>
  </Link>
</div>


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
