import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    padding-top: 70px;
    

`
export const cardSlideHome = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        transition: all 0.5s ease-in-out;
    }
    &:hover img {
    transform: translateX(-100%);
  }

`

export const cardTextHome = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    h2{
        font-size: 4rem;
        color: white;
    }
    h2 span{
        color: #3e0;
        font-family: Segoe print;
        
    }

    p{
        color: white;
    }

    form{
        width: 65%;
        background: white;
        padding: 16px;
        display: flex;
        align-items: center;
        border-radius: 6px;
        color: #3e3e3e

    }
    form input{
        flex: 1;
        margin-left: 10px;
        border: none;
        outline: none;
        color: #3e3e3e
     
       
    }

`

export const Services = styled.main`
h1 {
    margin:2rem;
    text-align:center;
    color: #535353;
}

.columns{
    display:flex;
    justify-content:space-around;
    align-items:center;
    p{
        width: 600px;
    }
}
`

export const Info = styled.footer`
margin-top: 20rem;
margin-bottom: 2rem;
display: flex;
justify-content:space-around;
align-items: center;
form {
    h3{
        font-size: 25px;
        text-align:center;
        margin: 2rem auto;
        color: gray;
    }
    input {
        padding: .5rem;
        min-width: 500px;
        display: block;
        border:none;
        background-color: #F1F1F1;
        margin-bottom: 20px;
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
        background-color: #F1F1F1;
        
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