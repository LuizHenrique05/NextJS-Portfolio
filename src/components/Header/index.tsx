import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
    return (
        <Container>
            <ul>
                <NavLink title="Home" path="/" />
                <NavLink title="Projects" path="/projects" includes />
                <NavLink title="Personal" path="/personal" />
            </ul>
        </Container>
    )
}

export default Header