import React from 'react';
import  * as C from './ButtonStyled'

function Button( { text, type } ) {

    return (
        <C.Button type={type}>
            {text}
        </C.Button>
    );
}

export default Button;