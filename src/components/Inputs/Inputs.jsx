import React from 'react';
import * as C from './InputStyled'

// import { Container } from './styles';

function Inputs({ label , type, placeholder}) {
  return (
    <C.InputLabel>
        {/* <label htmlFor="">{label}</label> */}
        <input
            placeholder={placeholder} 
            type={type} 
            required
        />
    </C.InputLabel>

  );
}

export default Inputs;