import React from 'react'
import './MyActivitiesStyles.css'

const MyActivitySection = () => {
  return (
    <div className='myactivitysection'>
        <div className='container'>
            <div className='content'>
                <h2> Mano <span>Užsiėmimai</span></h2>
                <p>Čia rodomi jūsų įsimintini, sukurti ar lankomi užsiėmimai.</p>
                <div><button>Sužinoti daugiau</button></div>
            </div>
        </div>
    </div>
  )
}

export default MyActivitySection