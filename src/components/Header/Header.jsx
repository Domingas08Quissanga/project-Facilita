import React from 'react';
import { useState } from 'react';
import * as C from './HeaderStyled'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/Logo.svg'
import { BsPersonFill } from "react-icons/bs";
// import { Container } from './styles';



function Header() {
    const [open, setOpen] = useState(false);

    const categorias = [
        {
            id: 1,
            name: "Frutas"
        },
        {
            id: 2,
            name: "Verduras"
        },
        {
            id: 3,
            name: "Vegentais"
        },
    ]

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
                    <Link to='/'>Início</Link>
                </li>
    
               
                <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    Produtos
                    <ul className={open ? 'showSubCategory': 'HideSubCategory'}>
                        {    
                                categorias.map((itens, index) => (
                                    <li key={index}>{itens.name}</li>
                                ))
                        }
                    </ul>
                </li>
                
                <li>
                    <Link to='/Sobre'>Sobre nós</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contatos</Link>
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