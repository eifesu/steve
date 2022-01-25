import React from 'react';
import {AiOutlineGoogle} from "react-icons/ai"
import { AuthenticationStyled } from '../components/styles/Authentication.styled';
import {useAuth0} from '@auth0/auth0-react'
const Authentication = () => {
    const {loginWithRedirect} = useAuth0();

    return (
        <AuthenticationStyled>
            <h1>authen<br/>tication</h1>
            <p>Authenticate yourself to gain access to steve!</p>
            <p>Amazing features, manage your activities and engage with the audience <br/> <br/></p>
            <p>Make sure to log in with your International University of Grand-Bassam email address!
            </p>
            <button onClick={() => loginWithRedirect()}>
            <AiOutlineGoogle />
            <p>Google</p>
            </button>
            
        </AuthenticationStyled>
    );
}

export default Authentication;
