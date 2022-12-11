import React from 'react'
import './HeroStyles.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='content'>
                <h1>Laisvalaikio užsiėmimai</h1>
                <h1 className='blue'>Sąrašai</h1>
                <h1>Žymėjimai</h1>
                <div><button>Daugiau</button></div>
            </div>
        </div>
    </div>
  )
}

export default Hero