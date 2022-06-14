import SectionTitle from '../SectionTitle';
import { Container } from './styles';

function CurrentlyStudying() {
  return (
    <Container>
        <SectionTitle title="#Currently Studying" description="all I currently studying" />
        <div className="study" data-aos="fade-up">            
            <p>• Edge Computing</p>
            <p>• Cloud Computing</p>
            <p>• Consolidating knowledge to create new features in Javascript</p>
            <p>• Typescript</p>
            <p>• NextJS features</p>
            <p className="next">To study next:</p>
            <ul>
                <li>PHP Standard Recommendations (PSR)</li>
                <li>Software Architectures</li>
                <li>Design Patterns</li>
                <li>Tests (PHPUnit and PHPStan)</li>
            </ul>
        </div>
    </Container>
  );
};

export default CurrentlyStudying;
