import { GetStaticPaths, GetStaticProps } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import ProjectTitle from '../../../components/ProjectTitle'
import LoadingScreen from '../../../components/LoadingScreen'
import { getPrismicClient } from '../../../services/prismic'
import Prismic from '@prismicio/client';
import { ProjectContainer } from '../../../styles/ProjectStyles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head'

interface ProjectProps {
    project: IProject;
}

interface IProject {
    slug: string;
    title: string;
    type: string;
    link: string;
    description: string;
}

export default function Project({project}: ProjectProps) {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    const router = useRouter();

    if(router.isFallback) return <LoadingScreen />;

    return (
        <ProjectContainer>
            <Head>
                <title>{project.title} | My Portfolio - My Project</title>
                <meta name="description" content={project.description} />
                <meta property="og:image" content="/ogimage.png" />
                <meta property="og:image:secure_url" content="/ogimage.png" />
                <meta name="twitter:image" content="/ogimage.png" />
                <meta name="twitter:image:src" content="/ogimage.png" />
                <meta property="og:description" content={project.description}/>
            </Head>
            <Header />
            <ProjectTitle title={project.title} type={project.type}/>

            <main data-aos="fade-up">
                <pre>{project.description}</pre>
                <button type="button">
                    <a target="_blank" href={project.link}>See project</a>
                </button>
            </main>

            <Footer />
        </ProjectContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient();

    const projects = await prismic.query(
        [Prismic.Predicates.dateAfter('document.last_publication_date', '2022-06-12')],
    );

    const paths = projects.results.map(project => ({
        params: {
            slug: project.uid
        }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const prismic = getPrismicClient();
    const { slug } = context.params;
    let query = 'general';
    
    if(slug.includes('first-time')) query = 'first-time';
    if(slug.includes('project-management')) query = 'upcoming';
    if(slug.includes('terraform-on-digitalocean') || slug.includes('docker-kubernetes-digitalocean') || slug.includes('game-library')) query = 'main';

    const response = await prismic.getByUID(query, String(slug), {})

    const project = {
        slug: response.uid,
        title: response.data.title,
        type: response.data.type,
        link: response.data.link.url,
        description: response.data.description[0].text ? response.data.description[0].text : response.data.description
    }

    return {
        props: {
            project
        },
        revalidate: 86400
    }
}