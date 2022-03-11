import { Link } from 'react-router-dom';
import { Content, Routes } from "../SignIn/styles";

export function SignUp() {
    return(
        <>
            <Content>
                <h1>Sign Up</h1>

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
                        Sign Up
                    </Link>
                    <Link to="/"> I already have an account </Link>
                </Routes>
            </Content>        
        </>
    )
}

        
