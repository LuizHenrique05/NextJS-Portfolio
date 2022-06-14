import { AiOutlineGithub,AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';
  
function Footer() {
    function handleRedirect(url: string) {
        window.open(url);
    }

    function handleScrollTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    return (
        <Container>
            <div className="container">
                <button type="button" onClick={handleScrollTop}>Back to the top</button>
                <section>
                    <AiOutlineGithub onClick={() => handleRedirect('https://github.com/LuizHenrique05')}/>
                    <AiFillLinkedin onClick={() => handleRedirect('https://www.linkedin.com/in/luiz-henrique-40b7b5171/')}/>
                </section>
            </div>
        </Container>
    );
}

export default Footer;