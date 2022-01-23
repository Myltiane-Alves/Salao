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
                        <a href="https://www.linkedin.com/in/myltiane-alves-de-lima-45025216a/"><FaLinkedin  className="icon"/></a>
                        <a href="https://www.youtube.com/"><FaYoutube  className="icon"/></a>
                        <a><FaAt className="icon" /> </a>
                    </li>
                </ul>
            </ContentFooter>
        </>
    )
}

export default Footer;