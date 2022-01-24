
import 
{
    Container
}
 from './styled';

const Header = () => {
    return(
        <>
          <Container>
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
          </Container>  
        </>
    )
}

export default Header;