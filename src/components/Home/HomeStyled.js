import styled from "styled-components";



export const Container= styled.div`
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
export const cardInner= styled.div`
    width: 80%;
    border: 1px solid red;
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;


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
        transition: .5s;
    }
`

export const cardItem= styled.div`
    width: 150%;
    height: 165px;
    border: 1px solid violet;
    display:flex;
    text-align: center;
    justify-content: center;
    
   
`
export const cardCarousel= styled.div`
    width: 20%;
    height: 200px;
    display:flex;
    border: 1px solid green;
    border-radius: 40px;
    margin: 20px;
    text-align: center;
    justify-content: center;
   
`