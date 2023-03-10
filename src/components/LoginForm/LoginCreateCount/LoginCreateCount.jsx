import React from 'react';
import Button from '../../../components/Buttons/Button'
import Inputs from '../../../components/Inputs/Inputs';
import { json, Link } from 'react-router-dom';
import { Container } from './style';
import { useState } from 'react';

function LoginCreateCount() {
  const [nome, setNome] = useState("")

  async function handleCreateClient(e){
    e.preventDefault()
    const response = await fetch("http://localhost:3333/cliente", {
      method: "POST",
      body: JSON.stringify({nome})
    })
  }

  return (
    <Container>
      <Link to='/Login'
          size={22}
      />
      <form onSubmit={handleCreateClient}>
        <legend>
          <span>Criar</span> Conta
        </legend>

          <div>
            <Inputs label='Nome:' type='text'  onChange={(e) => setNome(e.target.value)}/>
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

        <Button text='Cadastrar' type="submit"/>
      </form>
    </Container>
  );

}

export default LoginCreateCount;