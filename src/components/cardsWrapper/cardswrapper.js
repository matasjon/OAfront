import React from 'react'
import ActivityCard from '../activityCard/activityCard'
import './CardsWrapper.css'

const CardsWrapper = ({ posts, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='wrapper'>


        {posts.map((item) => (

            <ActivityCard  
            img = "https://media.istockphoto.com/id/1296601764/photo/slave-hands-broken-chains-with-bird-flying.jpg?b=1&s=170667a&w=0&k=20&c=ksZ6aHBwS6ASuDKHxKgNm0AyGJFotPDo1rvhGT4ZxbQ="
            title = {item.name}
            desc ={item.description}
            /> 

        ))}
    </div>
  )
}

export default CardsWrapper