import React from 'react';
import * as C from './InputStyled'

// import { Container } from './styles';

function Inputs({ label , type }) {
  return (
    <C.InputLabel>
        <label htmlFor="">{label}</label>
        <input 
            type={type} 
            required
        />
    </C.InputLabel>

  );
}

export default Inputs;