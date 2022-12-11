import './MyInformationStyles.css'
import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyInformation = () => {


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const CreateActivity = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5067/api/activities', {
                name: name,
                description: description
            },
            {
              headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            
            setMsg("*Užsiėmimas sėkmingai sukurtas");
            // navigate("/activities");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }


  return (
    <div className='myinformation'>
        <div className='container'>
            <div className='form-container'>
                <form onSubmit={CreateActivity}>  
                    <h1>Užsiėmimo informacija</h1>
                    <p>{msg}</p>
                    <div>
                        <label>Užsiėmimo pavadinimas</label>
                        <input type="text" placeholder='Įveskite užsiėmimo pavadinimą' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <label>Aprašymas</label>
                        {/* <input type="text" placeholder='Įveskite aprašyma' value={description} onChange={(e) => setDescription(e.target.value)} /> */}
                        <textarea rows='10' placeholder='Įveskite aprašyma' value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>

                   <button type="submit">Sukurti</button>

                </form>
             </div>
        </div>
    </div>
  )
}

export default MyInformation