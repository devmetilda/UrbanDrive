import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const Testimonial = () => {

  const testimonials = [
    { 
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: assets.testimonial_image_1,
      testimonial: "I've rented cars from various companies, but the experience with UrbanDrive was exceptional." 
    },
    { 
      name: "John Smith",
      location: "New York, USA",
      image: assets.testimonial_image_2,
      testimonial: "UrbanDrive made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!" 
    },
    { 
      name: "Ava Johnson",
      location: "Sydney, Australia",
      image: assets.testimonial_image_1,
      testimonial: "I highly recommend UrbanDrive! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service." 
    }
  ];

  return (
    <div className="py-24 px-6 md:px-16 lg:px-24 xl:px-44 bg-white">

      <Title 
        title="What Our Customers Say"
        subTitle="Discover why discerning travelers choose UrbanDrive for their premium car rental experience."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >

            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <img 
                className="w-14 h-14 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </div>

            {/* Red Stars */}
            <div className="flex items-center gap-1 mt-4 text-red-600">
              {Array(5).fill(0).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 2l2.9 6.3 6.9.6-5.2 4.7 1.6 6.8L12 17.8l-6.2 3.6 1.6-6.8L2.2 8.9l6.9-.6L12 2z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              "{testimonial.testimonial}"
            </p>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Testimonial