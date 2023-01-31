import styled from "styled-components";


export const Container= styled.div`
    width: 100%;
    padding-top: 70px;
    

`
export const cardImgHome = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        
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
export const cardCategoria = styled.div`
    width: 80%;
    border: 1px solid red;
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;


    button{
        font-size: 18px;
        color: #3e3e3e;
        height: 70px;
        width: 30px;
        line-height: 70px;
        text-align: center;
        border: 1px solid #ebebeb;
        background: #ffffff;
        transition: .3s;
    }
    button:hover{
        background: #ebebeb;
    }
`

export const cardslidCategoria = styled.div`
    width: 90%;
    height: 240px;
    border: 1px solid red;
`