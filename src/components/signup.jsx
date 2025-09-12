import { useState } from "react";
import "./shared.css";

const Signup = ()=>{
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setpassword] = useState("");

    const handlesignup = (e) =>{
        e.preventDefault();
        alert(`signing up : ${name} , ${email} , ${password}`);
    };
    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handlesignup}>
                <input type="text" placeholder="Full Name" value={name} onChange={(e)=> setName(e.target.value)}
                required />
                <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=> setpassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;