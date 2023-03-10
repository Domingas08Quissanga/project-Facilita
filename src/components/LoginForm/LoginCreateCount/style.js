import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    div {
        display: flex;

        :first-child {
            margin-right: 10px;
        }
    }

    form {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        legend{
            text-align: center;
            color: #383838;
        }
        img{
            align-self: center;
        }
        gap: 1rem;

        input{
            height: 3.5rem;
        }
    }

    button {
        width: 100%;
        max-width: 20rem;
        align-self: center;
        padding: 10px;
        height: 3.5rem;
    }
`