import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { dummyCarData, assets } from '../assets/assets'

const CarDetails = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)

  useEffect(() => {
    const foundCar = dummyCarData.find(car => car._id === id)
    setCar(foundCar)
  }, [id])

  if (!car) {
    return <p className="text-center mt-20">Loading...</p>
  }

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/cars')}
        className="flex items-center gap-2 mb-6 text-gray-600 hover:text-black transition"
      >
        <img 
          src={assets.arrow_icon} 
          alt="back" 
          className='rotate-180 opacity-65 w-4' 
        />
        Back to all cars
      </button>

      {/* Car Details */}
      <div>
        <h1 className="text-3xl font-semibold">{car.name}</h1>
        <img src={car.image} alt={car.name} className="w-full max-w-lg mt-4 rounded-lg" />
        <p className="mt-4 text-gray-600">{car.description}</p>
      </div>

    </div>
  )
}

export default CarDetails