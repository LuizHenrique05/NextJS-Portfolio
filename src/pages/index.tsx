import { HomeContainer } from '../styles/HomeStyles'
import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import ProfessionalResume from '../components/ProfessionalResume';
import CurrentlyStudying from '../components/CurrentlyStudying';
import AlertMessage from '../components/AlertMessage';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  
  return (
    <HomeContainer>
      <Head>
        <title>Home | My Portfolio - Myself</title>
        <meta name="description" content="I'm a Full Stack Web Developer and here I show a little about myself, my projects, projects I'm doing." />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:description" content="I'm a Full Stack Web Developer and here I show a little about myself, my projects, projects I'm doing."/>
      </Head>
      <Header />

      <main className="container">
        <HomeHero />
        <ProfessionalResume />
        <CurrentlyStudying />
        <AlertMessage message="Portfolio will be updated frequently" />
      </main>

      <Footer />
    </HomeContainer>
  );
}
