import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section className="project-container" id="project">
            <div>
                <h2 className="project-title text-primary text-4xl p-5 tracking-wider">Projects</h2>
                <div className="projects">
                    {projects.map((project, id) => {
                        return <ProjectCard  key={id} project={project} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;