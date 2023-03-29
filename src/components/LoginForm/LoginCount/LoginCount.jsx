import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import * as C from './LoginCountStyled'
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"

function LoginCount() {
  return (
      <C.secondContainer>
       
        <section>
          <img src={logo} alt="logo" />
          <span>Iniciar Sessão</span>
        </section>
       
        <form action="">
         
          <Inputs label='Email' type='email' placeholder={"Email"} />
          <Inputs label='Senha' type='password' placeholder={"Senha"} />
          <Button text='Entrar' />
          <span>
              <Link to='createCount'>Crie sua conta</Link>
          </span>
        </form>
      </C.secondContainer>
  );
}

export default LoginCount;