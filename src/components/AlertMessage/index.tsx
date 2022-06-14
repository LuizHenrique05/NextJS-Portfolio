import { Container } from './styles';

interface AlertMessageProps {
    message: string;
}

function AlertMessage({ message }: AlertMessageProps) {
  return (
    <Container data-aos="zoom-in">
        <span>//{message}</span>
    </Container>
  );
};

export default AlertMessage;
