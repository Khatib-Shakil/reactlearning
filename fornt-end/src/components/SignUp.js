import React, { useState,useEffect} from 'react'
import "./SignUp.css";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:4000/register',
         {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result)); 
        navigate('/')
        
        setName("");
        setEmail("");
        setPassword("");
    }


    return (
        <div className='register'>
            <h1>Register</h1>
            <input className="inputbox" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="inputbox" type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputbox" type="password" maxLength="8" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={collectData} className="appbutton" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp