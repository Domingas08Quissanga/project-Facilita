import styled from 'styled-components'

export const container = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    gap: 10px;
    
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
  }

  > p {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 600px;
    margin: 0 auto;
  }

  form legend {
    font-size: 2.5rem;
  }

  form legend span {
    border-bottom: 2px solid #3e3e;
  }

  form button {
    width: 100%;
  }
`

export const secondContainer = styled.section`
    width: 100%;
    svg {
      margin-bottom: 20px;
    }
    
    section{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      span{
        font-size: 1.5rem;
        color: #383838;
      }
      
      text-align: center;
    }

    form {
      width: 400px;
      margin: 1rem auto;

      display: flex;
      flex-direction: column;
      gap: 20px;

      button {
        width: 100%;
        height: 3.3rem;
      }

      input {
        width: 100%;
        height: 3.3rem;
      }

      span{
        margin-top: 0.5rem;
        text-align: center;
      }
    }

`