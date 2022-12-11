import React from 'react'
import ActivityList from '../components/activitieslist/activitylist'
import ActivityCard from '../components/activityCard/activityCard'
import ActivitySection from '../components/activitySection/activitySection'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/navbar'

const ActivitiesPage = () => {
  return (
    <>
        <Navbar />
        <ActivitySection />
        <ActivityList />
        {/* <ActivityCard /> */}
        <Footer />
    </>
  )
}

export default ActivitiesPage