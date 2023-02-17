import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    background-color: #1B1A1A;
    color: white;
    text-align: center;
    cursor:pointer;
   

    div{
        padding: .5rem;

        #logo {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h4 {
            text-align: center;
            margin-left: 1rem;
            font-size: 25px;
        }

        input {
            border: none;
            background-color: silver;
            padding: .5rem;
            border-radius: 10px;
            width: 300px;
            :focus {
                    outline:none;
                }
        }

        .newsletter {
            .inscrever {
                border: none;
                margin-left: .5rem;
                padding: .5rem;
                border-radius: 10px;
                color: #000;
                font-weight: bold;
                background-color:#0D4911;
                transform: scale(0.9);
                transition: 0.2s;

                :hover {
                    transition: 0.2s;
                    transform: scale(1);
                    color: #fff;
                    background-color: #3e0;

                }
            }
        }
    }
    .footer-ul {
        display: flex;
        justify-content: center;
        align-items: center;

        li {
            padding: 1rem;
            list-style: none;
            font-size: 16px;
            font-weight: thin;
            transform: scale(0.9);
            transition: 0.2s;
            :hover {
                transform: scale(1);
                transition: 0.2s;
                color: #3e0e;
            }
        }
  
  
  }
  .footer-ulicon {
        display: flex;
        justify-content: center;
        align-items: center;

        li {
            padding: 1rem;
            list-style: none;
            font-size: 16px;
            font-weight: thin;
            transform: scale(0.9);
            transition: 0.2s;
            font-size: 3rem;
            :hover {
                transform: scale(1);
                transition: 0.2s;
                color: #3e0e;
                font-size: 2rem;
            }
        }
  
  
  }
`
export const greenLine = styled.div`
width: 30rem;
margin: auto;
border-top: 3px solid green;

`


export {Container}