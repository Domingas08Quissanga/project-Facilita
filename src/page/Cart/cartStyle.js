import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 40px;

  div {
    margin: 0 auto;
    width: 1222px;

    display: flex;
    justify-content: flex-end;
    margin-top: 50px;

    button {
      background: none;
      border: 1px solid #4f8d41;
      box-shadow: 1px 1px 10px rgba(79, 141, 65, 0.4);
      border-radius: 8px;
      padding: 5px 15px;

      display: flex;
      align-items: center;
      gap: 8px;

      :hover {
        background: #f1f1f1;
      }
    }
  }

  section {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 1rem;

    head{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 60px;
      color: #0003;
      font-size: 20px;
      gap: 1em;
      border-bottom: 3px solid gainsboro;
      
      .image{
        width: 20%;
        margin: 0;
      }
      
      .name{
        width: 30%;
        p{
          width: 100%;
          text-align: left;
        }
      }

      .amount{
        width: 20%;
        p{
          width: 100%;
          text-align: left;
        }
      }

      .price{
        width: 10%;
        p{
          width: 100%;
          text-align: left;
        }
      }

      .discard{
        width: 20%;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 60px;
      color: #000;
      font-size: 20px;
      margin-bottom: 0.1rem;
      gap: 1em;
      
      >
      button{
        width: 1rem;
        text-align: center;
      }

      .image{
        width: 20%;
        margin: 0;
        img{
          width: 150px
        }
      }
      
      .name{
        width: 30%;
        p{
          width: 100%;
          text-align: left;
        }
      }

      .amount{
        width: 20%;
        display: flex;
        flex-direction: row;
        gap: 2px;
        input{
          width: 20%;
          text-align: center;
        }
        button{
          width: 20%;
          text-align: center;
          justify-content: center;
        }
      }

      .price{
        width: 10%;
        color: #000;
      }

      .discard{
        width: 20%;
        button{
          width: 20%;
        }
      }
    }

    > footer {
      border-top: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      padding-top: 20px;

      button {
        background: #4f8d41;
        border: 1px solid #4f8d41;
        box-shadow: 1px 1px 10px rgba(79, 141, 65, 0.4);
        border-radius: 8px;
        font-size: 15px;
        padding: 5px 15px;
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        transform: 0.1s;

        :hover {
          opacity: 0.9;
        }
      }

      span {
        display: flex;
        align-items: flex-end;
        gap: 7px;

        small {
          text-transform: uppercase;
          color: #999;
          font-weight: 600;
          font-size: 13px;
        }

        h2 {
          margin: 0;
          font-size: 28px;
        }
      }
    }
  }
`
export const Table = styled.table`
  margin-bottom: 20px;

  thead {
    th {
      color: #999;
      text-align: left;
      padding-right: 100px;
      font-weight: 600;
    }
  }

  tbody {
    td {
      padding-bottom: 1rem;

      img {
        width: 50px;
        height: 50px;
        border-radius: 4px;
      }
    }

    button#trash {
      background: none;
      margin-left: 97%;

      svg {
        :hover {
          opacity: 0.8;
        }
      }
    }
  }
`
export const ProductQuantityContainer = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;

    > input {
        border: 1px solid #eee;
        width: 50px;
        border-radius: 4px;
        padding: 1px 5px;
    }

    > button {
        background: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`