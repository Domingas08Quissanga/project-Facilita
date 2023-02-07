import React from 'react';
import * as C from './HeaderStyled'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/Logo.svg'
import { BsPersonFill } from "react-icons/bs";
// import { Container } from './styles';

function Header() {
  return (
    <C.Header>
        <C.Nav>
            <C.logo>
                <Link to='/'>
                    <img src={logo} alt="" />
                    <span>Faci</span>lita
                </Link>
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
                 <Link to='/Login'>
                     <span>Entrar</span>   
                     <span><BsPersonFill/></span> 
                 </Link>
             
            </C.cardBtnHeader>
        </C.Nav>
    </C.Header>
  );
}

export default Header;