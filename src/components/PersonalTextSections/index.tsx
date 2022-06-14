import { Container } from './styles';

interface PersonalTextSectionsProp {
    title: string;
    description: string;
    titleTwo?: string;
    descriptionTwo?: string;
}

function PersonalTextSections({ title, description, titleTwo, descriptionTwo }: PersonalTextSectionsProp) {
  return (
    <Container>
        <div className="textBox" data-aos="fade-up">
            <h3>{title}</h3>
            <p>{description}</p>
            <h3>{titleTwo}</h3>
            <p>{descriptionTwo}</p>
            <p className="motivational">
              “All your dreams can come true if you have the courage to pursue them”, <br />
              <strong>Walt Disney</strong>.
            </p>
        </div>
    </Container>
  );
};

export default PersonalTextSections;
