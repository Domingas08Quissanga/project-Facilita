import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background: white;
  box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);

  ul {
    margin: 0;
  }
`

export const Nav = styled.nav`
  width: 90%;
  height: 100%;
  color: #222226;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  > section {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .HideSubCategory {
    display: none;
  }

  > ul {
    display: flex;
    align-items: center;
    height: 70px;

    gap: 25px;
  }

  > ul li a {
    color: #222226;
    font-weight: 300;
    transition: 0.1s;
  }

  > ul li a:hover {
    color: #3e3e;
  }
`

export const logo = styled.h1`
  a {
    color: #3e3e3e;
    font-size: 1.5rem;
    gap: 5px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 800;
  }

  a span {
    color: #3e3e;
    
  }

  a img {
    width: 2.5rem;
    height: auto;
    object-fit: cover;
  }
`

export const cardBtnHeader = styled.div`
  a {
    display: flex;
    gap: 7px;

    span {
      font-size: 15px;
    }
  }
`

export const cardImgHeader = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
export const ProductNavegation = styled.li`
  section {
    position: absolute;
  }

  :hover {
    font-weight: 600;

    div {
      display: inline-block;
      display: flex;
      flex-direction: column;
    }
  }

  div {
    background: white;
    border: 1px solid #eee;

    display: flex;
    flex-direction: column;
    gap: 6px;

    padding: 10px 15px;
    border-radius: 6px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

    font-size: 14px;

    position: relative;
    top: 6px;
    z-index: 1;
    display: none;

    a {
      :focus {
        color: #3e3a;
      }
    }
  }
`
export const CartContainer = styled.div`
  a {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    transition: 0.1s;

    :hover {
      opacity: 0.7;
    }
  }

  div {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    span {
      font-size: 12px;
      font-weight: 600;
      color: #2d2d2d;
    }

    small {
      font-size: 11px;
      background: #ddd;
      border-radius: 26px;
      padding: 1px 5px;
      color: #2d2d2d;
    }
  }
`
