import React, { useEffect } from 'react'; 
import './Nav.css';
import {Link, useNavigate} from 'react-router-dom';

const Nav=()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate()
        }
    })
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/logout">Logout </Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default Nav;