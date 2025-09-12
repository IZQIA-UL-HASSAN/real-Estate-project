import React, { useState } from "react";
import "./shared.css";


const Login = () =>{
    const [email , setEmail] = useState("");
    const [password , setpassword] = useState("");

    const handlelogin = (e) =>{
        e.preventDefault();
        alert(`logging in with ${email}  `);
    };

    return (
        <div className="auth-conatiner">
            <h2>Login</h2>
            <form onSubmit={handlelogin}>
                <input type="text" placeholder="Enter an email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" value={email} onChange={(e) => setpassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login ;  