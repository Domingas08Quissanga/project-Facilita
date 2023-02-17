import React from 'react';
import Button from '../../Buttons/Button'
import Inputs from '../../Inputs/Inputs';
import * as C from '../LoginCount/LoginCountStyled';
import { Link } from 'react-router-dom';

function LoginCreateCount() {
  return (

    <C.container>
      
               <form action="">
                
          <legend>
        
            <span>Criar</span> Conta
          </legend>
          
          <C.container>
            <Inputs label='Nome:' type='text'/>
            <Inputs label='sobrenome' type='text'/>
            <Inputs label='E-mail' type='email'/>
          </C.container>
          <C.container>
            <Inputs label='Password' type='password'/>
            <Inputs label='contacto' type='number'/>
            <Inputs label='data' type='date'/> 
            <Inputs label='Informe a senha novamente:' type='password'/> 
          </C.container>
           <Button text='Cadastrar'/>
           
             <Link to='/Login'>voltar</Link>
         
        </form>
        
    </C.container>
  );
  
}

export default LoginCreateCount;