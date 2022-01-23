import styled from "styled-components";

export const HeaderStyled = styled.div`
    padding: 10px;
    width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    div {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    }
    
    button {
        font-size: 0.8rem;
        font-family: inherit;
        background-color: inherit;
        color: inherit;
        border: none;
        cursor: pointer;
    }
    h1 {
        font-size: 1rem;
        font-weight: normal;
        margin: 0px;
    }
    
    img {
        width: 32px;
        margin: 5px;
    }
    em {
        font-style: normal;
        font-weight: bold;
        color: #ff8b8b;
    }
     p {
        margin: 0px;
        font-size: 0.5rem;
        width: 80%;
     }

`