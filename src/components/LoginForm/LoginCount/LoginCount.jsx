import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import * as C from './LoginCountStyled'
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';

function LoginCount() {
  return (
      <C.secondContainer>
        <Link to='/'>
          <ArrowLeft
            size={22}
          />
        </Link>
        <h2>
          Bem-vindo de volta ao facilita !
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam esse maiores eaque sapiente</p>
        <form action="">
          <legend>
            <span>Log</span>in
          </legend>

          <Inputs label='Email' type='email' />
          <Inputs label='Senha' type='password' />
          <Button text='Entrar' />
          <Link to='createCount'>Crie sua conta</Link>
        </form>
      </C.secondContainer>
  );
}

export default LoginCount;