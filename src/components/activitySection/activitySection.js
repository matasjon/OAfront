import React from 'react'
import './ActivitySection.css'
import {Link} from 'react-router-dom'

const ActivitySection = () => {
  return (
    <div className='activitysection'>
        <div className='container'>
            <div className='content'>
                <h2><span>Užsiėmimų</span> Sąrašai</h2>
                <p>Čia galite ieškoti ir daugiau sužinoti apie užsiėmimus.</p>
                <div><button><Link to='/activities'>Užsiėmimai</Link></button></div>
            </div>
        </div>
        
    </div>
  )
}

export default ActivitySection