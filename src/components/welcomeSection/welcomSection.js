import React from 'react'
import './WelcomeSection.css'
import {Link} from 'react-router-dom'

const WelcomeSection = () => {
  return (
    <div className='welcomesection'>
        <div className='container'>
            <div className='content'>
                <h2><span>Sveiki</span> Atvykę</h2>
                <p>Šioje sistemoje galite rasti, išsisaugoti ar sužinoti daugiau apie jums patinkančius užsiėmimus. Norėdami pilnai naudotis sistema prisiregistruokite.</p>
                <div>
                    <button><Link to='/register'>Registruotis</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeSection