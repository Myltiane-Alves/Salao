import { FaAt, FaLinkedin, FaYoutube } from 'react-icons/fa';

import {
    ContentFooter
}
    from './styled';

const Footer = () => {
    return (
        <>
            <ContentFooter>
                <p>Todos os Direits Reservados Myltiane Alves</p>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/myltiane-alves-de-lima-45025216a/">L</a>
                        <a href="https://www.youtube.com/">Y</a>
                        <a>E</a>
                    </li>
                </ul>
            </ContentFooter>
        </>
    )
}

export default Footer;