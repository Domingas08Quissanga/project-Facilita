import { Container } from "./FooterSyled"

import logo from "../../assets/Logo.svg"


export const Footer = () => {
    return (
        <Container>
            <div>
                <div id='logo'>
                    <img src={logo} alt="logo" width="50px" />
                    <h4>Facilita</h4>
                </div>
                <ul className="footer-ul">
                    <li>Termos de Privacidade</li>
                   <li>Segurança</li>
                  <li>Informação</li>
                </ul>
                <greeLine></greeLine>
                <ul className="footer-ul">
                    <li>logo1</li>
                    <li>logo2</li>
                    <li>logo3</li>
                </ul>
                <div className="newsletter">
                    <input type='email' placeholder='Inscreva-se na nossa newsletter'/>
                    <button className="inscrever">Increver-se</button>
                </div>
            </div>
        </Container>
    )
}