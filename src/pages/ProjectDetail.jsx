import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';
import Navbar from '../components/Navbar';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    if (!project) return <p className="text-center text-danger">Project not found.</p>;

    return (
        <section style={{ backgroundColor: '#0d1b2a', minHeight: '100vh', color: '#fff' }}>
            <Navbar />
            <div className="mt-5 pt-5 ">
                <button
                    className="btn btn-outline-light"
                    onClick={() => navigate('/projects')}
                >
                    ← Back to Projects
                </button>
            </div>
            <div className="container py-5">
                <h2 className="text-success fw-bold">{project.title}</h2>
                <p className="text-muted">{project.date}</p>
                <p>{project.fullDescription}</p>

                <h5 className="mt-4">Tech Stack:</h5>
                <ul>
                    {project.tech.map((t, i) => (
                        <li key={i}>{t}</li>
                    ))}
                </ul>

                {project.github && (
                    <div className="mt-4">
                        <h5>GitHub:</h5>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light btn-sm"
                        >
                            View Source Code
                        </a>
                    </div>
                )}



                {project.video && (
                    <div className="mt-4">
                        <h5>Demo Video:</h5>
                        <video src={project.video} controls width="100%" />
                    </div>
                )}

                {project.images.length > 0 && (
                    <div className="mt-4">
                        <h5>Screenshots:</h5>
                        <div className="row g-3">
                            {project.images.map((img, i) => (
                                <div className="col-md-4" key={i}>
                                    <img
                                        src={img}
                                        alt={`screenshot-${i}`}
                                        className="img-fluid rounded shadow"
                                        style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back button */}
                <div className="mt-5">
                    <button
                        className="btn btn-outline-light"
                        onClick={() => navigate('/projects')}
                    >
                        ← Back to Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
