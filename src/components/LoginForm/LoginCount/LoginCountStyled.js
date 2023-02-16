import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    


    h2 {
        font-size: 2.5rem;
        text-align: center;
    
        
    }
    
    > p {
        text-align: center;
    }
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px;
        

    }

    form legend{
        font-size: 2.5rem;
    }

    form legend span{
        border-bottom: 2px solid #3e3e;
    }

`