import React, {useEffect}from "react";
import './login.css';
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [email,setEmail] = React.useState('');
    const[password,setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    const handleLogin = async() =>{
        console.log(email,password)
        let result = await fetch("http://localhost:4000/login",
        {
            method: "POST",
            body: JSON.stringify({email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.log(result);
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result)); 
            navigate('/products')

        }else{
            alert("User Not Found")
        }

    }

    return(
        <div className="login">
            <h1>Login</h1>
            <input className="inputbox" type="text" placeholder = 'Enter Your Email' 
            onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input className="inputbox" type="password" placeholder="Enter Your Password"
            onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={handleLogin} className="appbutton" type="submit">Login</button> 
        </div>
    )
}


export default Login;