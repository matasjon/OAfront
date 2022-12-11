import './LoginStyles.css'
import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const LoginPage = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post('http://localhost:5067/api/login', {
                userName: username,
                password: password
            });
            let dataToken = res.data.accessToken;
            localStorage.setItem('token', dataToken);

            const decoded = jwt_decode(dataToken);
            localStorage.setItem('tokenExp', decoded.exp);
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }


  return (
    <div className='login'>
        <div className='container'>
            <div className='form-container'>
                <form onSubmit={Auth}>  
                    <h1>Prisijungti</h1>

                    <div>
                        <label>Slapyvardis</label>
                        <input type="text" placeholder='Įveskite slapyvardį' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label>Slaptažodis</label>
                        <input type="password" placeholder='Įveskite slaptažodį' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                   <button type="submit">Prisijungti</button>
                   <button><Link to='/register'>Registracija</Link></button>

                </form>
             </div>
        </div>
    </div>
  )
}

export default LoginPage