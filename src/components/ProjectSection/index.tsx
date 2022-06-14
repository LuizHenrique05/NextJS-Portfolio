import ProjectItem from '../ProjectItem';
import { Container } from './styles';

interface ProjectSectionProps {
    title: string;
    projects: Array<any>;
}

function ProjectSection({ title, projects }: ProjectSectionProps) {
  return (
    <Container>
        <h3>{title}</h3>
        <div>
            {projects.length > 0 
                ? projects.map(project => (
                    <ProjectItem key={project.slug} title={project.title} type={project.type} slug={project.slug} query={title} />
                ))
                : <p className='empty'>...</p>}
        </div>
    </Container>
  );
};

export default ProjectSection;
