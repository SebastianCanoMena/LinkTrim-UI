import { useState } from 'react'
import LogIn from './logIn.jsx'
import SignUp from './SignUp.jsx'

export default function Account(){
    
    const [loginHovered, setLoginHovered] = useState(false);
    const [signUpHovered, setSignUpHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const LoginStyle = {
        backgroundColor: loginHovered ? "#F2BAC9" : "#f0f8ff",
    }

    const SignupStyle = {
        backgroundColor: signUpHovered ? "#F2BAC9" : "#f0f8ff",

    }
    return(
        <div className="container border border-2 rounded mt-4 w-70">
        <div className="d-flex justify-content-center">
                <div className="p-2 border m-1 rounded" onMouseEnter={() => setLoginHovered(true)} onMouseLeave={() => setLoginHovered(false)} style={LoginStyle}
                onClick={() =>setIsClicked(false)}>Log in</div>
                <div className="p-2 border m-1 rounded" onMouseEnter={() => setSignUpHovered(true)} onMouseLeave={() =>setSignUpHovered(false)} style={SignupStyle}
                onClick={() =>setIsClicked(true)}>Sign up</div>
        </div>
            {isClicked ? <SignUp /> : <LogIn />}
        </div>
    )
}