import { Container } from './styles';

interface ProjectTitleProps {
    title: string;
    type: string;
}

function ProjectTitle({ title, type }: ProjectTitleProps) {
  return (
    <Container>
        <div className="overlay" />
        <section>
            <h1>{title}</h1>
            <h2>Type: {type}</h2>
        </section>
    </Container>
  );
};

export default ProjectTitle;
