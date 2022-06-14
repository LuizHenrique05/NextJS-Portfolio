import { HomeContainer } from '../styles/HomeStyles'
import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import ProfessionalResume from '../components/ProfessionalResume';
import CurrentlyStudying from '../components/CurrentlyStudying';
import AlertMessage from '../components/AlertMessage';
import Footer from '../components/Footer';

export default function Home() {
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
