import React from 'react';
import * as C from './LoginFormStyled'
import { Route, Routes } from 'react-router-dom';
import LoginCount from '../LoginForm/LoginCount/LoginCount';
import LoginCreateCount from '../LoginForm/LoginCreateCount/LoginCreateCount';


// import { Container } from './styles';

function LoginForm() {
  return (
   <C.container>
    {/* <C.LoginSpaceLeft>
        <img src={imgLogin} alt="" />
    </C.LoginSpaceLeft> */}
    <C.LoginSpaceRight>
        <Routes>
            <Route path='/' element ={<LoginCount/>} />
            <Route path='createCount' element={<LoginCreateCount/>} />
        </Routes>
    </C.LoginSpaceRight>
   </C.container>
  );
}

export default LoginForm;