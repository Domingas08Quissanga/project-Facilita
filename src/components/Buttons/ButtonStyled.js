import styled from "styled-components";


export const Button = styled.button`
    width: 360px;
    padding: 1rem 1.2rem;
    border-radius: 10px;
    background: #3e3e;
    color: white;
    margin-top: 10px;
    transition: .3s;

    &&:hover{
        transform: scale(1.02);
        background: black;
    }
`