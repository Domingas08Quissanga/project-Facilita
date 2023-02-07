import React from 'react';
import Button from '../../Buttons/Button'
import Inputs from '../../Inputs/Inputs';
import * as C from '../LoginCount/LoginCountStyled';

function LoginCreateCount() {
  return (

    <C.container>
               <form action="">
          <legend>
            <span>Criar</span> Conta
          </legend>
          
          <C.container>
            <Inputs label='Nome:' type='text'/>
            <Inputs label='Data de nascimento:' type='date'/>
            <Inputs label='Endereço' type='text'/>
          </C.container>
          <C.container>
            <Inputs label='Nº de telefone:' type='text'/>
            <Inputs label='Email' type='email'/>
            <Inputs label='Senha' type='password' /> 
            <Inputs label='Informe a senha novamente:' type='password' /> 
          </C.container>
           <Button text='Cadastrar'/>
         
          
        </form>
        
        
    </C.container>
  );
  
}

export default LoginCreateCount;