import styled from "styled-components"

export const Info = styled.footer`
margin-top: 10rem;
margin-bottom: 2rem;
display: flex;
justify-content:space-around;
align-items: center;
form {
    h3{
        font-size: 20px;
        text-align:center;
        margin: 2rem auto;
      
     
    }
    input {
        padding: .5rem;
        min-width: 500px;
        display: block;
        border:none;
        background-color: silver;
        margin-bottom: 20px;
        border-radius: 10px;
        color: white;
        :focus{
            outline:none;
        }
    }
    textarea {
        padding: .5rem;
        min-width: 500px;
        height: 300px;
        display: block;
        border:none;
        background-color: silver;
        
        :focus{
            outline:none;
        }
    }
    button {
        border:none;
        color: white;
        font-weight: bold;
        padding: .5rem;
        min-width: 150px;
        border-radius: 10px;
        margin: 2rem auto;
        background-color: #3e0;
    }
}
`

export const ContInfo= styled.div`
    width: 100%;
    padding-top: 70px;

`

export const ContFooter= styled.div`
justify-content: center;
text-align: center;
display: inline;

`