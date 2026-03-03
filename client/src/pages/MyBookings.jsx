import React from 'react'
import Title from '../components/Title'
import { dummyMyBookingsData, assets } from '../assets/assets'
import { useState, useEffect } from 'react'

const MyBookings = () => {

  const [bookings, setBookings] = useState([])
  const currencyy = import.meta.env.VITE_CURRENCY || "₹"

  const fetchMyBookings = async () => {
    setBookings(dummyMyBookingsData)
  }

  useEffect(() => {
    fetchMyBookings()
  }, [])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 mb-24 text-sm max-w-7xl'>
      
      <Title 
        title='My Bookings'
        subtitle='View and manage your all car bookings'
        align="left"
      />

      <div>
        {bookings.map((booking, index) => (
          <div 
            key={booking._id} 
            className='grid grid-cols-1 md:grid-cols-3 gap-6 p-5 border border-borderColor rounded-lg mt-5 first:mt-12'
          >

            {/* Left - Car Image */}
            <div className='rounded-md overflow-hidden'>
              <img 
                src={booking.car.image} 
                alt="" 
                className='w-full h-32 object-cover rounded-md'
              />
            </div>

            {/* Middle - Booking Details */}
            <div className='space-y-3'>
              
              <div>
                <p className='text-lg font-semibold'>
                  {booking.car.brand} {booking.car.model}
                </p>
                <p className='text-gray-500'>
                  {booking.car.year} • {booking.car.category} • {booking.car.location}
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <p className='px-3 py-1.5 bg-light rounded'>
                  Booking #{index + 1}
                </p>

                <p 
                  className={`px-3 py-1 text-xs rounded-full ${
                    booking.status === 'confirmed'
                      ? 'bg-green-400/15 text-green-600'
                      : 'bg-red-400/15 text-red-600'
                  }`}
                >
                  {booking.status}
                </p>
              </div>

              <div className='flex items-start gap-2'>
                <img 
                  src={assets.calendar_icon_colored} 
                  alt="" 
                  className='w-4 h-4 mt-1'
                />
                <div>
                  <p className='text-gray-500'>Rental Period</p>
                  <p>
                    {booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]}
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-2'>
                <img 
                  src={assets.location_icon_colored} 
                  alt="" 
                  className='w-4 h-4 mt-1'
                />
                <div>
                  <p className='text-gray-500'>Pick-up Location</p>
                  <p>{booking.car.location}</p>
                </div>
              </div>

            </div>

            {/* Right - Price Section */}
            <div className='flex flex-col justify-between items-end text-right'>
              <div>
                <p className='text-gray-500'>Total Price</p>
                <h1 className='text-2xl font-semibold text-primary'>
                  {currencyy}{booking.price}
                </h1>
                <p>
                  Booked on {booking.createdAt.split('T')[0]}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default MyBookings