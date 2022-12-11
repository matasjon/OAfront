import React from 'react'
import './ActivityCardStyle.scss'

const ActivityCard = (props) => {
  return (
    <div className="card">
    <img src={props.img} className="card__img" />
    <div className="card__body">
      <h3 className="card__title">{props.title}</h3>
      <h4 className="card__description">{props.desc}</h4>
      <button className="card__btn">Daugiau</button>
    </div>
  </div>
  )
}

export default ActivityCard