import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 70px;
    background: white;
    box-shadow: 0px 4px 16px rgb( 0 , 0 , 0 , 0.2 );
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`

export const Nav = styled.nav`
    width: 90%;
    display: flex;
    align-items: center;
    color: #000;
    justify-content: space-between;
    

    .HideSubCategory{
        display: none;
        

        }

    > ul{
        display: flex;
        align-items: center;
        gap: 25px;
        
    }
    > ul li a{
        color: #000;
        font-weight: 650;
        transition: .3s;;
    }
    > ul li a:hover{
        color: #3e3e;
    }
`

export const logo = styled.h1`
    a{
        color: #3e3e3e;
        font-family: Segoe print;
        font-size: 2.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    
    }
    a span{
        color: #3e3a;
        font-family: Segoe print;
    }

    a img{
        width: 2.5rem;
        height: auto;
        object-fit: cover;


    }
`

export const cardBtnHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
        
    }

    a span:first-child{
        font-size: 15px;

    }
    
    a span:last-child{
        font-size: 20px;
      
    }
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
