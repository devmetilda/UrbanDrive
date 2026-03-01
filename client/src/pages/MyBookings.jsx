import React from 'react'
import Title from '../components/Title'
import { dummyMyBookingsData } from '../assets/assets'
import { useState, useEffect } from 'react'

const MyBookings = () => {

  const [bookings, setBookings] = useState([])

  const fetchMyBookings = async () => {
    setBookings(dummyMyBookingsData)
  }

  useEffect(() => {
    fetchMyBookings()
  }, [])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'>
      
      <Title 
        title='My Bookings'
        subTitle='View and manage your all car bookings'
        align="left"
      />

      <div>
        {bookings.map((booking, index) => (
          <div 
            key={booking._id} 
            className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12'
          >
            
            {/* Car Image  + Info */}
            <div className='rounded-md overflow-hidden mb-3'>
              <img 
                src={booking.car.image} 
                alt="" 
                className='w-full h-auto aspect-video object-cover'
              />
            </div>

            <p className='text-lg font-medium mt-2'>
              {booking.car.brand} {booking.car.model}
            </p>

            <p className='text-gray-500'>{booking.car.year} {booking.car.category} {booking.car.location} </p>

          </div>
        ))}
      </div>

    </div>
  )
}

export default MyBookings