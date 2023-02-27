import styled from 'styled-components'

export const Container = styled.section`
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
    width: 1222px;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 30px;

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