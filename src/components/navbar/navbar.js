import React, {userState, useState} from 'react'
import {GiMountaintop} from 'react-icons/gi'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  const [pressed, setPressed] = useState(false)
  const navigate = useNavigate();

    const changeButton = () => {
        setPressed(true);
    }

  return (
    <div name='top' className='navbar'>
        <div className='container'>

            <div className='logo'>
                <GiMountaintop className='icon' />
                <h1>OnAct</h1>
            </div>  

            {localStorage.getItem('tokenExp')*1000 < new Date().getTime() &&

                <>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Pagrindinis</Link></li>
                    <li><Link to='/activities'>Užsiėmimai</Link></li>
                    <li><Link to='/contacts'>Kontaktai</Link></li>
                    {/* <li><Link to='/about'>Apie mus</Link></li> */}
                    <button><Link to='/login'>Prisijungti</Link></button>

                </ul>

                    {localStorage.setItem('tokenExp', 0)}
                    {localStorage.setItem('token','')}
                </>

            }

            {localStorage.getItem('tokenExp')*1000 > new Date().getTime() &&

                <>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Pagrindinis</Link></li>
                    <li><Link to='/activities'>Užsiėmimai</Link></li>
                    <li><Link to='/myinformation'>Sukurti užsiėmimą</Link></li>
                    <li><Link to='/contacts'>Kontaktai</Link></li>
                    {/* <li><Link to='/about'>Apie mus</Link></li> */}
                    <button onClick={changeButton}>Atsijungti</button>
                </ul>

                {pressed === true &&

                    <>
                        {localStorage.setItem('tokenExp', 0)}
                        {localStorage.setItem('token','')}
                        {navigate('/')}
                    </>
                }


                </>
            }
            <div className='hamburger' onClick={handleNav}>
                {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon'/>)}
            </div>

        </div>
    </div>
  )
}

export default Navbar