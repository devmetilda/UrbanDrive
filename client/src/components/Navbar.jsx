import React from 'react'
import {assets, menuLinks} from '../assets/assets'
import { Link } from 'react-router-dom'     

const Navbar = () => {
  
  const location= useLocation()
  const [open, setOpen] = useState(false)
  
  return (
    <div>
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>
    <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-bordercolor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 tansiton-all duration-300 z-50 ${location.pathname === "/" ? "bg-light" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"}
      left-full"}`}>
      {menuLinks.map((link, index) => (
        <Link key={index} to={link.path} className="mx-4 text-sm font-medium">
          {link.name}
        </Link>
      ))}
    </div>  
    </div>
  )
}

export default Navbar
