import React from 'react'
import { assets } from '../assets/assets'
import image from '../assets/image.png'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-16 text-sm bg-black text-gray-400'>
      
      <div className='flex flex-wrap justify-between items-start gap-12 md:gap-8 pb-8 border-b border-gray-700'>
        
        {/* Logo Section */}
        <div>
          <img src={image} alt="logo" className='h-20 object-contain' />
          
          <p className='max-w-80 mt-4 leading-relaxed'>
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>

          <div className='flex items-center gap-4 mt-6'>
            <a href="#"><img src={assets.facebook_logo} alt="Facebook" className='h-5 w-5 invert opacity-70 hover:opacity-100 transition' /></a>
            <a href="#"><img src={assets.instagram_logo} alt="Instagram" className='h-5 w-5 invert opacity-70 hover:opacity-100 transition' /></a>
            <a href="#"><img src={assets.twitter_logo} alt="Twitter" className='h-5 w-5 invert opacity-70 hover:opacity-100 transition' /></a>
            <a href="#"><img src={assets.gmail_logo} alt="Gmail" className='h-5 w-5 invert opacity-70 hover:opacity-100 transition' /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-base font-semibold text-white uppercase tracking-wide'>Quick Links</h2>
          <ul className='mt-4 flex flex-col gap-2'>
            <li><a href="#" className='hover:text-white transition'>Home</a></li>
            <li><a href="#" className='hover:text-white transition'>Browse Cars</a></li>
            <li><a href="#" className='hover:text-white transition'>List Your Car</a></li>
            <li><a href="#" className='hover:text-white transition'>About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className='text-base font-semibold text-white uppercase tracking-wide'>Resources</h2>
          <ul className='mt-4 flex flex-col gap-2'>
            <li><a href="#" className='hover:text-white transition'>Help Center</a></li>
            <li><a href="#" className='hover:text-white transition'>Terms of Service</a></li>
            <li><a href="#" className='hover:text-white transition'>Privacy Policy</a></li>
            <li><a href="#" className='hover:text-white transition'>Insurance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className='text-base font-semibold text-white uppercase tracking-wide'>Contact</h2>
          <ul className='mt-4 flex flex-col gap-2'>
            <li>1234 Luxury Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 234567890</li>
            <li>info@example.com</li>
          </ul>
        </div>

      </div>   

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row gap-3 items-center justify-between pt-6'>
        <p>© {new Date().getFullYear()} UrbanDrive. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#" className='hover:text-white transition'>Privacy</a><span> | </span></li>
          <li><a href="#" className='hover:text-white transition'>Terms</a><span> | </span></li>
          <li><a href="#" className='hover:text-white transition'>Cookies</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer