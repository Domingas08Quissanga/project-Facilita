import styled from "styled-components";

export const Container= styled.div`
    width: 100%;
    padding-top: 70px;
    

    

`
export const cardSlideHome = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    


    img{
        width: 100%;
        height: 280px;
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
        transition: .5s;
    }
`

export const cardItem= styled.div`
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
`
export const cardCarousel= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 12rem;
    border-radius: 10px;
    margin: 20px;
    text-align: center;
    justify-content: center;
    background-color: white;
    padding: 1rem;
    box-shadow: 1px 1px 7px gray;
    transform: scale(0.9);
    cursor: pointer;
    transition: 0.2s;
    text-align: left;

    hr {
        z-index: 99999;
        border: 0;
        border-top: 3px solid brown;
    }

    :hover{
        transform: scale(1);
        transition: 0.2s;
        box-shadow: 1px 1px 7px lightgreen;
    }

    img  {
        height: 80px;
        width: 100%;
    }

    .content{
        width: 100%;
        margin: .3rem;
        p {
            :first-child{
                font-size: 18px;
                color: balck;
                font-weight: bold;
            }
            :last-child {
                padding: .3rem;
                background-color: lightgreen;
                color: green;
                width: 90px;
                font-weight: bold;
                border-radius: 2rem;
                text-align: center;
            }
        }
    }

    .addShop {
        font-size: 12px;
        line-height: 0%;
        background-color: green;
        width: max-content;
        height: 3rem;
        color: white;
        font-weight: bold;
        padding: 0.5rem;
        border-radius: 10px;

        :hover {
            background-color: lightgreen;
        }
    }
   
`