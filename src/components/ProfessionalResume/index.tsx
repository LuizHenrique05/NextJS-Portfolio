import SectionTitle from '../SectionTitle';
import { Container } from './styles';

function ProfessionalResume() {
  return (
    <Container>
        <SectionTitle title="#Professional Resume" description="all you need to know about my skills" />
        <div className="professionals" data-aos="fade-up">
            <span>
                Creating web applications from scratch till implementation with <strong>Docker</strong> and 
                <strong> Kubernetes (Kind)</strong>. Working locally and in a cloud provider, provisioning infrastructure with <strong>Terraform</strong>, 
                CI/CD pipelines at <strong>Github</strong>, monitoring them with <strong>Grafana</strong> and <strong>Prometheus</strong> (applying devops culture).
            </span>
            <p>• Frontend Languages/Frameworks:</p>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Scss</li>
                <li>Stylus</li>
                <li>JS</li>
                <li>jQuery</li>
                <li>ReactJS</li>
                <li>NextJS</li>
            </ul>
            <p>• Backend Languages/Frameworks:</p>
            <ul>
                <li>Laravel (main)</li>
                <li>Express (secondary)</li>
            </ul>
            <p>• Databases:</p>
            <ul>
                <li>MySQL</li>
                <li>Postgres</li>
                <li>MongoDB</li>
            </ul>
            <p>• Website Hosting:</p>
            <ul>
                <li>Digital Ocean</li>
                <li>Github Pages</li>
                <li>Heroku</li>
                <li>Vercel</li>
            </ul>
            <p>• Extra tools:</p>
            <ul>
                <li>Visual Studio Code</li>
                <li>WSL2</li>
                <li>Github</li>
                <li>Docker</li>
                <li>Kubernetes (Kind - K3S)</li>
                <li>Prometheus</li>
                <li>Grafana</li>
                <li>Figma</li>
                <li>Slack</li>
                <li>FileZilla</li>
            </ul>
            <p>• Languages:</p>
            <ul>
                <li>Brazilian Portguese (main)</li>
                <li>English (high)</li>
                <li>Spanish (medium)</li>
            </ul>
            <p>• Platforms:</p>
            <ul>
                <li>WordPress</li>
                <li>TrayCommerce</li>
                <li>TrayCorp Fbits</li>
            </ul>
        </div>
    </Container>
  );
};

export default ProfessionalResume;
