import { HeaderStyled } from "./styles/Header.styled";
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react";

export default function Header() {
    const { loginWithRedirect, logout, user } = useAuth0();
    useEffect(() => {
        console.log(user);
    }, [user]);
    return <HeaderStyled>
        <div>
            <h1><em>{"{"}</em>steve<em>{"}"}</em></h1>
            <p>an assistant by the itclub</p>
        </div>

        <div>
            {user && (
                <>
                <img src={user.picture}/>
                <h1>
                    <em>{"@"}</em>{user.name}
                </h1>
                </>
            )}

            {user && (
                <button onClick={() => logout()}><em>{">"}</em>logout</button>
            )}
            
            {!user && (
            <button onClick={() => loginWithRedirect()}><em>{">"}</em>login</button>
            )}




        </div>
    </HeaderStyled>;
}
