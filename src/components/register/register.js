import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './RegisterStyles.css'

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5067/api/register', {
                userName: name,
                email: email,
                password: password
            },);
            navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
                setMsg("* Nepavyko prisiregistruoti.");
            }
        }
    }

  return (
        <div className='register'>
            <div className='container'>
                <div className='form-container'>
                    <form onSubmit={Register}>  
                        <h1>Registracija</h1>
                        <p>{msg}</p>
                        <div>
                            <label>Slapyvardis</label>
                            <input type="text" placeholder='Įveskite slapyvardį' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div>
                            <label>El. paštas</label>
                            <input type="text" placeholder='Įveskite el.paštą' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label>Slaptažodis</label>
                            <input type="password" placeholder='Įveskite slaptažodį' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <p><input type="checkbox" placeholder='Organizatorius' /> Organizatorius</p>

                        <button type="submit">Registruotis</button>

                    </form>
                </div>
            </div>
         </div>
  )
}

export default Register