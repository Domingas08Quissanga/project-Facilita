import styled from "styled-components";

export const Container = styled.section `

    div {
        display: flex;
        margin-top: 15px;

        input {
            height: 40px;
        }

        :first-child {
            margin-right: 10px;
        }
    }

    form {
        margin-top: 30px;
    }

    button {
        width: 100%;
        padding: 10px;
        margin-top: 30px;
    }
`