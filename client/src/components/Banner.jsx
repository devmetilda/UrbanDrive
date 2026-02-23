import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-center py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-center gap-6'>
      <div>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>Do You Own a Luxury Car?</h2>
        <p className='text-lg mb-2'>Monetize your vehicle effortlessly by listing it on CarRental.</p>
        <p className='text-base text-gray-600'>We take care of insurance,driver verification and secure payments - so you can earn passive income, stress-free.</p>
        <button className='px-8 py-3 bg-primary text-white rounded-md mt-6 hover:bg-primary/90 transition-colors duration-300'>List Your Car</button>
      </div>

        <img src={assets.banner_car_image} alt="Banner Image" className='w-full h-full object-cover rounded-lg' />
      
      
    </div>
  )
}

export default Banner
