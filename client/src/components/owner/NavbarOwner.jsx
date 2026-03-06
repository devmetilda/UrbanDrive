import React from 'react'
import { Link } from 'react-router-dom'
import { assets, dummyUserData } from '../../assets/assets'

const NavbarOwner = () => {

  const user = dummyUserData;

  return (
    <div className='flex items-center justify-between h-20 px-8 md:px-16 lg:px-24 xl:px-32 bg-black border-b border-gray-800 relative'>

      {/* LOGO */}
      <Link to="/" className="flex items-center h-full">
        <img
          src={assets.image}
          alt="UrbanDrive logo"
          className="max-h-[90%] w-auto object-contain"
        />
      </Link>

      {/* Welcome Text */}
      <p className='text-gray-300'>
        Welcome, <span className='text-white font-medium'>{user?.name || "Owner"}</span>
      </p>

    </div>
  )
}

export default NavbarOwner