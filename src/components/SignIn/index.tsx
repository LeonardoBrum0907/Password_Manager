import { Content, Routes } from "./styles";
import { Link } from 'react-router-dom';

export function SignIn() {
    return(
        <>
            <Content>
                <h1>Sign In</h1>

                <p>Email</p>
                <input 
                    type="text" 
                />

                <p>Password</p>
                <input 
                    type="password"
                />

                <Routes>
                    <Link to="/list" className="button" type="button">
                        Sign In
                    </Link>
                    <Link to="/signup"> Create a new account </Link>
                </Routes>
            </Content>
        </>
    )
}