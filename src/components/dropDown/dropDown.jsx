import React from "react";

// import { Container } from './style

function DropdownItem(props){
    return(
        <li className='dropdownItem'>
        <a href="/">{props.text}</a>
    </li>
    )
}
export default DropdownItem;