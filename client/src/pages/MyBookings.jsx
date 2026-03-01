import React from 'react'
import Title from '../components/Title'
import { dummyMyBookingsData } from '../assets/assets'
import { useState, useEffect } from 'react'

const MyBookings = () => {

  const [bookings, setBookings] = useState([])

  const fetchMyBookings = async () => {
    setBookings(dummyMyBookingsData)
  }

  useEffect(()=>{
    fetchMyBookings()
  },[])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'>
      
      <Title title='My Bookings'
        subtitle='View and manage your all car bookings'
        align="left"/>

    </div>
  )
}

export default MyBookings
