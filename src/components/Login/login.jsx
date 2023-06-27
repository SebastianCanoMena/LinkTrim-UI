import { useState } from "react";

export default function Login(){

    const [LoginHovered, setLoginHovered] = useState(false);
    const [SignUpHovered, setSignUpHovered] = useState(false);

    const LoginStyle = {
        backgroundColor: LoginHovered ? "#F2BAC9" : "#f0f8ff",
    }

    const SignupStyle = {
        backgroundColor: SignUpHovered ? "#F2BAC9" : "#f0f8ff",
    }

    return(
        <div className="container d-flex-inline border border-2 rounded mt-4">
            <div className="d-flex justify-content-center">
                <div className="p-2 border m-1 rounded" onMouseEnter={() => setLoginHovered(true)} onMouseLeave={() => setLoginHovered(false)} style={LoginStyle}>Log in</div>
                <div className="p-2 border m-1 rounded" onMouseEnter={() => setSignUpHovered(true)} onMouseLeave={() =>setSignUpHovered(false)} style={SignupStyle}>Sign up</div>
            </div>
            
            <form>
                <h4 className="mt-4">Enter your email</h4>
                <input type="text" className="py-1 w-50 border border-2 rounded mt-2"/>
                <h4 className="mt-4">Enter your password</h4>
                <input type="text" className="py-1 w-50 border border-2 rounded mt-2"/>
                <br/>
                <button className="w-50 rounded mt-4 mb-4 py-1">Submit</button>
            </form>
        </div>
    )
}