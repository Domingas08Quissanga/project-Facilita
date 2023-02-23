import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: #1b1a1a;
  color: white;
  text-align: center;
  cursor: pointer;

  div {
    padding: 2rem 0rem 1rem 0rem;

    #logo {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      gap: 7px;
    }

    h4 {
      text-align: center;
      font-size: 25px;
      margin: 0;

      color: white;

      span {
        color: #3e0;
      }
    }

    input {
      border: none;
      background-color: silver;
      padding: 0.5rem;
      border-radius: 10px;
      width: 300px;
      :focus {
        outline: none;
      }
    }

    .newsletter {
      .inscrever {
        border: none;
        margin-left: 0.5rem;
        padding: 10px 15px;
        border-radius: 10px;
        color: #f2f2f2;
        font-weight: bold;
        background-color: #0d4911;
        transform: scale(0.9);
        transition: 0.2s;

        height: 44px;

        :hover {
          transition: 0.2s;
          color: #fff;
          background-color: #3e0;
        }
      }

      input {
        padding: 10px 15px;
        height: 40px;
      }
    }
  }
  .footer-ul {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin-top: 1rem;

    li {
      list-style: none;
      font-size: 16px;
      font-weight: thin;
      transform: scale(0.9);
      transition: 0.2s;
      color: white;

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

    gap: 10px;

    li {
      list-style: none;
      font-size: 16px;
      font-weight: thin;
      transform: scale(0.9);
      transition: 0.2s;
      font-size: 3rem;

      :hover {
        transform: scale(1.1);
        transition: 0.1s;
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

export { Container }
