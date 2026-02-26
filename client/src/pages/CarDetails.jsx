import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { dummyCarData, assets } from '../assets/assets'

const CarDetails = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)

  useEffect(() => {
    const foundCar = dummyCarData.find(
      (car) => car._id.toString() === id
    )
    setCar(foundCar)
  }, [id])

  if (!car) {
    return <p className="text-center mt-20">Loading...</p>
  }

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className='flex items-center gap-2 mb-6 text-gray-500 hover:text-black transition cursor-pointer'
      >
        <img
          src={assets.arrow_icon}
          alt="back"
          className='rotate-180 opacity-65 w-4 h-4'
        />
        Back to all cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>

        {/* Left: Car Image & Details */}
        <div className='lg:col-span-2'>
          <img
            src={car.image}
            alt={car.model}
            className='w-full h-auto md:max-h-[500px] object-cover rounded-xl mb-6 shadow-md'
          />

          <div className='space-y-6'>
            <div>
              <h1 className='text-3xl font-bold'>
                {car.brand} {car.model}
              </h1>
              <p className='text-gray-500 text-lg'>
                {car.category} • {car.year}
              </p>
            </div>

            <hr className='border-borderColor my-6' />

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              <div className='bg-gray-100 p-4 rounded-lg text-center'>
                <p className='text-sm text-gray-500'>Fuel</p>
                <p className='font-semibold'>{car.fuel}</p>
              </div>

              <div className='bg-gray-100 p-4 rounded-lg text-center'>
                <p className='text-sm text-gray-500'>Transmission</p>
                <p className='font-semibold'>{car.transmission}</p>
              </div>

              <div className='bg-gray-100 p-4 rounded-lg text-center'>
                <p className='text-sm text-gray-500'>Seats</p>
                <p className='font-semibold'>{car.seats}</p>
              </div>

              <div className='bg-gray-100 p-4 rounded-lg text-center'>
                <p className='text-sm text-gray-500'>Price / Day</p>
                <p className='font-semibold text-red-600'>
                  ₹{car.pricePerDay}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className='bg-white p-6 rounded-xl shadow-md h-fit'>
          <h2 className='text-xl font-semibold mb-4'>Book This Car</h2>

          <form className='space-y-4'>
            <input
              type="date"
              className='w-full border p-2 rounded-md'
              required
            />
            <input
              type="date"
              className='w-full border p-2 rounded-md'
              required
            />
            <button
              type="submit"
              className='w-full bg-[#B30812] hover:bg-[#8F0610] text-white py-2 rounded-md transition'
            >
              Book Now
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default CarDetails