import React from 'react';
import Button from '../../Buttons/Button'
import Inputs from '../../Inputs/Inputs';
import * as C from './LoginCountStyled'
import { Link } from 'react-router-dom';


// import { Container } from './styles';

function LoginCount() {
  return (
    <C.container>
        <h2>
            Bem-vindo de volta ao facilita !
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam esse maiores eaque sapiente</p>
        <form action="">
          <legend>
            <span>Log</span>in
          </legend>
          <Inputs label='Email' type='email'/>
          <Inputs label='Senha' type='password' /> 
          <Button text='Entrar'/>
          <Link to='createCount'>Crie sua conta</Link>
          <Link to='/'>voltar</Link>
          
        </form>
        
        
    </C.container>
  );
}

export default LoginCount;