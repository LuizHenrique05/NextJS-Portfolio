import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/me.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <div className="image-div">
        <img src={picture} alt="My picture" />
      </div>
      <div className='content-div'>
        <TextContainer>
          <h1>Hi,</h1>
          <h2>I'm Luiz Henrique</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//My presentation</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">Luiz Henrique,</span>
            </div>
            <div>
              Lastname: <span className="blue">Simba Costa</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Current_job</span> {'\u007B'}
            <div>
              Occupation: <span className="blue">Full Stack Web Dev,</span>
            </div>
            <div>
              Company: <span className="blue">Eficaz Marketing</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
