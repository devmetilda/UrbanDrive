import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 max-md:px-4 pt-14 pb-28 bg-white">
      
      <h1 className="md:text-4xl text-2xl font-semibold">
        Never Miss a Deal!
      </h1>

      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>

      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">

        <input
          className="border border-gray-300 h-full outline-none w-full px-4 text-gray-600 rounded-l-md"
          type="email"
          placeholder="Enter your email id"
          required
        />

        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-[#B30812] hover:bg-[#8F0610] transition-all duration-300 cursor-pointer rounded-r-md font-medium"
        >
          Subscribe
        </button>

      </form>

    </div>
  )
}

export default Newsletter