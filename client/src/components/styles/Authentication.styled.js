import styled from "styled-components";

export const AuthenticationStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

h1 {
    text-align: center;
    font-size: 3rem;
    line-height: 40px;
    margin: 0px;
    margin-bottom: 20px;
}

p {
    font-size: small;
    margin: 0px;
    width: 80%;
    text-align: center;
    font-size: 0.6rem;
}

button {
    background-color: white;
    margin-top: 10px;
    border-radius: 15px;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 80px;
    height: 50px;
    font-size: 25px;
    color: #141224;
    cursor: pointer;

    p {
        font-weight: bold;
    }
}
`