import React, {useState} from 'react'
import "./SignUp.css";

const SignUp =()=>{

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const setUserName=(event)=>{
        setName(event.target.value);
    }

    const setUserEmail=(event)=>{
        setEmail(event.target.value);
    }

    const setUserPassword=(event)=>{
        setPassword(event.target.value);
    }

    const handleSubmit=(event)=>{
    }


    return(
        <div className='register'>
            <h1>Register</h1>
            <input className="inputbox" type="text" placeholder="Enter Name" value={setUserName}></input>
            <input className="inputbox" type="text" placeholder="Enter Email" value={setUserEmail}></input>
            <input className="inputbox" type="password" placeholder = "Enter Password" value={setPassword}></input>
            <button className="appbutton" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp