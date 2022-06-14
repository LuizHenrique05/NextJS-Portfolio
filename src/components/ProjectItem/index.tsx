import { Container } from './styles';
import Link from 'next/link';

interface ProjectItemProps {
    title: string;
    type: string;
    slug: string;
    query: string;
}

function ProjectItem({ title, type, slug, query }: ProjectItemProps) {
    return (
        <Container>
            <Link href={`/projects/${slug}`}>
                <a>
                    <div className="overlay" />
                    <section>
                        <h1>{title}</h1>
                        <h2>{type}</h2>
                    </section>
                </a>
            </Link>
        </Container>
    );
};

export default ProjectItem;
