import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Container, Content } from './styled';

interface MobileMenuProps {
    openMobileMenu(): void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ openMobileMenu }) => {
    return(
        <>
          <Container>
            <Content>
                <a href="#home" className="logo">
                    ELES E ELAS
                </a>
               
                <nav>       
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Agendamento</a></li>
                           
                        <Link to="/signup">
                            <button type="button">Register</button>
                        </Link>
                    </ul>
                    <button className="closeMenu" type="button" onClick={openMobileMenu}>
                        <GrFormClose />
                    </button>
                </nav>
                
            </Content>
          </Container>  
        </>
    )
}

export default MobileMenu;

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