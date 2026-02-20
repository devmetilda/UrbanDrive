import React from "react"
import { assets, menuLinks } from "../assets/assets"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <div className="flex items-center justify-between h-20 px-8 md:px-16 lg:px-24 xl:px-32 bg-black border-b border-gray-800">

      {/* LOGO */}
      <Link to="/" className="flex items-center h-full">
        <img
          src={assets.image}   // or assets.logo
          alt="UrbanDrive logo"
          className="max-h-[90%] w-auto object-contain"
        />
      </Link>

      {/* MENU */}
      <div className="flex items-center gap-8 text-gray-200 font-medium">
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="hover:text-red-500 transition duration-300"
          >
            {link.name}
          </Link>
        ))}

        <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
          <input type="text" placeholder="Search..." className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"/>
          <img src={assets.search_icon} alt="Search"/>
        </div>
        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button className="cursor-pointer">Dashboard</button>
          <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg">Login</button>
        </div>
      </div>

    </div>
  )
}

export default Navbar