import * as C from "./FooterSyled"
import logo from "../../assets/Logo.svg"
import { BsFacebook , BsWhatsapp,BsFillChatDotsFill} from "react-icons/bs"


export const Footer = () => {
    return (
        <C.Container>
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

                  <C.greenLine></C.greenLine>
                <ul className="footer-ulicon">
                    <a href="https://www.facebook.com/"><li><BsFacebook/></li></a>
                   <a href="https://web.whatsapp.com/"><li><BsWhatsapp/></li></a>
                    <a href="https://mail.google.com/mail/u/0/?tab=km#inbox"><li><BsFillChatDotsFill/></li></a>
                  
                </ul>
                <div className="newsletter">
                    <input type='email' placeholder='Inscreva-se na nossa newsletter'/>
                    <button className="inscrever">Increver-se</button>
                </div>
              </div>
        </C.Container>
    )
}