import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import * as C from './LoginCountStyled'
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"

function LoginCount() {
  return (
      <C.secondContainer>
        {/* <Link to='/'>
          <ArrowLeft
            size={22}
          />
        </Link> */}
        <section>
          <img src={logo} alt="logo" />
          <span>Iniciar Sessão</span>
        </section>
        {/* <h2>
          Bem-vindo de volta ao facilita !
        </h2> */}
        <form action="">
          {/* <legend>
            <span>Log</span>in
          </legend> */}
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