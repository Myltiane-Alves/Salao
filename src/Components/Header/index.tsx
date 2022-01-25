
import { Container, Content } from './styled';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useCallback, useState } from 'react';
import MobileMenu from './Mobile';
const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const OpenMobileMenu = useCallback(() => {
      setMobileMenu(oldValue => !oldValue);
    }, []);
    
    return(
        <>
          <Container>
            <Content>
                <div>
                    <a href="#home" className="logo">
                        ELES E ELAS
                    </a>
                </div>

                <div className="desktop">   
                    <nav>       
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Sobre</a></li>
                            <li><a href="">Contato</a></li>
                            <li><a href="">Agendamento</a></li>
                           
                        </ul>
                        <div className="footer">
                            <button type="button">Login</button>
                        </div>

                    </nav>
                </div>
            </Content>
          </Container>  
        </>
    )
}

export default Header;

/*

     <div className="overlay"></div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Agendamento</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Agendamento</a></li>

                <div className="footer">
                    <button type="button">Login</button>
                </div>
                </ul>

*/