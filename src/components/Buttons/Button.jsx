import React from 'react';
import  * as C from './ButtonStyled'

function Button( { text } ) {

    return (
        <C.Button>
            {text}
        </C.Button>
    );
}

export default Button;