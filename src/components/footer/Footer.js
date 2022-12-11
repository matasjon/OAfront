import React from 'react'
import {GiMountaintop} from 'react-icons/gi'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {FiMail, FiInstagram, FiFacebook, FiLinkedin} from 'react-icons/fi'
import './FooterStyles.css'

import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>

            <div className='top'> 
                <div className='logo-footer'>
                    <GiMountaintop className = 'icon' />
                    <h2>OnAct.</h2>
                </div>
                
                <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                </Link>
            </div>

            <div className='col-container'>
                <div className='col'>
                    <h3>Navigacija</h3>
                    <p>Pagrindinis</p>
                    <p>Užsiėmimai</p>
                    <p>Kontaktai</p>
                    <p>Apie mus</p>
                </div>
                <div className='col'>
                    <h3>Informacija</h3>
                    <p>Narystė</p>
                    <p>FAQ</p>
                    <p>Instrukcijos</p>
                </div>
                <div className='col'>
                    <h3>Mano paskyra</h3>
                    <p>Prisijungti</p>
                    <p>Registruotis</p>
                    <p>Mano duomenys</p>
                    <p>Mano užsiėmimai</p>
                </div>

                <form>
                    <h3>Naujienlaiškis</h3>
                    <input type="email" placeholder = 'Įveskite savo el.paštą' />
                    <FiMail className='mail-icon' />
                    <div className='social-group'>
                        <FiInstagram className='social-icon' />
                        <FiFacebook className='social-icon' />
                        <FiLinkedin className='social-icon' />
                    </div>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default Footer