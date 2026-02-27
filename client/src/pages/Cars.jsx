import React from 'react'
import Title from '../components/Title'

const Cars = () => {
  return (
    <div>
      
      <div className='flex flex-col items-center py-20 bg-gray-100 max-md:px-4'>
        <div className='text-center max-w-2xl'>
          <Title 
            title="Available Cars" 
            subtitle="Browse our selection of premium vehicles available for your next adventure"
          />
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-16'>
      </div>

    </div>
  )
}

export default Cars