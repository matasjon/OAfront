import React from 'react'
import './ContactStyles.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='form-container'>
                <form>  
                    <h1>Kontaktų forma</h1>

                    <div>
                        <label>Vardas</label>
                        <input type="text" placeholder='Įveskite vardą' />
                    </div>

                    <div>
                        <label>El.paštas</label>
                        <input type="text" placeholder='Įveskite el.paštą' />
                    </div>

                    <div>
                        <label>Žinutė</label>
                        <textarea rows='10' placeholder='Įveskite žinutę' />
                    </div>

                    <button>Pateikti</button>
                </form>
             </div>
        </div>
    </div>
  )
}

export default Contact