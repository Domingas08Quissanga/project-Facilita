import React from 'react';
import * as C from './LoginFormStyled'
import imgLogin from '../../assets/images/backgrounds/background.png'
import { Route, Routes } from 'react-router-dom';
import LoginCount from './LoginCount/LoginCount';
import LoginCreateCount from './LoginCreateCount/LoginCreateCount';


// import { Container } from './styles';

function LoginForm() {

  return (
   <C.container>
    <C.LoginSpaceLeft>
        <img src={imgLogin} alt="" />
    </C.LoginSpaceLeft>
    <C.LoginSpaceRight>
        <Routes>
            <Route path='/' element ={<LoginCount/>} />
            <Route path='createCount' element={<LoginCreateCount />} />
        </Routes>
    </C.LoginSpaceRight>
   </C.container>
  );
}

export default LoginForm;