import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';
import { Container } from './style';

function LoginCreateCount() {
  return (
    <Container>
      <Link to='/Login'>
        <ArrowLeft
          size={22}
        />
      </Link>
      <form action="">
        <legend>
          <span>Criar</span> Conta
        </legend>

          <div>
            <Inputs label='Nome:' type='text' />
            <Inputs label='sobrenome' type='text' />
          </div>

          <div>
            <Inputs label='E-mail' type='email' />
            <Inputs label='contacto' type='number' />
          </div>

          <div>
            <Inputs label='Password' type='password' />
            <Inputs label='Informe a senha novamente:' type='password' />
          </div>

          <Inputs label='data' type='date' />

        <Button text='Cadastrar' />
      </form>
    </Container>
  );

}

export default LoginCreateCount;