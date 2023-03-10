import React from 'react';
import * as C from './HeaderStyled'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/Logo.svg'
import { BsPersonFill } from "react-icons/bs";
import { ShoppingCart } from 'phosphor-react'
// import { Container } from './styles';


function Header() {
    return (
        <C.Header>
            <C.Nav>
                <C.logo>
                    <Link to='/'>
                        <img src={logo} alt="" />
                        <span>Faci<small>lita</small></span>
                    </Link>
                </C.logo>
                <ul>
                    <li>
                        <Link to='/'>Início</Link>
                    </li>

                    <C.ProductNavegation>
                        Produtos

                        <section>
                            <div>
                                <Link to='/Frutas'>
                                    Frutas
                                </Link>

                                <Link to='/Verduras'>
                                    Verduras
                                </Link>

                                <Link to='/Vegentais'>
                                    Vegentais
                                </Link>
                            </div>
                        </section>
                    </C.ProductNavegation>

                    <li>
                        <Link to='/Sobre'>Sobre nós</Link>
                    </li>

                    <li>
                        <Link to='/Contact'>Contatos</Link>
                    </li>
                </ul>

                <section>
                    <C.cardBtnHeader>
                        <Link to='/Login'>
                            <span>Entrar</span>
                            <BsPersonFill size={20} />
                        </Link>
                    </C.cardBtnHeader>

                    <C.CartContainer>
                        <Link to='/Carrinho'>
                            <div>
                                <span>Meu carrinho</span>
                                <small>4 items</small>
                            </div>

                            <ShoppingCart
                                size={24}
                                color={"#929292"}
                            />
                        </Link>
                    </C.CartContainer>
                </section>
            </C.Nav>
        </C.Header>
    );
}

export default Header;