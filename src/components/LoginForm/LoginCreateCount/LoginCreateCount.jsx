import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';
import { Container } from './style';
import logo from "../../../assets/logo.png"

function LoginCreateCount() {
  return (
    <Container>
      <Link to='/Login'>
        <ArrowLeft
          size={22}
        />
      </Link>
      <form action="">
        <img src={logo} alt="" />
        <legend>
          <span>Criar</span> Conta
        </legend>

          <div>
            <Inputs label='Nome:' type='text' placeholder={"Primeiro nome"} />
            <Inputs label='sobrenome' type='text' placeholder={"sobrenome"}/>
          </div>

          <div>
            <Inputs label='E-mail' type='email' placeholder={"Email"} />
            <Inputs label='contacto' type='number' placeholder={"Nº Telefone"} />
          </div>

          <div>
            <Inputs label='Password' type='password' placeholder={"Palavra-passe"} />
            <Inputs label='Informe a senha novamente:' type='password' placeholder={"Confirmar palavra-passe"} />
          </div>

          {/* <Inputs label='data' type='date' /> */}

        <Button text='Cadastrar' />
      </form>
    </Container>
  );

}

export default LoginCreateCount;