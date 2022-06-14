import { GetStaticProps } from 'next';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import ProjectSection from '../../components/ProjectSection';

interface HomeProps {
    projectMain: any;
    projectsGeneral: any;
    projectFirstTime: any;
    projectUpcoming: any;
}

export default function Projects({ projectMain, projectsGeneral, projectFirstTime, projectUpcoming }: HomeProps) {
    return (
        <ProjectsContainer>
            <Header />

            <main className='container'>
                <ProjectSection title="Main" projects={projectMain} />
                <ProjectSection title="General" projects={projectsGeneral} />
                <ProjectSection title="First Times" projects={projectFirstTime} />
                <ProjectSection title="Upcoming" projects={projectUpcoming} />
            </main>

            <Footer />
        </ProjectsContainer>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const projectMainResponse = await prismic.query(
        [Prismic.Predicates.at('document.type', 'main')],
        { orderings: '[document.first_publications_date desc]' }
    );

    const projectMain = projectMainResponse.results.map(project => ({
        slug: project.uid,
        title: project.data.title,
        type: project.data.type,
        link: project.data.link.url,
        description: project.data.description,
    }))

    const projectsGeneralResponse = await prismic.query(
        [Prismic.Predicates.at('document.type', 'general')],
        { orderings: '[document.first_publications_date desc]' }
    );

    const projectsGeneral = projectsGeneralResponse.results.map(project => ({
        slug: project.uid,
        title: project.data.title,
        type: project.data.type,
        link: project.data.link.url,
        description: project.data.description,
    }))
    
    const projectFirstTimeResponse = await prismic.query(
        [Prismic.Predicates.at('document.type', 'first-time')],
        { orderings: '[document.first_publications_date desc]' }
    );

    const projectFirstTime = projectFirstTimeResponse.results.map(project => ({
        slug: project.uid,
        title: project.data.title,
        type: project.data.type,
        link: project.data.link.url,
        description: project.data.description,
    }))

    const projectUpcomingResponse = await prismic.query(
        [Prismic.Predicates.at('document.type', 'upcoming')],
        { orderings: '[document.first_publications_date desc]' }
    );

    const projectUpcoming = projectUpcomingResponse.results.map(project => ({
        slug: project.uid,
        title: project.data.title,
        type: project.data.type,
        link: project.data.link.url,
        description: project.data.description,
    }))

    return {
        props: {
            projectMain,
            projectsGeneral,
            projectFirstTime,
            projectUpcoming
        },
        revalidate: 86400
    }
}