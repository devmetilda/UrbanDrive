import React, { useState } from "react"
import { assets, menuLinks } from "../assets/assets"
import { Link, useNavigate } from "react-router-dom"

const Navbar = ({ setShowLogin }) => {

  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-between h-20 px-8 md:px-16 lg:px-24 xl:px-32 bg-black border-b border-gray-800 relative">

      {/* LOGO */}
      <Link to="/" className="flex items-center h-full">
        <img
          src={assets.image}
          alt="UrbanDrive logo"
          className="max-h-[90%] w-auto object-contain"
        />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden sm:flex items-center gap-8 text-gray-200 font-medium">

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
          <input
            type="text"
            placeholder="Search..."
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
          />
          <img src={assets.search_icon} alt="Search"/>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={() => navigate("/owner")} className="cursor-pointer">
            Dashboard
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
          >
            Login
          </button>
        </div>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="sm:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img src={assets.menu_icon} alt="menu" className="w-6 h-6" />
      </button>


      {/* MOBILE SIDEBAR */}
      <div
        className={`sm:hidden fixed inset-0 bg-black text-gray-200 flex flex-col transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-800">
          <img
            src={assets.image}
            alt="logo"
            className="h-12 w-auto object-contain"
          />

          <button onClick={() => setOpen(false)}>
            <img src={assets.close_icon} alt="close" className="w-7 h-7" />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col gap-6 px-8 py-8 text-lg font-medium">

          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className="hover:text-red-500"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => {
              navigate("/owner")
              setOpen(false)
            }}
            className="text-left hover:text-red-500"
          >
            Dashboard
          </button>

          <button
            onClick={() => {
              setShowLogin(true)
              setOpen(false)
            }}
            className="text-left hover:text-red-500"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  )
}

export default Navbar