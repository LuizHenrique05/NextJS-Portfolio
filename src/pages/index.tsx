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

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  
  return (
    <HomeContainer>
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
