import { projectData } from '../pages/api/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              logoImg={project.logoImg}
              loomLink={project.loomLink}
              gitHubLink={project.gitHubLink}
              deployedLink={project.deployedLink}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
