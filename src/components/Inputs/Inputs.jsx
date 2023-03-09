import React from 'react';
import * as C from './InputStyled'

// import { Container } from './styles';

function Inputs({ label, type, placeholder , ...props}) {
  return (
    <C.InputLabel>
        {/* <label htmlFor="">{label}</label> */}
        <input
            {...props}
            placeholder={placeholder} 
            type={type} 
            required
        />
    </C.InputLabel>

  );
}

export default Inputs;