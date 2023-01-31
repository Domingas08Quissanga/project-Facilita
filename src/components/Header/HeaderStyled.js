import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 70px;
    background: white;
    box-shadow: 0px 4px 16px rgb( 0 , 0 , 0 , 0.2 );
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`

export const Nav = styled.nav`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > ul{
        display: flex;
        align-items: center;
        gap: 25px;
    }
    > ul li a{
        color: #3e3e3e;
        font-weight: 650;
    }
`

export const logo = styled.h1`
    a{
        color: #3e3e3e;
        font-family: Segoe print;
        font-size: 2.1rem;
    }
    a span{
        color: #3e3a;
        font-family: Segoe print;
    }
`

export const cardBtnHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

  
`

export const cardImgHeader = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #eee;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`
export const cardLogo = styled.img`
width: 20%;
height: 20%;

`