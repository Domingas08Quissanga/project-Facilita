import React from 'react';
import * as C from "./FooterSyled"
import logo from "../../assets/Logo.svg"
import { FacebookLogo, WhatsappLogo, ChatTeardropDots } from 'phosphor-react'


export const Footer = () => {
    return (
        <C.Container>
            <div>
                <div id='logo'>
                    <img src={logo} alt="logo" width="50px" />
                    <h4>Faci<span>lita</span></h4>
                </div>
                <ul className="footer-ul">
                    <li>Termos de Privacidade</li>
                    <li>Segurança</li>
                    <li>Informação</li>
                </ul>

                <C.greenLine></C.greenLine>
                <ul className="footer-ulicon">
                    <a href="https://www.facebook.com/"><li><FacebookLogo color={"white"} size={40} /></li></a>
                    <a href="https://web.whatsapp.com/"><li><WhatsappLogo color={"white"} size={40} /></li></a>
                    <a href="https://mail.google.com/mail/u/0/?tab=km#inbox"><li><ChatTeardropDots color={"white"} size={40} /></li></a>
                </ul>
                <div className="newsletter">
                    <input type='email' placeholder='Inscreva-se na nossa newsletter' />
                    <button className="inscrever">Increver-se</button>
                </div>
            </div>
        </C.Container>
    )
}