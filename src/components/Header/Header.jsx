import React from 'react';
import * as C from './HeaderStyled'
import { Link } from 'react-router-dom';
import imgUser from '../../assets/images/users/masculino.png'
import logo from '../../assets/images/logo/Logo.svg'
// import { Container } from './styles';

function Header() {
  return (
    <C.Header>
        <C.Nav>
             <C.logo>
                <cardLogo> <Link to='/'>
                <img src={logo} alt="" />
                </Link>
                </cardLogo>
        
                <Link to='/'><span>Faci</span>lita</Link>
           </C.logo>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/Produtos'>Produtos</Link>
                </li>
                <li>
                    <Link to='/Sobre'>Sobre nos</Link>
                </li>
                <li>
                    <Link to='/Contatos'>Contatos</Link>
                </li>
            </ul>
            <C.cardBtnHeader>
                <Link to='/Login'>Entrar </Link>
                <C.cardImgHeader>
                    <img src={imgUser} alt="" />
                </C.cardImgHeader>
            </C.cardBtnHeader>
        </C.Nav>
    </C.Header>
  );
}

export default Header;