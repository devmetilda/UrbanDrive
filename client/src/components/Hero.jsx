import React from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = React.useState("")

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>

      <h1 className='text-4xl md:text-5xl font-semibold'>
        Luxury cars on Rent
      </h1>

      {/* CENTERING WRAPPER */}
      <div className="w-full flex justify-center">

        {/* SEARCH BAR */}
        <form className='flex items-center justify-center gap-14 px-12 py-6 rounded-full w-full max-w-4xl bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>

          {/* LOCATION */}
          <div className='flex flex-col justify-center items-start w-44 text-left'>
            <select
              required
              value={pickupLocation}
              onChange={(e)=>setPickupLocation(e.target.value)}
              className='font-medium outline-none bg-transparent'
            >
              <option value="">Pickup Location</option>
              {cityList.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <p className='text-sm text-gray-500'>
              {pickupLocation ? pickupLocation : "Please select location"}
            </p>
          </div>

          {/* PICKUP DATE */}
          <div className='flex flex-col justify-center items-start w-40 text-left'>
            <label className='font-medium'>Pick-up Date</label>
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className='text-gray-500 outline-none bg-transparent'
              required
            />
          </div>

          {/* RETURN DATE */}
          <div className='flex flex-col justify-center items-start w-40 text-left'>
            <label className='font-medium'>Return Date</label>
            <input
              type="date"
              className='text-gray-500 outline-none bg-transparent'
              required
            />
          </div>

          {/* SEARCH BUTTON (unchanged except alignment) */}
          <button
            type="submit"
            className='flex items-center justify-center gap-2 px-10 py-3 bg-red-800 hover:bg-red-900 transition-colors duration-300 text-white rounded-full cursor-pointer'
          >
            <img
              src={assets.search_icon}
              alt="search"
              className='brightness-0 invert'
            />
            Search
          </button>

        </form>

      </div>

      {/* CAR IMAGE */}
      <img src={assets.main_car} alt="car" className='max-h-72' />

    </div>
  )
}

export default Hero