import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from '../../styles/PersonalStyles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Head from 'next/head';
import PersonalTextSections from '../../components/PersonalTextSections';

export default function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <Container>
            <Head>
                <title>Personal | My Portfolio</title>
                <meta name="description" content="I'm a Full Stack Web Developer and here I show a little about myself, my projects, projects I'm doing." />
                <meta property="og:image" content="/ogimage.png" />
                <meta property="og:image:secure_url" content="/ogimage.png" />
                <meta name="twitter:image" content="/ogimage.png" />
                <meta name="twitter:image:src" content="/ogimage.png" />
                <meta property="og:description" content="I'm a Full Stack Web Developer and here I show a little about myself, my projects, projects I'm doing."/>
            </Head>
            <Header />

            <main className='container'>
                <PersonalTextSections 
                    title="Personal Resume" 
                    description="Graduated in Computer Science from Univem. Currently working as a Full Stack Web Developer for almost 3 years. I started in the development area as a frontend developer (with HTML, CSS, JS and frameworks like Scss, Stylus, jQuery) and then I kept improving until the opportunity arose to start working with the backend as well (with Laravel), but I keep studying frequently trying to see all kinds of knowledge from other backend frameworks like Express (with Node), other databases (MySQL, Postgres, MongoDB), infrastructure knowledge (Cloud providers, Docker, Kubernetes clusters, CI/CD pipelines), software architecture, design patterns. While I'm getting better at creating new features and projects."
                    titleTwo="Professional Ambitions"
                    descriptionTwo="Currently, I want to improve even more as a developer, while studying important concepts in areas of expertise that I want to work on in the future. In the future I want to work with the following areas: Team management (being the technical leader of a team), Project planning (understanding the requirements and business rules, to design the entire project model, from the frontend and backend technologies to use , database and its model, cloud or on-premise infrastructure ), however, not as a main focus but as a part of the responsibilities, getting my hands on the code"
                />
            </main>

            <Footer />
        </Container>
    );
}